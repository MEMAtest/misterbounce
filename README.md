# Mister Bounce — Static Website (Netlify-ready)

## Quick start

- Open `index.html` in a browser (double-click), or run a local server from this folder:
  - `cd "mister bounce" && python3 -m http.server 5173`
  - Then visit `http://localhost:5173`

## Replace the demo content

- Instagram photos:
  - Download the images you want to use (don’t hotlink Instagram URLs).
  - Put your hero photo at `assets/images/hero.jpg` (or `assets/images/hero.png`).
  - Put gallery photos at `assets/images/gallery/insta-1.png` … `insta-6.png` (or `.jpg`).
  - The site is already wired to these filenames and will fall back to placeholders if missing.
- Tours: edit the `TOUR_DATES` array in `assets/main.js`.
- Social links: edit the links in `index.html` (search for `YOURPROFILE`).
- Featured audio: replace `assets/audio/featured.wav` with your own file (or update the `<audio>` sources in `index.html`).
- Contact form:
  - Netlify Forms is enabled (`data-netlify="true"`). Submissions appear in the Netlify dashboard after deploy.

## Deploy to Netlify

1. Drag-and-drop this folder (`mister bounce`) into Netlify, or connect it as a Git repo.
2. In Netlify:
   - **Build command**: (leave empty)
   - **Publish directory**: (set to the folder root)
