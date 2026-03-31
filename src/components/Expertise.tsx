import React from 'react';

// Constantes
const ANIMATION_STYLES = `
  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .anim-fadeup {
    opacity: 0;
    animation: fadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }
`;

const EXPERTISE_DATA = [
  {
    id: 'infrastructure-reseau',
    tag: 'Infrastructure Réseau',
    title: 'Des réseaux performants et sécurisés',
    description: 'Nous concevons des architectures réseau modernes qui allient performance, sécurité et évolutivité pour accompagner votre croissance.',
    items: [
      'Architecture LAN/WAN haute disponibilité',
      'SD-WAN pour interconnexion multi-sites',
      'Segmentation VLAN et Zero Trust',
      'Wi-Fi professionnel et gestion centralisée',
      'Firewalls nouvelle génération (NGFW)',
      'Load balancing et redondance'
    ],
    image: '/images/infra.png',
    imageAlt: 'Architecture réseau professionnelle',
    reverse: false,
  },
  {
    id: 'virtualisation',
    tag: 'Virtualisation',
    title: 'Optimisez vos ressources avec la virtualisation',
    description: 'Consolidez vos serveurs, améliorez votre agilité et réduisez vos coûts grâce à nos solutions de virtualisation avancées.',
    items: [
      'VMware vSphere & ESXi pour entreprises',
      'Microsoft Hyper-V et System Center',
      'Proxmox VE pour infrastructures flexibles',
      'Kubernetes et orchestration de containers',
      'VDI (Virtual Desktop Infrastructure)',
      'Haute disponibilité et disaster recovery'
    ],
    image: '/images/virt.png',
    imageAlt: 'Solutions de virtualisation',
    reverse: true,
  },
  {
    id: 'sauvegarde-protection',
    tag: 'Sauvegarde & Protection',
    title: 'Vos données protégées en toute circonstance',
    description: "Stratégies de sauvegarde immutable et plans de reprise d'activité pour garantir la continuité de vos opérations.",
    items: [
      'Stratégie 3-2-1 (3 copies, 2 supports, 1 hors site)',
      'Backup immutable contre ransomwares',
      'Veeam Backup & Replication',
      'Réplication temps réel et asynchrone',
      'Tests automatiques de restauration',
      'RPO/RTO optimisés selon vos besoins'
    ],
    image: '/images/backup.png',
    imageAlt: 'Solutions de sauvegarde',
    reverse: false,
  },
  {
    id: 'developpement-automatisation',
    tag: 'Développement & Automatisation',
    title: 'Automatisez et optimisez vos processus IT',
    description: 'Nos développeurs créent des outils sur mesure pour automatiser vos tâches répétitives et interconnecter vos systèmes.',
    items: [
      'Scripts Python pour automatisation',
      'Applications web PHP personnalisées',
      'APIs REST pour intégration systèmes',
      'Infrastructure as Code (Terraform, Ansible)',
      "Développement d'outils de migration",
      'Dashboards et reporting personnalisés'
    ],
    image: '/images/dev.png',
    imageAlt: 'Développement et automatisation',
    reverse: true,
  },
];

// Composants
const ServiceBlock = ({ 
  tag, 
  title, 
  description, 
  items, 
  image, 
  imageAlt, 
  reverse, 
  index 
}) => {
  const textContent = (
    <div className={reverse ? 'lg:order-2' : ''}>
      <span className="inline-block text-xs font-semibold tracking-widest text-blue-600 uppercase mb-4">
        {tag}
      </span>
      <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-snug">
        {title}
      </h2>
      <p className="text-gray-500 mb-8 leading-relaxed">
        {description}
      </p>
      <ul className="space-y-3" role="list">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0 mt-2" aria-hidden="true" />
            <span className="text-sm text-gray-600">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  const imageContent = (
    <div className={reverse ? 'lg:order-1' : ''}>
      <div 
        className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden shadow-sm aspect-[4/3]"
        role="img"
        aria-label={imageAlt}
      >
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );

  return (
    <div
      className="grid lg:grid-cols-2 gap-16 items-center anim-fadeup"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {reverse ? (
        <>
          {imageContent}
          {textContent}
        </>
      ) : (
        <>
          {textContent}
          {imageContent}
        </>
      )}
    </div>
  );
};

ServiceBlock.displayName = 'ServiceBlock';

// Composant principal
const Expertise = () => {
  return (
    <>
      <style>{ANIMATION_STYLES}</style>
      <section 
        id="expertise" 
        className="py-24 bg-white"
        aria-labelledby="expertise-title"
      >
        <div className="max-w-6xl mx-auto px-8">
          {/* En-tête de section */}
          <header className="mb-20 anim-fadeup">
            <span className="inline-block text-xs font-semibold tracking-widest text-blue-600 uppercase mb-3">
              Nos domaines d&apos;expertise
            </span>
            <h2 
              id="expertise-title"
              className="text-4xl font-bold text-gray-900 max-w-xl leading-tight"
            >
              Des solutions IT complètes et sur mesure
            </h2>
            <div 
              className="w-12 h-0.5 bg-blue-600 mt-6" 
              aria-hidden="true"
            />
          </header>

          {/* Liste des services */}
          <div className="space-y-24">
            {EXPERTISE_DATA.map((service, index) => (
              <ServiceBlock
                key={service.id}
                {...service}
                index={index + 1}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

Expertise.displayName = 'Expertise';

export default Expertise;