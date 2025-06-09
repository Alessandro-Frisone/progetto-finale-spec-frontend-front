export default function Servizi() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              I Nostri Servizi
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Un servizio completo a 360° per accompagnarti in ogni fase dell'acquisto della tua auto usata. 
              Dalla ricerca al finanziamento, dalla valutazione alla consegna.
            </p>
          </div>
        </div>
      </section>

      {/* Servizi Principali */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Servizi Principali
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Tutto quello di cui hai bisogno per acquistare la tua auto in totale serenità
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Vendita Auto Usate */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-car text-2xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Vendita Auto Usate</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Oltre 200 auto sempre disponibili nel nostro showroom. Ogni veicolo è accuratamente 
                selezionato, controllato e certificato dai nostri esperti meccanici.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <i className="fas fa-check text-orange-600 mr-3"></i>
                  Controlli tecnici approfonditi
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="fas fa-check text-orange-600 mr-3"></i>
                  Garanzia 12 mesi inclusa
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="fas fa-check text-orange-600 mr-3"></i>
                  Documenti verificati e certificati
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="fas fa-check text-orange-600 mr-3"></i>
                  Test drive gratuito
                </li>
              </ul>
            </div>

            {/* Finanziamenti */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-credit-card text-2xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Finanziamenti</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Soluzioni di finanziamento personalizzate con i migliori istituti di credito. 
                Tassi competitivi e piani di rimborso flessibili per ogni esigenza.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <i className="fas fa-check text-blue-600 mr-3"></i>
                  Tassi a partire dal 3,9% TAN
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="fas fa-check text-blue-600 mr-3"></i>
                  Anticipo da 0€
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="fas fa-check text-blue-600 mr-3"></i>
                  Durata fino a 84 mesi
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="fas fa-check text-blue-600 mr-3"></i>
                  Risposta in 24 ore
                </li>
              </ul>
            </div>

            {/* Permute */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-exchange-alt text-2xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Permute e Ritiri</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Valutazione gratuita della tua auto usata con quotazione ai prezzi di mercato. 
                Ritiriamo il tuo veicolo anche se non acquisti da noi.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <i className="fas fa-check text-green-600 mr-3"></i>
                  Valutazione gratuita e senza impegno
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="fas fa-check text-green-600 mr-3"></i>
                  Quotazione ai prezzi di mercato
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="fas fa-check text-green-600 mr-3"></i>
                  Ritiro anche senza acquisto
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="fas fa-check text-green-600 mr-3"></i>
                  Pratiche burocratiche incluse
                </li>
              </ul>
            </div>

            {/* Assistenza Post-Vendita */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-tools text-2xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Assistenza Post-Vendita</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Il nostro servizio non finisce con la vendita. Ti accompagniamo anche dopo 
                l'acquisto con assistenza dedicata e officina convenzionata.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <i className="fas fa-check text-purple-600 mr-3"></i>
                  Assistenza garanzia 12 mesi
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="fas fa-check text-purple-600 mr-3"></i>
                  Officina convenzionata
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="fas fa-check text-purple-600 mr-3"></i>
                  Supporto tecnico dedicato
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="fas fa-check text-purple-600 mr-3"></i>
                  Ricambi originali garantiti
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Processo di Acquisto */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Come Funziona l'Acquisto
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Un processo semplice e trasparente in 5 step per la tua tranquillità
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Scelta</h3>
              <p className="text-gray-700 text-sm">
                Naviga il nostro catalogo online o vieni in showroom per scegliere la tua auto ideale
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Test Drive</h3>
              <p className="text-gray-700 text-sm">
                Prova l'auto su strada per verificare che sia perfetta per le tue esigenze
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Valutazione</h3>
              <p className="text-gray-700 text-sm">
                Se hai un'auto da permutare, la valutiamo gratuitamente al miglior prezzo
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Finanziamento</h3>
              <p className="text-gray-700 text-sm">
                Scegliamo insieme la soluzione di pagamento più adatta a te
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                5
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Consegna</h3>
              <p className="text-gray-700 text-sm">
                Completiamo le pratiche e ti consegniamo la tua nuova auto con garanzia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Servizi Aggiuntivi */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Servizi Aggiuntivi
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Servizi extra per rendere la tua esperienza ancora più completa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <i className="fas fa-shipping-fast text-3xl text-orange-600 mb-4"></i>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Consegna a Domicilio</h3>
              <p className="text-gray-700 text-sm mb-4">
                Consegniamo la tua auto direttamente a casa tua in tutta Italia
              </p>
              <span className="text-orange-600 font-semibold">Da €50</span>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <i className="fas fa-certificate text-3xl text-orange-600 mb-4"></i>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Estensione Garanzia</h3>
              <p className="text-gray-700 text-sm mb-4">
                Estendi la garanzia fino a 24 o 36 mesi per maggiore tranquillità
              </p>
              <span className="text-orange-600 font-semibold">Da €200</span>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <i className="fas fa-car-crash text-3xl text-orange-600 mb-4"></i>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Assicurazione</h3>
              <p className="text-gray-700 text-sm mb-4">
                Polizze assicurative vantaggiose con le migliori compagnie
              </p>
              <span className="text-orange-600 font-semibold">Preventivo gratuito</span>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <i className="fas fa-paint-brush text-3xl text-orange-600 mb-4"></i>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Carrozzeria</h3>
              <p className="text-gray-700 text-sm mb-4">
                Riparazioni carrozzeria e ritocchi estetici presso la nostra officina
              </p>
              <span className="text-orange-600 font-semibold">Su preventivo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonianze */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cosa Dicono i Nostri Clienti
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              La soddisfazione dei nostri clienti è la nostra migliore pubblicità
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-orange-400">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Servizio eccellente! Ho trovato l'auto perfetta e il team mi ha seguito 
                in ogni fase dell'acquisto. Consiglio assolutamente AutoDeal."
              </p>
              <div className="flex items-center">
                <div className="bg-gray-300 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                  <i className="fas fa-user text-gray-600"></i>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Marco Bianchi</p>
                  <p className="text-sm text-gray-600">Cliente da 2 anni</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-orange-400">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Professionalità e trasparenza al 100%. Auto in perfette condizioni 
                e finanziamento vantaggioso. Tornerò sicuramente!"
              </p>
              <div className="flex items-center">
                <div className="bg-gray-300 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                  <i className="fas fa-user text-gray-600"></i>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Laura Rossi</p>
                  <p className="text-sm text-gray-600">Cliente soddisfatta</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-orange-400">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Esperienza fantastica dall'inizio alla fine. Staff competente, 
                prezzi onesti e servizio post-vendita impeccabile."
              </p>
              <div className="flex items-center">
                <div className="bg-gray-300 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                  <i className="fas fa-user text-gray-600"></i>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Giuseppe Verdi</p>
                  <p className="text-sm text-gray-600">Cliente fedele</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Hai Bisogno di Maggiori Informazioni?
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            I nostri esperti sono a tua disposizione per qualsiasi domanda sui nostri servizi. 
            Contattaci per una consulenza personalizzata e senza impegno.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2">
              <i className="fas fa-phone"></i>
              Chiamaci Ora
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-200 flex items-center justify-center gap-2">
              <i className="fas fa-envelope"></i>
              Scrivici
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}