import { ArrowRight, Cpu, Shield, Zap, Globe, Activity, Server, Code } from 'lucide-react';
import { useState } from 'react';

const SERVICES_DATA = [
  {
    id: 'infrastructure-reseau',
    number: '01',
    title: 'Infrastructure Réseau',
    description: "Architectures réseau nouvelle génération avec SD-WAN, sécurité Zero Trust et redondance intelligente.",
    tags: ['LAN/WAN', 'SD-WAN', 'Zero Trust', 'NGFW'],
    icon: Server,
    gradient: 'from-blue-500 to-cyan-500',
    stats: '99.99% uptime',
    bgGlow: 'bg-blue-500/20'
  },
  {
    id: 'virtualisation',
    number: '02',
    title: 'Virtualisation',
    description: 'Optimisation des ressources et haute disponibilité avec les technologies de virtualisation les plus avancées.',
    tags: ['VMware', 'Hyper-V', 'Kubernetes', 'VDI'],
    icon: Cpu,
    gradient: 'from-purple-500 to-pink-500',
    stats: '70% économie',
    bgGlow: 'bg-purple-500/20'
  },
  {
    id: 'developpement-automatisation',
    number: '03',
    title: 'Développement & Automation',
    description: "Solutions sur mesure et automatisation intelligente pour transformer votre système d'information.",
    tags: ['Python', 'Go', 'APIs', 'IaC'],
    icon: Code,
    gradient: 'from-orange-500 to-red-500',
    stats: '90% + rapidité',
    bgGlow: 'bg-orange-500/20'
  },
  {
    id: 'sauvegarde-plan-reprise',
    number: '04',
    title: 'Data Protection',
    description: "Protection immuable et stratégies de recovery avancées pour garantir la continuité de vos activités.",
    tags: ['Immutable', 'Veeam', 'DRP', '3-2-1'],
    icon: Shield,
    gradient: 'from-green-500 to-emerald-500',
    stats: 'RPO < 15min',
    bgGlow: 'bg-green-500/20'
  },
  {
    id: 'supervision-24-7',
    number: '05',
    title: 'Observabilité 360',
    description: "Monitoring proactif, AIOps et visualisation temps réel pour une maîtrise totale de votre infrastructure.",
    tags: ['Grafana', 'Prometheus', 'ELK', 'AIOps'],
    icon: Activity,
    gradient: 'from-yellow-500 to-orange-500',
    stats: 'Alerting < 1min',
    bgGlow: 'bg-yellow-500/20'
  },
  {
    id: 'cloud-hybride',
    number: '06',
    title: 'Cloud Hybride',
    description: "Orchestration multi-cloud et hybridation transparente entre on-premise et cloud public.",
    tags: ['AWS', 'Azure', 'GCP', 'Anthos'],
    icon: Globe,
    gradient: 'from-indigo-500 to-purple-500',
    stats: '+200% scalabilité',
    bgGlow: 'bg-indigo-500/20'
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section 
      id="services" 
      className="relative py-32 bg-[#1A2436] overflow-hidden"
      style={{
        background: 'radial-gradient(circle at 50% 0%, #1A2436, #0a0a0a 70%)'
      }}
    >
      {/* Éléments décoratifs - Orbes flottantes */}
      <div className="absolute w-96 h-96 top-20 -left-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute w-[500px] h-[500px] bottom-40 -right-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      {/* Grille de fond */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(37, 99, 235, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37, 99, 235, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* En-tête */}
        <div className="text-center mb-20">

          
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            L'excellence
            <span className="relative ml-3">
              <span className="relative z-10 bg-blue-400 bg-clip-text text-transparent">
                technique
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500  rounded-full"></span>
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Des solutions innovantes qui redéfinissent les standards de l'infrastructure IT
          </p>
        </div>

        {/* Grille de services */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-16">
          {SERVICES_DATA.map((service, index) => {
            const Icon = service.icon;
            const isActive = activeIndex === index;
            
            return (
              <div
                key={service.id}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 cursor-pointer hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2"
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                style={{
                  animation: `float${index} 6s ease-in-out infinite`,
                  animationDelay: `${index * 0.5}s`,
                }}
              >
                {/* Effet de glow au survol */}
                <div className={`absolute inset-0 rounded-2xl ${service.bgGlow} blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  {/* En-tête */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${service.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-4xl font-bold text-white/10 group-hover:text-white/20 transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Contenu */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:translate-x-1 transition-transform">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-3 py-1 text-xs bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 hover:bg-blue-500/20 hover:border-blue-500/40 transition-all cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                      {service.stats}
                    </span>
                    <ArrowRight 
                      className="w-5 h-5 text-gray-400 group-hover:text-blue-400 group-hover:translate-x-2 transition-all" 
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        
      </div>

      {/* Ajout des animations personnalisées */}
      <style>{`
        ${[0,1,2,3,4,5].map(i => `
          @keyframes float${i} {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-${10 + i * 2}px); }
          }
        `).join('')}
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default Services;