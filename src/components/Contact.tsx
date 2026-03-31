import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-block bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Contactez-nous
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Prêt à transformer votre infrastructure IT ?
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Discutons de vos besoins et découvrez comment Kyronet peut propulser votre entreprise vers le futur.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600/20 p-3 rounded-xl">
                  <Phone className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Téléphone</div>
                  <a href="tel:+25377309407" className="text-slate-300 hover:text-white transition-colors">
                    +25377309407
                  </a>
                  <p className="text-sm text-slate-400 mt-1">Dim-Jeu 8h-18h</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-600/20 p-3 rounded-xl">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Email</div>
                  <a href="mailto:contact@kyronet.fr" className="text-slate-300 hover:text-white transition-colors">
                    contact@kyronet.net
                  </a>
                  <p className="text-sm text-slate-400 mt-1">Réponse sous 24h</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-600/20 p-3 rounded-xl">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Adresse</div>
                  <p className="text-slate-300">
                    Q6<br />
                    Djibouti ville
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-slate-300 mb-4">Suivez-nous</p>
              <div className="flex gap-3">
                <a href="#" className="bg-white/10 hover:bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="bg-white/10 hover:bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="bg-white/10 hover:bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-6">Demander un audit gratuit</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Nom complet</label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Jean Dupont"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email professionnel</label>
                <input
                  type="email"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="jean.dupont@entreprise.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Téléphone</label>
                <input
                  type="tel"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="+33 6 12 34 56 78"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Entreprise</label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Nom de votre entreprise"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Décrivez vos besoins en infrastructure IT..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-600/50 transition-all flex items-center justify-center gap-2"
              >
                Envoyer ma demande
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
