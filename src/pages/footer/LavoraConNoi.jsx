export default function LavoraConNoi() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Lavora Con Noi
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Unisciti al team AutoDeal! Cerchiamo persone appassionate del settore automotive 
              che vogliano crescere in un ambiente dinamico e professionale.
            </p>
          </div>
        </div>
      </section>

      {/* Perché Lavorare con Noi */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perché Scegliere AutoDeal
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Un'azienda in crescita che investe sulle persone e offre concrete opportunità di carriera
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-chart-line text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Crescita Professionale</h3>
              <p className="text-gray-700">
                Percorsi di formazione continua e possibilità di avanzamento in un'azienda in espansione.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-users text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Team Affiatato</h3>
              <p className="text-gray-700">
                Lavora in un ambiente collaborativo con colleghi esperti pronti a condividere le loro conoscenze.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-euro-sign text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Compensi Competitivi</h3>
              <p className="text-gray-700">
                Stipendi allineati al mercato, sistemi di incentivazione e benefit aziendali.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-balance-scale text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Work-Life Balance</h3>
              <p className="text-gray-700">
                Orari flessibili e attenzione al benessere dei dipendenti per un equilibrio vita-lavoro ottimale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Posizioni Aperte */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Posizioni Aperte
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Scopri le opportunità di lavoro disponibili nel nostro team
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Consulente Vendite */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="bg-orange-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-handshake text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Consulente Vendite Senior</h3>
                    <p className="text-orange-600">Full-time • Milano</p>
                  </div>
                </div>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Aperta
                </span>
              </div>
              
              <p className="text-gray-700 mb-6">
                Cerchiamo un consulente vendite esperto per ampliare il nostro team commerciale. 
                Esperienza nel settore automotive preferibile ma non indispensabile.
              </p>
              
              <div className="space-y-3 mb-6">
                <h4 className="font-semibold text-gray-900">Requisiti:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <i className="fas fa-check text-orange-600 mr-2"></i>
                    Esperienza di vendita (min. 2 anni)
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-orange-600 mr-2"></i>
                    Ottime capacità comunicative
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-orange-600 mr-2"></i>
                    Orientamento al cliente
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-orange-600 mr-2"></i>
                    Patente B e automunito
                  </li>
                </ul>
              </div>
              
              <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200">
                Candidati Ora
              </button>
            </div>

            {/* Meccanico */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-wrench text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Meccanico Specializzato</h3>
                    <p className="text-blue-600">Full-time • Milano</p>
                  </div>
                </div>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Aperta
                </span>
              </div>
              
              <p className="text-gray-700 mb-6">
                Ricerchiamo un meccanico qualificato per il controllo e la manutenzione 
                dei veicoli usati nel nostro reparto tecnico.
              </p>
              
              <div className="space-y-3 mb-6">
                <h4 className="font-semibold text-gray-900">Requisiti:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <i className="fas fa-check text-blue-600 mr-2"></i>
                    Diploma tecnico o qualifica professionale
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-blue-600 mr-2"></i>
                    Esperienza di almeno 3 anni
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-blue-600 mr-2"></i>
                    Conoscenza sistemi diagnostici
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-blue-600 mr-2"></i>
                    Precisione e affidabilità
                  </li>
                </ul>
              </div>
              
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                Candidati Ora
              </button>
            </div>

            {/* Addetto Amministrativo */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-file-alt text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Addetto Amministrativo</h3>
                    <p className="text-green-600">Part-time • Milano</p>
                  </div>
                </div>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Aperta
                </span>
              </div>
              
              <p className="text-gray-700 mb-6">
                Cerchiamo una figura per la gestione delle pratiche amministrative, 
                contratti di vendita e rapporti con enti pubblici.
              </p>
              
              <div className="space-y-3 mb-6">
                <h4 className="font-semibold text-gray-900">Requisiti:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-600 mr-2"></i>
                    Diploma/Laurea in ambito economico
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-600 mr-2"></i>
                    Conoscenza normativa automotive
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-600 mr-2"></i>
                    Ottima conoscenza pacchetto Office
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-600 mr-2"></i>
                    Precisione e organizzazione
                  </li>
                </ul>
              </div>
              
              <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200">
                Candidati Ora
              </button>
            </div>

            {/* Stage */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-graduation-cap text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Stage Commerciale</h3>
                    <p className="text-purple-600">Stage • Milano</p>
                  </div>
                </div>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Sempre Aperta
                </span>
              </div>
              
              <p className="text-gray-700 mb-6">
                Opportunità di stage per studenti universitari o neolaureati 
                interessati al settore automotive e alle vendite.
              </p>
              
              <div className="space-y-3 mb-6">
                <h4 className="font-semibold text-gray-900">Requisiti:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <i className="fas fa-check text-purple-600 mr-2"></i>
                    Studente universitario o neolaureato
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-purple-600 mr-2"></i>
                    Interesse per il settore automotive
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-purple-600 mr-2"></i>
                    Buone capacità relazionali
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-purple-600 mr-2"></i>
                    Voglia di imparare e crescere
                  </li>
                </ul>
              </div>
              
              <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200">
                Candidati Ora
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefit Aziendali */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              I Nostri Benefit
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Investiamo nel benessere e nella crescita dei nostri dipendenti
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 text-center">
              <i className="fas fa-graduation-cap text-3xl text-orange-600 mb-4"></i>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Formazione Continua</h3>
              <p className="text-gray-700">
                Corsi di aggiornamento professionale, certificazioni e seminari di settore
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
              <i className="fas fa-gift text-3xl text-blue-600 mb-4"></i>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Bonus Incentivi</h3>
              <p className="text-gray-700">
                Sistema di premi e incentivi legati al raggiungimento degli obiettivi
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
              <i className="fas fa-medkit text-3xl text-green-600 mb-4"></i>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Assicurazione Sanitaria</h3>
              <p className="text-gray-700">
                Copertura sanitaria integrativa per te e la tua famiglia
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
              <i className="fas fa-car text-3xl text-purple-600 mb-4"></i>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Auto Aziendale</h3>
              <p className="text-gray-700">
                Auto aziendale per ruoli commerciali e di rappresentanza
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 text-center">
              <i className="fas fa-clock text-3xl text-red-600 mb-4"></i>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Orari Flessibili</h3>
              <p className="text-gray-700">
                Possibilità di orari flessibili per conciliare vita privata e lavorativa
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 text-center">
              <i className="fas fa-coffee text-3xl text-yellow-600 mb-4"></i>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Ambiente Positivo</h3>
              <p className="text-gray-700">
                Team building, eventi aziendali e ambiente di lavoro stimolante
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Processo di Selezione */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Processo di Selezione
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Un processo trasparente e veloce per trovare i migliori talenti
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Candidatura</h3>
              <p className="text-gray-700 text-sm">
                Invia il tuo CV tramite email o compila il form online
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Screening</h3>
              <p className="text-gray-700 text-sm">
                Valutazione del CV e primo contatto telefonico (2-3 giorni)
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Colloquio</h3>
              <p className="text-gray-700 text-sm">
                Colloquio conoscitivo presso la nostra sede
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Risposta</h3>
              <p className="text-gray-700 text-sm">
                Feedback entro 5 giorni lavorativi dal colloquio
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Candidatura Spontanea */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Candidatura Spontanea
            </h2>
            <p className="text-lg text-gray-700">
              Non hai trovato la posizione giusta? Inviaci il tuo CV, potremmo avere l'opportunità perfetta per te!
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nome *</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Il tuo nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Cognome *</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Il tuo cognome"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="la.tua.email@esempio.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Telefono *</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="+39 123 456 7890"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Area di Interesse</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                  <option>Seleziona un'area</option>
                  <option>Vendite</option>
                  <option>Tecnico/Meccanico</option>
                  <option>Amministrativo</option>
                  <option>Marketing</option>
                  <option>Altro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Messaggio</label>
                <textarea 
                  rows="4" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Raccontaci di te e delle tue aspirazioni professionali..."
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Carica il tuo CV *</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-orange-400 transition-colors duration-200">
                  <i className="fas fa-cloud-upload-alt text-3xl text-gray-400 mb-2"></i>
                  <p className="text-gray-600">Clicca per caricare o trascina qui il tuo CV</p>
                  <p className="text-sm text-gray-500 mt-1">PDF, DOC, DOCX (max 5MB)</p>
                </div>
              </div>

              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                />
                <label className="ml-2 text-sm text-gray-700">
                  Accetto il trattamento dei dati personali secondo la privacy policy
                </label>
              </div>

              <div className="text-center">
                <button 
                  type="submit"
                  className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200"
                >
                  Invia Candidatura
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto a Unirti al Team AutoDeal?
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            Se hai passione per il settore automotive e vuoi crescere in un'azienda leader, 
            non esitare a contattarci. Ti aspettiamo!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2">
              <i className="fas fa-envelope"></i>
              Invia CV
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-200 flex items-center justify-center gap-2">
              <i className="fas fa-phone"></i>
              Chiamaci
            </button>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-orange-100 mb-2">Hai domande sulle opportunità di lavoro?</p>
            <p className="text-white font-semibold">
              <i className="fas fa-envelope mr-2"></i>
              hr@autodeal.it • <i className="fas fa-phone ml-4 mr-2"></i>+39 02 1234567
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}