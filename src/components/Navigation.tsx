import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    ['services', 'expertise', 'process', 'testimonials', 'faq', 'contact'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: 'services',     label: 'Services' },
    { id: 'expertise',    label: 'Expertise' },
    { id: 'process',      label: 'Processus' },
    { id: 'testimonials', label: 'Témoignages' },
    { id: 'faq',          label: 'FAQ' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,.06),0_8px_32px_rgba(0,0,0,.08)]'
            : 'bg-slate-900'
        }`}
      >
        {/* Top accent line */}
        <div  />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-0 group focus:outline-none"
              aria-label="Retour à l'accueil"
            >
              <div className="relative w-16 h-16 flex-shrink-0">
                <div className="absolute inset-0  rounded-xl opacity-10 group-hover:opacity-20 transition-opacity" />
                <img
                  src="/images/logo.png"
                  alt=""
                  className="relative w-16 h-16 object-cover rounded-xl"
                />
              </div>
              <span
                className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
                  scrolled ? 'text-blue-600' : 'text-white'
                }`}
              >
                Kyronet
              </span>
            </button>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                    activeSection === id
                      ? scrolled
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-white bg-white/15'
                      : scrolled
                        ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {label}
                  {activeSection === id && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-500" />
                  )}
                </button>
              ))}
            </div>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => scrollToSection('contact')}
                className="hidden lg:flex items-center gap-2 bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full
                  hover:bg-blue-700 active:scale-95 transition-all duration-200
                  shadow-[0_0_0_0_rgba(37,99,235,.4)] hover:shadow-[0_0_0_6px_rgba(37,99,235,.15)]
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                Nous contacter
                <ChevronRight className="w-4 h-4 opacity-70" />
              </button>

              <button
                className={`lg:hidden p-2 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                  scrolled
                    ? 'text-slate-600 hover:bg-slate-100'
                    : 'text-white hover:bg-white/10'
                }`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu — full-screen drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-white shadow-2xl transition-transform duration-300 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="h-[2px] bg-gradient-to-r from-blue-600 to-cyan-400" />

          <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <img src="/images/logo.png" alt="" className="w-7 h-7 object-contain" />
              <span className="text-lg font-bold text-slate-900">Kyronet</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="px-4 py-6 flex flex-col gap-1">
            {navLinks.map(({ id, label }, i) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                style={{ transitionDelay: mobileMenuOpen ? `${i * 40}ms` : '0ms' }}
                className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-left font-medium transition-all duration-200
                  ${activeSection === id
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                  }`}
              >
                {label}
                <ChevronRight className={`w-4 h-4 transition-transform ${activeSection === id ? 'translate-x-0.5 text-blue-400' : 'text-slate-300'}`} />
              </button>
            ))}
          </div>

          <div className="absolute bottom-8 left-4 right-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-2xl
                hover:bg-blue-700 active:scale-[.98] transition-all
                shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2"
            >
              Nous contacter
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}