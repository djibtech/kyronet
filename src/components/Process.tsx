import { Search, FileText, Cog, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Audit & Analyse',
    description: 'Nous évaluons votre infrastructure existante, identifions les points d\'amélioration et définissons vos besoins.',
    duration: '1-2 semaines'
  },
  {
    icon: FileText,
    title: 'Conception',
    description: 'Notre équipe conçoit une architecture sur mesure, optimisée pour vos processus et vos objectifs métier.',
    duration: '2-3 semaines'
  },
  {
    icon: Cog,
    title: 'Déploiement',
    description: 'Mise en œuvre progressive de la solution avec tests rigoureux et formation de vos équipes.',
    duration: '4-8 semaines'
  },
  {
    icon: Rocket,
    title: 'Support continu',
    description: 'Supervision 24/7, maintenance préventive et optimisation continue de votre infrastructure.',
    duration: 'Illimité'
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">

          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Un processus éprouvé pour votre réussite
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            De l&apos;analyse initiale au support continu, nous vous accompagnons à chaque étape
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all group">
                <div className="absolute -top-4 -left-4 bg-gradient-to-br from-blue-600 to-cyan-600 w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-xl shadow-xl">
                  {index + 1}
                </div>

                <div className="bg-gradient-to-br from-blue-600 to-cyan-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <step.icon className="w-8 h-8" strokeWidth={2} />
                </div>

                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-slate-300 mb-4 leading-relaxed">{step.description}</p>
                <div className="inline-block bg-amber-400/20 text-amber-300 px-3 py-1 rounded-full text-sm font-semibold">
                  {step.duration}
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-600 to-transparent"></div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 inline-block">
            <p className="text-lg mb-4">
              Besoin d&apos;un accompagnement sur mesure ?
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-blue-600/50 transition-all">
              Planifier un audit gratuit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
