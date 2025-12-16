/* global document, window */

// ===== Helpers
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

function formatTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// ===== Nav
function initNav() {
  const nav = $('#nav');
  const toggle = $('#navToggle');
  const links = $('#navLinks');

  const close = () => {
    links.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  };
  toggle?.addEventListener('click', () => {
    links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(links.classList.contains('open')));
  });
  $$('#navLinks a').forEach((a) => a.addEventListener('click', close));

  window.addEventListener(
    'scroll',
    () => {
      nav?.classList.toggle('scrolled', window.scrollY > 10);
    },
    { passive: true },
  );
}

// ===== Reveal
function initReveal() {
  const items = $$('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('in');
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
  );
  items.forEach((el) => io.observe(el));
}

// ===== Audio player
function initAudio() {
  const audio = $('#audio');
  if (!audio) return;

  const play = $('#play');
  const bar = $('#bar');
  const fill = $('#fill');
  const cur = $('#cur');
  const dur = $('#dur');
  const vol = $('#vol');

  audio.volume = 0.7;
  vol.value = '70';

  const sync = () => {
    cur.textContent = formatTime(audio.currentTime);
    dur.textContent = formatTime(audio.duration);
    const pct = audio.duration ? (audio.currentTime / audio.duration) * 100 : 0;
    fill.style.width = `${pct}%`;
  };

  audio.addEventListener('loadedmetadata', sync);
  audio.addEventListener('timeupdate', sync);
  audio.addEventListener('ended', () => {
    play.textContent = '▶';
    play.setAttribute('aria-label', 'Play');
  });

  play.addEventListener('click', async () => {
    if (audio.paused) {
      await audio.play();
      play.textContent = '⏸';
      play.setAttribute('aria-label', 'Pause');
    } else {
      audio.pause();
      play.textContent = '▶';
      play.setAttribute('aria-label', 'Play');
    }
  });

  bar.addEventListener('click', (e) => {
    const rect = bar.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const pct = Math.min(1, Math.max(0, x / rect.width));
    audio.currentTime = pct * (audio.duration || 0);
  });

  vol.addEventListener('input', () => {
    audio.volume = Number(vol.value) / 100;
  });
}

// ===== Gallery lightbox
function initLightbox() {
  const lb = $('#lightbox');
  const img = $('#lightboxImg');
  const close = $('#lightboxClose');
  const shots = $$('.shot[data-full]');
  if (!lb || !img || !close || shots.length === 0) return;

  const open = (src, alt) => {
    img.src = src;
    img.alt = alt || 'Photo';
    lb.classList.add('open');
    close.focus();
  };

  const hide = () => {
    lb.classList.remove('open');
    img.removeAttribute('src');
  };

  shots.forEach((s) => {
    s.addEventListener('click', () => open(s.dataset.full, $('img', s)?.alt));
    s.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        open(s.dataset.full, $('img', s)?.alt);
      }
    });
  });

  close.addEventListener('click', hide);
  lb.addEventListener('click', (e) => {
    if (e.target === lb) hide();
  });
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') hide();
  });
}

// ===== Image fallbacks (prefer local photos)
function initImageFallbacks() {
  const imgs = $$('img[data-src-candidates]');

  imgs.forEach((img) => {
    const candidates = (img.dataset.srcCandidates || '')
      .split('|')
      .map((s) => s.trim())
      .filter(Boolean);
    if (candidates.length === 0) return;

    let idx = 0;
    const setSrc = () => {
      img.src = candidates[idx];
      img.dataset.loadedSrc = candidates[idx];
    };

    img.addEventListener('error', () => {
      idx += 1;
      if (idx < candidates.length) setSrc();
    });

    // First load
    setSrc();
  });

  // Keep lightbox "full" in sync with whichever image actually loaded.
  $$('.shot').forEach((shot) => {
    const img = $('img[data-src-candidates]', shot);
    if (!img) return;
    img.addEventListener('load', () => {
      const loaded = img.dataset.loadedSrc || img.getAttribute('src');
      if (loaded) shot.dataset.full = loaded;
    });
  });
}

// ===== Tours
// Edit these to match real dates/venues.
const TOUR_DATES = [
  {
    date: '2025-01-18',
    city: 'London',
    country: 'UK',
    venue: 'Studio Night (Soho)',
    status: 'Tickets',
    url: '#contact',
  },
  {
    date: '2025-02-01',
    city: 'Manchester',
    country: 'UK',
    venue: 'Warehouse Sessions',
    status: 'Tickets',
    url: '#contact',
  },
  {
    date: '2025-02-22',
    city: 'Birmingham',
    country: 'UK',
    venue: 'Late Night Grooves',
    status: 'Guest List',
    url: '#contact',
  },
  {
    date: '2025-03-08',
    city: 'Amsterdam',
    country: 'NL',
    venue: 'Canal Club',
    status: 'Announced',
    url: '#contact',
  },
];

function monthShort(d) {
  return d.toLocaleString(undefined, { month: 'short' });
}

function createIcs(event) {
  const start = new Date(`${event.date}T21:00:00`);
  const end = new Date(`${event.date}T23:30:00`);
  const stamp = new Date();

  const icsDate = (dt) =>
    dt
      .toISOString()
      .replace(/[-:]/g, '')
      .replace(/\.\d{3}Z$/, 'Z');

  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Mister Bounce//Tour Dates//EN',
    'CALSCALE:GREGORIAN',
    'BEGIN:VEVENT',
    `UID:${crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`}@misterbounce`,
    `DTSTAMP:${icsDate(stamp)}`,
    `DTSTART:${icsDate(start)}`,
    `DTEND:${icsDate(end)}`,
    `SUMMARY:${event.venue} — Mister Bounce`,
    `LOCATION:${event.city}, ${event.country}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ];

  return lines.join('\r\n');
}

function download(filename, text) {
  const blob = new Blob([text], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function initTours() {
  const mount = $('#toursMount');
  if (!mount) return;

  const filters = {
    all: () => true,
    uk: (e) => e.country === 'UK',
    eu: (e) => e.country !== 'UK',
  };

  const render = (filterKey = 'all') => {
    mount.innerHTML = '';
    const list = TOUR_DATES.slice()
      .sort((a, b) => a.date.localeCompare(b.date))
      .filter(filters[filterKey] || filters.all);

    if (list.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'card';
      empty.style.padding = '16px';
      empty.innerHTML = '<strong>No dates in this filter yet.</strong> <span class="muted">Check back soon.</span>';
      mount.appendChild(empty);
      return;
    }

    list.forEach((e) => {
      const d = new Date(`${e.date}T12:00:00`);
      const el = document.createElement('article');
      el.className = 'card tour reveal in';
      el.innerHTML = `
        <div class="tour-date" aria-hidden="true">
          <div class="m">${monthShort(d)}</div>
          <div class="d">${d.getDate()}</div>
        </div>
        <div class="tour-body">
          <h3>${e.city} — ${e.venue}</h3>
          <p>${d.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} • ${e.country}</p>
          <div class="tour-actions">
            <a href="${e.url}" aria-label="${e.status} for ${e.city}">${e.status}</a>
            <button type="button" data-ics="${e.date}">Add to Calendar</button>
          </div>
        </div>
      `;
      mount.appendChild(el);
      const btn = $('button[data-ics]', el);
      btn?.addEventListener('click', () => {
        const ics = createIcs(e);
        download(`mister-bounce-${e.city.toLowerCase().replace(/\s+/g, '-')}-${e.date}.ics`, ics);
      });
    });
  };

  const pills = $$('.pill[data-filter]');
  pills.forEach((p) =>
    p.addEventListener('click', () => {
      pills.forEach((x) => x.setAttribute('aria-pressed', 'false'));
      p.setAttribute('aria-pressed', 'true');
      render(p.dataset.filter);
    }),
  );

  render('all');
}

// ===== Init
document.getElementById('year')?.append(String(new Date().getFullYear()));
initNav();
initReveal();
initImageFallbacks();
initAudio();
initLightbox();
initTours();
