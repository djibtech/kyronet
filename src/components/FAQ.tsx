import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Quels sont vos délais d\'intervention en cas d\'incident ?',
    answer: 'Nous garantissons une prise en charge immédiate 24/7 avec un temps de réponse de moins de 15 minutes pour les incidents critiques. Notre équipe de supervision détecte et résout la majorité des problèmes de manière proactive avant qu\'ils n\'impactent vos utilisateurs.'
  },
  {
    question: 'Proposez-vous un audit gratuit de notre infrastructure ?',
    answer: 'Oui, nous offrons un audit gratuit et sans engagement de votre infrastructure actuelle. Cet audit comprend une analyse complète de votre réseau, de vos serveurs, de votre stratégie de sauvegarde et de votre sécurité. Nous vous fournissons ensuite un rapport détaillé avec nos recommandations.'
  },
  {
    question: 'Comment assurez-vous la sécurité de nos données ?',
    answer: 'Nous mettons en place une approche de sécurité multi-couches : firewalls nouvelle génération, segmentation réseau Zero Trust, chiffrement des données, sauvegardes immutables, et surveillance continue. Toutes nos solutions respectent les normes RGPD et les meilleures pratiques de cybersécurité.'
  },
  {
    question: 'Travaillez-vous avec toutes les technologies ou avez-vous des spécialités ?',
    answer: 'Nous sommes experts en VMware, Hyper-V, Proxmox, Kubernetes, ainsi qu\'en solutions réseau Cisco, Fortinet, et Ubiquiti. Nous maîtrisons également les plateformes cloud AWS, Azure et OVH. Notre équipe de développement travaille principalement en Python, PHP et Go pour l\'automatisation et les applications sur mesure.'
  },
  {
    question: 'Quelle est votre politique de sauvegarde ?',
    answer: 'Nous appliquons la règle 3-2-1 : 3 copies de vos données, sur 2 supports différents, dont 1 hors site. Nous utilisons des solutions de backup immutable pour protéger contre les ransomwares. Des tests de restauration sont effectués automatiquement chaque mois pour garantir la récupérabilité de vos données.'
  },
  {
    question: 'Proposez-vous des formations pour nos équipes ?',
    answer: 'Absolument. Nous incluons systématiquement des sessions de formation lors du déploiement de nouvelles solutions. Nous proposons également des formations continues sur l\'utilisation des outils, les bonnes pratiques de sécurité, et la gestion quotidienne de votre infrastructure.'
  },
  {
    question: 'Quels sont vos modèles de tarification ?',
    answer: 'Nous proposons plusieurs modèles adaptés à vos besoins : forfait mensuel tout inclus, facturation à l\'usage, ou mode projet pour les déploiements ponctuels. Chaque solution est personnalisée selon la taille de votre infrastructure et le niveau de service souhaité. Contactez-nous pour un devis sur mesure.'
  },
  {
    question: 'Puis-je garder mon infrastructure actuelle et la faire évoluer progressivement ?',
    answer: 'Oui, nous favorisons une approche progressive et pragmatique. Nous pouvons intégrer et optimiser votre infrastructure existante, puis la faire évoluer par étapes selon vos priorités et votre budget. Notre objectif est de minimiser les disruptions tout en maximisant les bénéfices.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            FAQ
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Questions fréquentes
          </h2>
          <p className="text-xl text-slate-600">
            Tout ce que vous devez savoir sur nos services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-2xl overflow-hidden hover:border-blue-300 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-semibold text-lg text-slate-900 pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-3">
            Vous avez d&apos;autres questions ?
          </h3>
          <p className="text-slate-300 mb-6">
            Notre équipe est disponible pour répondre à toutes vos interrogations
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all">
            Nous contacter
          </button>
        </div>
      </div>
    </section>
  );
}
