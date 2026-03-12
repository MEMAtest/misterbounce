import Image from "next/image";
import aboutData from "../../data/about.json";

export default function About() {
  const paragraphs = aboutData.bio.split("\n\n").filter(Boolean);

  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Photo */}
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={aboutData.photo}
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
              {paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Credential badges */}
            <div className="mt-8 flex flex-wrap gap-3">
              {aboutData.credentials.map((cred) => (
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
