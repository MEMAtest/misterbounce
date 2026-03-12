"use client";

import { useEffect } from "react";

export default function LoginPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://identity.netlify.com/v1/netlify-identity-widget.js";
    script.onload = () => {
      const netlifyIdentity = (window as { netlifyIdentity?: { on: (event: string, cb: () => void) => void } }).netlifyIdentity;
      if (netlifyIdentity) {
        netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    };
    document.head.appendChild(script);
  }, []);

  const handleLogin = () => {
    const netlifyIdentity = (window as { netlifyIdentity?: { open: () => void } }).netlifyIdentity;
    netlifyIdentity?.open();
  };

  return (
    <section className="section bg-black flex items-center justify-center">
      <div className="text-center px-6">
        <div className="mb-8">
          <h1 className="text-4xl font-black text-white mb-2">
            Mister <span className="text-primary">Bounce</span>
          </h1>
          <p className="text-white/50 text-sm uppercase tracking-widest">Admin Dashboard</p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-10 max-w-sm mx-auto">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-white mb-2">Welcome back, Oni</h2>
          <p className="text-white/50 text-sm mb-8">Sign in to manage your site content</p>
          <button
            onClick={handleLogin}
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-xl transition-colors"
          >
            Sign In
          </button>
        </div>

        <p className="text-white/30 text-xs mt-8">
          After signing in you&apos;ll be taken to the content editor
        </p>
      </div>
    </section>
  );
}
