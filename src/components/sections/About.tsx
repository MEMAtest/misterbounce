import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Photo */}
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/gallery/promo/studio-1.jpg"
              alt="Mister Bounce"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Bio */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full mb-4">
              <span className="text-sm font-bold text-primary uppercase tracking-wider">About</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-text-heading mb-6">
              Mister <span className="text-primary">Bounce</span>
            </h2>
            <div className="space-y-4 text-lg text-text-body leading-relaxed">
              <p>
                DJ, radio host, and voiceover artist — Mister Bounce brings the energy
                wherever he goes. A resident at <strong>Crush</strong> and regular at
                <strong> Applebum</strong>, he&apos;s built a reputation for sets that move
                the room from start to finish.
              </p>
              <p>
                Specialising in Hip Hop, RnB, House &amp; Soul, Mister Bounce blends
                classic tracks with fresh sounds to create a vibe that keeps people on
                the dancefloor.
              </p>
              <p>
                Available for club nights, private events, corporate functions, radio
                shows, and voiceover work.
              </p>
            </div>

            {/* Credential badges */}
            <div className="mt-8 flex flex-wrap gap-3">
              {["Crush Resident", "Applebum", "Radio Host", "Voiceover"].map((cred) => (
                <span
                  key={cred}
                  className="px-4 py-2 bg-black text-white text-sm font-bold rounded-full"
                >
                  {cred}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
