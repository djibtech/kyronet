import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown } from "react-feather";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ fontFamily: "'DM Sans', 'Segoe UI', sans-serif" }}
    >
      {/* Fond blanc avec léger dégradé pour la cohérence */}
      <div
        className="absolute inset-0 z-0 bg-white"
        style={{
          background:
            "linear-gradient(180deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%)",
        }}
      />

      {/* Légère lueur bleue en haut à droite (accent discret) */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[400px] z-[1] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(59,130,246,0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Grille très subtile */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#64748b 1px, transparent 1px), linear-gradient(90deg, #64748b 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      {/* Content - Centré */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1
          className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-tight mb-6"
          style={{
            color: "#0f172a",
            letterSpacing: "-0.02em",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
            transitionDelay: "150ms",
          }}
        >
          Votre infrastructure IT,{" "}
          <span
            style={{
              background:
                "linear-gradient(135deg, #2563eb 0%, #3b82f6 50%, #6366f1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            notre expertise.
          </span>
        </h1>

        <p
          className="text-2xl text-balance leading-relaxed mb-10"
          style={{
            color: "#475569",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(16px)",
            transition: "all 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
            transitionDelay: "280ms",
          }}
        >
          Nous concevons, déployons et gérons des infrastructures informatiques
          sur mesure pour propulser votre entreprise.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(16px)",
            transition: "all 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
            transitionDelay: "400ms",
          }}
        >
          <button
            className="group relative overflow-hidden px-7 py-3.5 rounded-xl text-lg font-semibold text-white inline-flex items-center gap-2.5 transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)",
              boxShadow:
                "0 0 0 0 rgba(37,99,235,0.4), 0 4px 20px rgba(37,99,235,0.3)",
              transition: "box-shadow 0.3s ease, transform 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "0 0 0 4px rgba(37,99,235,0.2), 0 8px 30px rgba(37,99,235,0.4)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "0 0 0 0 rgba(37,99,235,0.4), 0 4px 20px rgba(37,99,235,0.3)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <span>Audit gratuit</span>
            <ArrowRight
              size={15}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
            <div
              className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)",
              }}
            />
          </button>

          <button
            className="group px-7 py-3.5 rounded-xl text-sm font-semibold inline-flex items-center gap-2 border transition-all duration-300"
            style={{
              color: "#475569",
              borderColor: "#cbd5e1",
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#0f172a";
              e.currentTarget.style.borderColor = "#94a3b8";
              e.currentTarget.style.background = "#f1f5f9";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#475569";
              e.currentTarget.style.borderColor = "#cbd5e1";
              e.currentTarget.style.background = "transparent";
            }}
          >
            Découvrir nos services
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        style={{
          opacity: isVisible ? 0.6 : 0,
          transition: "opacity 1s ease",
          transitionDelay: "600ms",
        }}
      >
        <span
          className="text-xs uppercase tracking-widest"
          style={{ color: "#64748b" }}
        >
          Scroll
        </span>
        <ChevronDown
          size={18}
          style={{
            color: "#94a3b8",
            animation: "bounce 2s infinite",
          }}
        />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
        @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(6px); } }
      `}</style>
    </section>
  );
}
