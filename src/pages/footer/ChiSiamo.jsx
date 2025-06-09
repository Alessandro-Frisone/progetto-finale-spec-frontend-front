export default function ChiSiamo() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Chi Siamo
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              AutoDeal è la tua destinazione di fiducia per l'acquisto di auto usate di qualità. 
              Da oltre 15 anni nel settore automotive, siamo specializzati nella vendita di veicoli 
              accuratamente selezionati e garantiti.
            </p>
          </div>
        </div>
      </section>

      {/* La Nostra Storia */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                La Nostra Storia
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Fondata nel 2008 da Marco Rossi, un appassionato del settore automobilistico con oltre 
                20 anni di esperienza, AutoDeal nasce dalla volontà di offrire un servizio trasparente 
                e professionale nel mercato delle auto usate.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Quello che è iniziato come un piccolo concessionario locale è cresciuto fino a diventare 
                uno dei punti di riferimento più affidabili della regione, con oltre 3.000 auto vendute 
                e migliaia di clienti soddisfatti.
              </p>
              <div className="flex items-center gap-4 text-orange-600">
                <i className="fas fa-award text-2xl"></i>
                <span className="text-lg font-semibold">15+ anni di esperienza nel settore</span>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8 text-center">
              <i className="fas fa-car text-6xl text-orange-600 mb-6"></i>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">I Nostri Numeri</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-orange-600">3000+</div>
                  <div className="text-gray-700">Auto Vendute</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600">98%</div>
                  <div className="text-gray-700">Clienti Soddisfatti</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600">200+</div>
                  <div className="text-gray-700">Auto in Stock</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600">15</div>
                  <div className="text-gray-700">Anni di Esperienza</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* I Nostri Valori */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              I Nostri Valori
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Ogni giorno lavoriamo seguendo principi solidi che ci guidano nel rapporto con i nostri clienti
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-shield-alt text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Trasparenza</h3>
              <p className="text-gray-700 leading-relaxed">
                Crediamo nella totale trasparenza. Ogni auto viene presentata con la sua storia completa, 
                documenti verificati e condizioni reali. Nessuna sorpresa, solo fiducia reciproca.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-star text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Qualità</h3>
              <p className="text-gray-700 leading-relaxed">
                Selezioniamo accuratamente ogni veicolo. Controlli meccanici approfonditi, 
                verifiche della carrozzeria e test su strada garantiscono solo auto di qualità superiore.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-handshake text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Servizio</h3>
              <p className="text-gray-700 leading-relaxed">
                Il nostro team è sempre disponibile per guidarti nella scelta migliore. 
                Assistenza pre e post vendita, finanziamenti personalizzati e supporto completo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Il Nostro Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Il Nostro Team
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Un team di professionisti appassionati, pronti ad aiutarti a trovare l'auto perfetta
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center">
                <i className="fas fa-user text-4xl text-gray-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Marco Rossi</h3>
              <p className="text-orange-600 font-semibold mb-3">Fondatore & CEO</p>
              <p className="text-gray-700">
                20+ anni nel settore automotive. Esperto in valutazioni e negoziazioni, 
                Marco guida il team con passione e competenza.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center">
                <i className="fas fa-user text-4xl text-gray-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Laura Bianchi</h3>
              <p className="text-orange-600 font-semibold mb-3">Responsabile Vendite</p>
              <p className="text-gray-700">
                Specializzata in consulenza clienti e finanziamenti. Laura ti aiuterà a trovare 
                la soluzione perfetta per le tue esigenze e il tuo budget.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center">
                <i className="fas fa-user text-4xl text-gray-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Giuseppe Verdi</h3>
              <p className="text-orange-600 font-semibold mb-3">Responsabile Tecnico</p>
              <p className="text-gray-700">
                Meccanico esperto con certificazioni ufficiali. Giuseppe supervisiona tutti 
                i controlli tecnici e garantisce la qualità di ogni veicolo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* I Nostri Servizi */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              I Nostri Servizi
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Un servizio completo per accompagnarti in ogni fase dell'acquisto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <i className="fas fa-search text-3xl text-orange-600 mb-4"></i>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Ricerca Personalizzata</h3>
              <p className="text-gray-700 text-sm">
                Ti aiutiamo a trovare l'auto perfetta per le tue esigenze specifiche
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <i className="fas fa-tools text-3xl text-orange-600 mb-4"></i>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Controlli Tecnici</h3>
              <p className="text-gray-700 text-sm">
                Ispezioni complete e certificate su ogni veicolo prima della vendita
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <i className="fas fa-credit-card text-3xl text-orange-600 mb-4"></i>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Finanziamenti</h3>
              <p className="text-gray-700 text-sm">
                Soluzioni di finanziamento flessibili con tassi competitivi
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <i className="fas fa-exchange-alt text-3xl text-orange-600 mb-4"></i>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Permute</h3>
              <p className="text-gray-700 text-sm">
                Valutazione gratuita della tua auto usata per permute vantaggiose
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certificazioni e Garanzie */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Certificazioni e Garanzie
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              La tua sicurezza è la nostra priorità
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-certificate text-orange-600"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Garanzia 12 Mesi</h3>
                    <p className="text-gray-700">
                      Ogni auto viene venduta con garanzia di 12 mesi su motore, cambio e 
                      componenti principali. Assistenza garantita presso officine convenzionate.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-file-alt text-orange-600"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Documenti Verificati</h3>
                    <p className="text-gray-700">
                      Controllo completo di tutti i documenti: libretto, certificato di proprietà, 
                      tagliandi e storia manutentiva verificata.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-shield-check text-orange-600"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Controllo Antifrode</h3>
                    <p className="text-gray-700">
                      Verifica completa contro furti, pignoramenti e problemi legali. 
                      Ogni auto è pulita e pronta per il trasferimento di proprietà.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8">
              <div className="text-center">
                <i className="fas fa-award text-6xl text-orange-600 mb-6"></i>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Riconoscimenti e Certificazioni
                </h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center justify-center gap-3">
                      <i className="fas fa-star text-orange-600"></i>
                      <span className="font-semibold">Dealer Certificato Automotive</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center justify-center gap-3">
                      <i className="fas fa-trophy text-orange-600"></i>
                      <span className="font-semibold">Premio Eccellenza Clienti 2023</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center justify-center gap-3">
                      <i className="fas fa-thumbs-up text-orange-600"></i>
                      <span className="font-semibold">Rating 4.8/5 Google Reviews</span>
                    </div>
                  </div>
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
            Pronto a Trovare la Tua Auto Ideale?
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            Vieni a trovarci nel nostro showroom o contattaci per una consulenza personalizzata. 
            Il nostro team è pronto ad aiutarti a realizzare il tuo sogno su quattro ruote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2">
              <i className="fas fa-car"></i>
              Scopri le Nostre Auto
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-200 flex items-center justify-center gap-2">
              <i className="fas fa-phone"></i>
              Contattaci Ora
            </button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <i className="fas fa-map-marker-alt text-2xl mb-3"></i>
              <h3 className="font-semibold mb-2">Dove Siamo</h3>
              <p className="text-orange-100">Via Roma 123, Milano</p>
            </div>
            <div>
              <i className="fas fa-clock text-2xl mb-3"></i>
              <h3 className="font-semibold mb-2">Orari</h3>
              <p className="text-orange-100">Lun-Sab: 9:00-19:00</p>
            </div>
            <div>
              <i className="fas fa-phone text-2xl mb-3"></i>
              <h3 className="font-semibold mb-2">Telefono</h3>
              <p className="text-orange-100">+39 02 1234567</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}