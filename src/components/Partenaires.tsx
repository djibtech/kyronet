const styles = `
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes scroll {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }
  .anim-fadeup {
    opacity: 0;
    animation: fadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }
  .logo-track {
    display: flex;
    width: max-content;
    animation: scroll 30s linear infinite;
  }
  .logo-track:hover {
    animation-play-state: paused;
  }
  .logo-fade-left {
    background: linear-gradient(to right, white 0%, transparent 100%);
  }
  .logo-fade-right {
    background: linear-gradient(to left, white 0%, transparent 100%);
  }
`;

const partners = [
  {
    name: 'Cisco',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg',
  },
  {
    name: 'VMware',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Vmware.svg',
  },
  {
    name: 'Microsoft',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
  },
  {
    name: 'Veeam',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Veeam_logo.svg',
  },
  {
    name: 'Dell',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg',
  },
  {
    name: 'HPE',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Hewlett_Packard_Enterprise_logo.svg',
  },
  {
    name: 'Fortinet',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Fortinet_logo.svg',
  },
  {
    name: 'Nutanix',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Nutanix-logo.svg',
  },
];

// Duplicate for infinite scroll
const allPartners = [...partners, ...partners];

export default function Partenaires() {
  return (
    <>
      <style>{styles}</style>
      <section id="partenaires" className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-8">

          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
            <div className="anim-fadeup" style={{ animationDelay: '0ms' }}>
              <span className="text-xs font-semibold tracking-widest text-blue-600 uppercase mb-3 block">
                Partenaires technologiques
              </span>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                Des technologies de référence, des certifications reconnues
              </h2>
              <div className="w-12 h-0.5 bg-blue-600 mt-6"></div>
            </div>
            <div className="anim-fadeup" style={{ animationDelay: '120ms' }}>
              <p className="text-gray-500 leading-relaxed">
                Nous travaillons exclusivement avec les leaders du marché pour vous
                garantir des solutions fiables, évolutives et supportées sur le long terme.
                Nos équipes sont certifiées sur l'ensemble de ces technologies.
              </p>
            </div>
          </div>


          {/* Scrolling logos */}
          <div className="anim-fadeup relative overflow-hidden" style={{ animationDelay: '300ms' }}>
            {/* Fade edges */}
            <div className="logo-fade-left absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"></div>
            <div className="logo-fade-right absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"></div>

            <div className="overflow-hidden">
              <div className="logo-track">
                {allPartners.map((partner, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center mx-10 flex-shrink-0"
                    style={{ width: '140px', height: '80px' }}
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-10 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}