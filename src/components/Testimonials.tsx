import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Marie Dubois',
    role: 'DSI, TechCorp France',
    company: 'TechCorp',
    content: 'Kyronet a transformé notre infrastructure IT. Leur expertise en virtualisation et leur approche sur mesure nous ont permis de réduire nos coûts de 40% tout en améliorant nos performances.',
    rating: 5,
    image: '👩‍💼'
  },
  {
    name: 'Ayanleh',
    role: 'IT Ingenieur',
    company: 'Academie Arabe',
    content: 'L\'équipe de Kyronet a déployé une solution de sauvegarde immutable qui nous donne une tranquillité d\'esprit totale. Leur support 24/7 est exceptionnel.',
    rating: 5,
    image: '👨‍💼'
  },
  {
    name: 'Mahad Osman',
    role: 'IT, Banque Centrale de Djibouti',
    company: 'SecureBank',
    content: 'La migration vers notre nouvelle infrastructure réseau s\'est faite sans aucune interruption de service. Le professionnalisme de Kyronet est remarquable.',
    rating: 5,
    image: '👩‍💻'
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">

          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Ils nous font confiance
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Plus de 120 entreprises ont choisi Kyronet pour leur infrastructure IT
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <Quote className="w-10 h-10 text-blue-600/20 mb-4" />

              <p className="text-slate-700 mb-6 leading-relaxed">
                &quot;{testimonial.content}&quot;
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-bold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-600">{testimonial.role}</div>
                  <div className="text-xs text-blue-600 font-semibold">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Rejoignez nos clients satisfaits
          </h3>
          <p className="text-xl text-blue-100 mb-8">
            Découvrez comment nous pouvons transformer votre infrastructure IT
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all">
            Demander une démo
          </button>
        </div>
      </div>
    </section>
  );
}
