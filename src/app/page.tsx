export default function Home() {
  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-lg font-bold tracking-tight text-foreground uppercase">
            Gladsaxe Loppemarked
          </a>
          <div className="hidden sm:flex gap-8 text-sm font-medium text-muted">
            <a href="#om" className="hover:text-foreground transition-colors duration-200">
              Om os
            </a>
            <a href="#info" className="hover:text-foreground transition-colors duration-200">
              Praktisk info
            </a>
            <a href="#kontakt" className="hover:text-foreground transition-colors duration-200">
              Kontakt
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-white py-28 sm:py-40 px-6">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/[0.04] rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/[0.06] rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

        <div className="relative max-w-3xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <span className="inline-flex flex-col items-center bg-accent-soft text-accent text-base font-semibold px-8 py-4 rounded-2xl mb-10 gap-1 border border-accent/10">
              <span>Hver s&oslash;ndag i Gladsaxe fra 8&ndash;14</span>
              <span className="text-sm text-accent/60 font-medium">1. april &ndash; 15. oktober</span>
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1] mb-6 animate-fade-in-up-delay whitespace-nowrap">
            Gladsaxe Loppemarked.
          </h1>
          <p className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-accent leading-[1.1] mb-6 animate-fade-in-up-delay">
            Giv ting nyt liv.
          </p>
          <p className="text-lg sm:text-xl text-muted mb-12 max-w-md mx-auto leading-relaxed animate-fade-in-up-delay-2">
            Kom forbi Gladsaxe Torv og oplev gl&aelig;den ved genbrug og gode fund.
          </p>
          <div className="flex justify-center animate-fade-in-up-delay-2">
            <a
              href="https://booking.gladsaxeloppemarked.dk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent-light text-white font-semibold px-10 py-4 rounded-full transition-all duration-200 shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/25 hover:-translate-y-0.5 text-base"
            >
              Book en stand &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Om os */}
      <section id="om" className="py-24 px-6 bg-accent-soft">
        <div className="max-w-3xl mx-auto">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest block mb-6">
            Om os
          </span>
          <p className="text-muted text-lg leading-relaxed">
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            <br />
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            <br />
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            <br />
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            <br />
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          </p>
        </div>
      </section>

      {/* Praktisk info */}
      <section id="info" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">
              Praktisk
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 text-foreground">
              Alt du beh&oslash;ver at vide
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-accent-soft rounded-2xl p-7 border border-accent/10 hover:border-accent/20 hover:shadow-md transition-all duration-200">
              <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">Adresse</h3>
              <p className="text-muted text-sm leading-relaxed">
                Gladsaxe Torv
                <br />
                2860 S&oslash;borg
              </p>
            </div>
            <div className="bg-accent-soft rounded-2xl p-7 border border-accent/10 hover:border-accent/20 hover:shadow-md transition-all duration-200">
              <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">&Aring;bningstider</h3>
              <p className="text-muted text-sm leading-relaxed">
                Hver s&oslash;ndag
                <br />
                08:00 &ndash; 14:00
                <br />
                1. april &ndash; 15. oktober
              </p>
            </div>
            <div className="bg-accent-soft rounded-2xl p-7 border border-accent/10 hover:border-accent/20 hover:shadow-md transition-all duration-200">
              <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">Priser</h3>
              <p className="text-muted text-sm leading-relaxed">
                Entr&eacute;: Gratis
                <br />
                Stadeplads: Fra 150 kr.
              </p>
            </div>
            <div className="bg-accent-soft rounded-2xl p-7 border border-accent/10 hover:border-accent/20 hover:shadow-md transition-all duration-200">
              <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center mb-4">
                <span className="text-accent font-bold text-base">P</span>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">Parkering</h3>
              <p className="text-muted text-sm leading-relaxed">
                Gratis parkering
                <br />
                ved loppemarkedet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Book en stand CTA */}
      <section id="booking" className="py-24 px-6 bg-accent-soft">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            Vil du have en stadeplads?
          </h2>
          <p className="text-muted text-lg mb-10">
            Book din plads online og v&aelig;r med n&aelig;ste s&oslash;ndag.
            Stadepladser tildeles efter f&oslash;rst til m&oslash;lle.
          </p>
          <a
            href="https://booking.gladsaxeloppemarked.dk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent-light text-white font-semibold px-10 py-4 rounded-full transition-all duration-200 shadow-lg shadow-accent/25 hover:shadow-xl hover:-translate-y-0.5 text-base"
          >
            Book en stand &rarr;
          </a>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-16">
          <div>
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">
              Kontakt
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-6 text-foreground">
              Vi h&oslash;rer gerne
              <br />
              fra dig
            </h2>
            <p className="text-muted text-lg leading-relaxed">
              Har du sp&oslash;rgsm&aring;l om loppemarkedet, stadepladser eller
              noget helt tredje? T&oslash;v ikke med at kontakte os.
            </p>
          </div>
          <div className="space-y-5">
            <div className="bg-accent-soft rounded-2xl p-6 flex items-start gap-4 border border-accent/10 hover:border-accent/20 hover:shadow-md transition-all duration-200">
              <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <a
                  href="mailto:info@gladsaxeloppemarked.dk"
                  className="text-accent hover:underline"
                >
                  info@gladsaxeloppemarked.dk
                </a>
              </div>
            </div>
            <div className="bg-accent-soft rounded-2xl p-6 flex items-start gap-4 border border-accent/10 hover:border-accent/20 hover:shadow-md transition-all duration-200">
              <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Telefon</h3>
                <a
                  href="tel:+4512345678"
                  className="text-accent hover:underline"
                >
                  +45 12 34 56 78
                </a>
              </div>
            </div>
            <div className="bg-accent-soft rounded-2xl p-6 flex items-start gap-4 border border-accent/10 hover:border-accent/20 hover:shadow-md transition-all duration-200">
              <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Adresse</h3>
                <p className="text-muted">Gladsaxe Torv
                <br />
                2860 S&oslash;borg</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-bold uppercase tracking-tight text-foreground">Gladsaxe Loppemarked</span>
          <p className="text-sm text-muted">
            &copy; 2026 Gladsaxe Loppemarked. Alle rettigheder forbeholdes.
          </p>
        </div>
      </footer>
    </>
  );
}
