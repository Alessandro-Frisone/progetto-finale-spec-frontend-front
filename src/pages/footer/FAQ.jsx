import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const [openSections, setOpenSections] = useState({});
  const [activeCategory, setActiveCategory] = useState("generale");

  const toggleSection = (sectionId) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const ChevronDown = () => (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );

  const ChevronUp = () => (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 15l7-7 7 7"
      />
    </svg>
  );

  const CarIcon = () => (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 6H4L2 4H1m4 8V9a1 1 0 011-1h10l2 3-2 5H6v-2"
      />
    </svg>
  );

  const ShieldIcon = () => (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  );

  const CreditCardIcon = () => (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
      />
    </svg>
  );

  const FileTextIcon = () => (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  );

  const WrenchIcon = () => (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );

  const PhoneIcon = () => (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );

  const faqCategories = {
    generale: {
      title: "Domande Generali",
      icon: <CarIcon />,
      questions: [
        {
          id: "chi-siamo",
          question: "Chi è AutoDeal e da quanto tempo operate nel settore?",
          answer:
            "AutoDeal è un concessionario specializzato nella vendita di auto usate con oltre 15 anni di esperienza nel settore automobilistico. Siamo un'azienda familiare che ha costruito la propria reputazione sulla trasparenza, qualità e servizio clienti eccellente. Disponiamo di un parco auto di oltre 300 veicoli sempre disponibili.",
        },
        {
          id: "dove-siamo",
          question: "Dove si trova il vostro showroom e come raggiungerci?",
          answer:
            "Il nostro showroom principale si trova in Via Roma 123, Milano, facilmente raggiungibile con la metropolitana (fermata Duomo) o in auto con parcheggio gratuito per i clienti. Disponiamo anche di un punto vendita secondario a Torino in Corso Francia 45. Entrambe le sedi sono dotate di ampi spazi espositivi e aree test drive.",
        },
        {
          id: "orari",
          question: "Quali sono i vostri orari di apertura?",
          answer:
            "Siamo aperti dal lunedì al venerdì dalle 9:00 alle 19:00, il sabato dalle 9:00 alle 18:00 e la domenica dalle 10:00 alle 17:00. Durante le festività seguiamo orari speciali che comunichiamo sul nostro sito web. È possibile prenotare appuntamenti anche fuori orario per clienti con esigenze particolari.",
        },
        {
          id: "servizi",
          question: "Quali servizi offrite oltre alla vendita?",
          answer:
            "Oltre alla vendita di auto usate, offriamo: valutazione gratuita del tuo usato, finanziamenti personalizzati, assicurazioni auto, pratiche di passaggio di proprietà, tagliandi e manutenzione, car wrapping e personalizzazioni, noleggio a lungo termine, e un servizio di ricerca auto su richiesta del cliente.",
        },
      ],
    },
    acquisto: {
      title: "Acquisto e Vendita",
      icon: <CreditCardIcon />,
      questions: [
        {
          id: "come-acquistare",
          question: "Come posso acquistare un'auto da voi?",
          answer:
            "Il processo è semplice: scegli l'auto dal nostro sito o showroom, prenota un test drive, verifica le condizioni del veicolo con il nostro esperto, definisci il finanziamento se necessario, firma il contratto e ritira la tua auto. Ti assistiamo in ogni fase del processo.",
        },
        {
          id: "documenti-acquisto",
          question: "Quali documenti servono per acquistare un'auto?",
          answer:
            "Per l'acquisto ti servono: documento d'identità valido, codice fiscale, patente di guida in corso di validità, certificato di residenza (se richiesto), e se finanzi: busta paga degli ultimi 3 mesi, estratto conto bancario, e CUD o modello 730. Ci occupiamo noi di tutte le pratiche burocratiche.",
        },
        {
          id: "valutazione-usato",
          question: "Come funziona la valutazione del mio usato?",
          answer:
            "Offriamo valutazioni gratuite e senza impegno. Puoi prenotare online o in sede: i nostri esperti valuteranno la tua auto considerando marca, modello, anno, chilometraggio, condizioni generali, tagliandi, eventuali danni e accessori. La valutazione è valida 15 giorni e può essere utilizzata come permuta.",
        },
        {
          id: "permuta",
          question: "Posso permutare la mia auto usata?",
          answer:
            "Certamente! La permuta è uno dei nostri servizi più richiesti. Valutiamo la tua auto e detraiamo il valore dal prezzo dell'auto che vuoi acquistare. Questo ti permette di ridurre significativamente l'investimento e semplificare tutte le pratiche burocratiche in un'unica soluzione.",
        },
        {
          id: "prezzo-trattabile",
          question: "I prezzi sono trattabili?",
          answer:
            "I nostri prezzi sono già molto competitivi, ma siamo sempre disponibili a valutare proposte ragionevoli, specialmente in caso di permuta o acquisto in contanti. Ogni situazione viene valutata singolarmente per trovare la soluzione migliore per entrambe le parti.",
        },
      ],
    },
    finanziamenti: {
      title: "Finanziamenti e Pagamenti",
      icon: <CreditCardIcon />,
      questions: [
        {
          id: "finanziamenti-disponibili",
          question: "Che tipo di finanziamenti offrite?",
          answer:
            "Collaboriamo con i principali istituti di credito per offrire: prestiti personali da 12 a 84 mesi, leasing operativo per partite IVA, noleggio a lungo termine, finanziamenti a tasso zero su modelli selezionati, e soluzioni personalizzate. TAN e TAEG variano in base al profilo del cliente.",
        },
        {
          id: "anticipo-richiesto",
          question: "È richiesto un anticipo per il finanziamento?",
          answer:
            "L'anticipo non è sempre obbligatorio, ma consigliamo almeno il 20% del valore dell'auto per ottenere condizioni migliori. L'anticipo può essere versato in contanti, con assegno circolare, bonifico bancario, o utilizzando la permuta della tua auto usata.",
        },
        {
          id: "approvazione-finanziamento",
          question: "Quanto tempo serve per l'approvazione del finanziamento?",
          answer:
            "Normalmente la risposta arriva entro 24-48 ore lavorative. Per velocizzare il processo, porta con te tutti i documenti richiesti. In alcuni casi, per profili particolarmente solidi, possiamo avere risposta immediata. Ti teniamo sempre aggiornato sullo stato della pratica.",
        },
        {
          id: "pagamenti-accettati",
          question: "Quali forme di pagamento accettate?",
          answer:
            "Accettiamo: contanti fino ai limiti di legge (€2.999,99), assegni circolari, bonifici bancari, carte di credito/debito, finanziamenti tramite i nostri partner, permuta dell'usato, e combinazioni di questi metodi. Per importi elevati consigliamo sempre bonifico o assegno circolare.",
        },
      ],
    },
    garanzie: {
      title: "Garanzie e Assistenza",
      icon: <ShieldIcon />,
      questions: [
        {
          id: "garanzia-inclusa",
          question: "Che tipo di garanzia è inclusa?",
          answer:
            "Tutte le nostre auto usate includono una garanzia di 12 mesi su motore, cambio e differenziale. Per auto con meno di 5 anni o 100.000 km, offriamo garanzia estesa opzionale fino a 24 mesi. La garanzia copre riparazioni presso la nostra officina autorizzata o centri convenzionati in tutta Italia.",
        },
        {
          id: "cosa-copre-garanzia",
          question: "Cosa copre esattamente la garanzia?",
          answer:
            "La garanzia copre: motore e suoi componenti, cambio manuale/automatico, differenziale, impianto di raffreddamento, impianto elettrico di base, servo-freno e frizione. Sono esclusi: usura normale (pneumatici, freni, filtri), danni da incidente, modifiche non autorizzate, e mancata manutenzione.",
        },
        {
          id: "assistenza-stradale",
          question: "È inclusa l'assistenza stradale?",
          answer:
            "Sì, tutte le auto vendute includono 12 mesi di assistenza stradale 24/7 in tutta Europa. Il servizio copre: soccorso stradale, traino fino al centro assistenza più vicino, auto sostitutiva in caso di fermo prolungato, e assistenza per guasti in viaggio oltre 50 km da casa.",
        },
        {
          id: "officina-propria",
          question: "Avete un'officina interna?",
          answer:
            "Sì, disponiamo di un'officina interna con meccanici specializzati e attrezzature all'avanguardia. Offriamo: tagliandi, riparazioni in garanzia, diagnosi computerizzata, manutenzione ordinaria e straordinaria, preparazione per revisione, e servizio pneumatici. Prenota online o telefonicamente.",
        },
      ],
    },
    controlli: {
      title: "Controlli e Qualità",
      icon: <WrenchIcon />,
      questions: [
        {
          id: "controlli-effettuati",
          question: "Che controlli effettuate sulle auto usate?",
          answer:
            "Ogni auto subisce un controllo di 120 punti che include: verifica motore e trasmissione, test dei sistemi elettronici, controllo freni e sospensioni, verifica pneumatici e cerchi, test aria condizionata, controllo interni ed esterni, verifica documenti e storia del veicolo, e test drive approfondito.",
        },
        {
          id: "storia-veicolo",
          question: "Come verificate la storia del veicolo?",
          answer:
            "Utilizziamo database nazionali ed europei per verificare: precedenti proprietari, eventuali incidenti, furto o vincoli, chilometraggio reale, tagliandi effettuati, e uso precedente (privato, aziendale, noleggio). Ogni auto ha una scheda trasparenza con tutte le informazioni disponibili.",
        },
        {
          id: "chilometraggio-certificato",
          question: "Il chilometraggio è sempre certificato?",
          answer:
            "Sì, certifichiamo il chilometraggio attraverso: controllo del libretto tagliandi, verifica con database ufficiali, controllo usura componenti, e analisi elettronica. In caso di dubbi, lo specifichiamo chiaramente. Offriamo una garanzia scritta sul chilometraggio dichiarato.",
        },
        {
          id: "auto-incidentate",
          question: "Vendete auto incidentate?",
          answer:
            "Vendiamo solo auto con piccoli danni estetici precedenti, completamente riparati a regola d'arte. Mai auto con danni strutturali o di sicurezza. Tutti gli interventi sono documentati e garantiti. La trasparenza è fondamentale: ti informiamo sempre di eventuali riparazioni effettuate.",
        },
      ],
    },
    pratiche: {
      title: "Pratiche e Documenti",
      icon: <FileTextIcon />,
      questions: [
        {
          id: "passaggio-proprieta",
          question: "Vi occupate del passaggio di proprietà?",
          answer:
            "Certamente! Ci occupiamo di tutte le pratiche: passaggio di proprietà, aggiornamento carte di circolazione, verifiche PRA, comunicazioni di vendita, e pratiche assicurative. Il servizio è incluso nel prezzo di vendita. Normalmente i documenti sono pronti in 7-10 giorni lavorativi.",
        },
        {
          id: "bollo-auto",
          question: "Come funziona per il bollo auto?",
          answer:
            "Il bollo viene calcolato pro-rata dalla data di acquisto. Ti forniamo tutte le informazioni per il pagamento e, se richiesto, possiamo occuparcene noi tramite la nostra agenzia pratiche auto. Ti informiamo sempre sulle scadenze e sui metodi di pagamento più convenienti.",
        },
        {
          id: "assicurazione",
          question: "Posso attivare l'assicurazione tramite voi?",
          answer:
            "Sì, collaboriamo con le principali compagnie assicurative per offrirti le migliori tariffe. Confrontiamo preventivi di diverse compagnie, ti aiutiamo a scegliere la copertura più adatta, e gestiamo l'attivazione. Spesso riusciamo a ottenere sconti riservati ai nostri clienti.",
        },
        {
          id: "tempi-consegna",
          question: "Quanto tempo serve per ritirare l'auto acquistata?",
          answer:
            "Se acquisti in contanti, puoi ritirare l'auto immediatamente se i documenti sono in regola. Con finanziamento, servono 2-3 giorni per l'approvazione della pratica. Per il passaggio di proprietà completo, contiamo 7-10 giorni lavorativi. Ti teniamo sempre aggiornato sui tempi.",
        },
      ],
    },
    contatti: {
      title: "Contatti e Supporto",
      icon: <PhoneIcon />,
      questions: [
        {
          id: "come-contattarvi",
          question: "Come posso contattarvi?",
          answer:
            "Puoi contattarci in diversi modi: telefono 02-1234567 (lun-ven 9-19, sab 9-18), WhatsApp 347-1234567, email info@autodeal.it, modulo contatti sul sito web, oppure venire direttamente in showroom. Rispondiamo sempre entro 2 ore lavorative.",
        },
        {
          id: "prenotare-appuntamento",
          question: "Posso prenotare un appuntamento?",
          answer:
            "Certamente! Consigliamo sempre di prenotare per avere la massima attenzione. Puoi prenotare online sul nostro sito, telefonicamente, o tramite WhatsApp. Specifica se vuoi: vedere una specifica auto, valutare il tuo usato, parlare di finanziamenti, o richiedere assistenza post-vendita.",
        },
        {
          id: "test-drive",
          question: "Come posso prenotare un test drive?",
          answer:
            "Il test drive è gratuito e sempre consigliato. Prenota telefonicamente o online specificando l'auto di interesse. Porta patente valida e documento d'identità. Il test drive dura circa 30 minuti con percorso urbano ed extraurbano, accompagnato dal nostro consulente.",
        },
        {
          id: "social-media",
          question: "Siete presenti sui social media?",
          answer:
            "Sì! Seguici su Facebook @AutoDealItalia, Instagram @autodeal_official, e YouTube 'AutoDeal Channel' per vedere le nostre auto, promozioni, consigli, e novità del settore. Pubblichiamo regolarmente foto e video delle nuove auto in arrivo.",
        },
        {
          id: "newsletter",
          question: "Come posso ricevere le vostre offerte?",
          answer:
            "Iscriviti alla nostra newsletter dal sito web per ricevere: nuovi arrivi, offerte speciali, promozioni sui finanziamenti, consigli per la manutenzione, e inviti agli eventi. Inviamo massimo 2 email al mese e puoi disiscriverti quando vuoi.",
        },
      ],
    },
  };

  const FAQItem = ({ question, answer, isOpen, onToggle }) => (
    <div className="border border-gray-200 rounded-lg mb-4 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
      >
        <span className="font-medium text-gray-900 pr-4">{question}</span>
        <span className="flex-shrink-0 text-blue-600">
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </span>
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-700 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Domande Frequenti
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trova rapidamente le risposte a tutte le tue domande su AutoDeal. Se
            non trovi quello che cerchi, contattaci direttamente!
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg p-6 shadow-sm text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">300+</div>
            <div className="text-gray-600">Auto Disponibili</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">15</div>
            <div className="text-gray-600">Anni di Esperienza</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">12</div>
            <div className="text-gray-600">Mesi di Garanzia</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-gray-600">Assistenza Stradale</div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Categories */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Categorie
              </h3>
              <nav className="space-y-2">
                {Object.entries(faqCategories).map(([key, category]) => (
                  <button
                    key={key}
                    onClick={() => setActiveCategory(key)}
                    className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
                      activeCategory === key
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <span className="mr-3">{category.icon}</span>
                    <span className="font-medium">{category.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-8">
                <span className="mr-3 text-blue-600">
                  {faqCategories[activeCategory].icon}
                </span>
                <h2 className="text-2xl font-bold text-gray-900">
                  {faqCategories[activeCategory].title}
                </h2>
              </div>

              <div className="space-y-4">
                {faqCategories[activeCategory].questions.map((faq) => (
                  <FAQItem
                    key={faq.id}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openSections[faq.id]}
                    onToggle={() => toggleSection(faq.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-gradient-to-r from-orange-500 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Non hai trovato la risposta che cercavi?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Il nostro team di esperti è sempre pronto ad aiutarti. Contattaci
            per una consulenza personalizzata e trova l'auto dei tuoi sogni con
            le migliori condizioni di finanziamento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              📞 Chiamaci: 02-1234567
            </button>
            <button className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors">
              💬 WhatsApp: 347-1234567
            </button>
            <button className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-400 transition-colors">
              ✉️ info@autodeal.it
            </button>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h4 className="font-semibold text-gray-900 mb-3">
              📍 Showroom Milano
            </h4>
            <p className="text-gray-600 text-sm">
              Via Roma 123, 20121 Milano
              <br />
              Lun-Ven: 9:00-19:00
              <br />
              Sab: 9:00-18:00, Dom: 10:00-17:00
              <br />
              Parcheggio gratuito disponibile
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h4 className="font-semibold text-gray-900 mb-3">
              📍 Showroom Torino
            </h4>
            <p className="text-gray-600 text-sm">
              Corso Francia 45, 10138 Torino
              <br />
              Lun-Ven: 9:00-19:00
              <br />
              Sab: 9:00-18:00, Dom: 10:00-17:00
              <br />
              Facilmente raggiungibile con mezzi pubblici
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h4 className="font-semibold text-gray-900 mb-3">
              🛠️ Servizi Aggiuntivi
            </h4>
            <p className="text-gray-600 text-sm">
              • Officina interna autorizzata
              <br />
              • Pratiche auto complete
              <br />
              • Finanziamenti personalizzati
              <br />
              • Assistenza post-vendita
              <br />• Garanzia estesa disponibile
            </p>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Cosa Dicono i Nostri Clienti
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <span className="text-yellow-400 text-2xl">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 italic mb-4">
                "Servizio eccellente! Mi hanno seguito in ogni fase
                dell'acquisto. La mia BMW è perfetta e il finanziamento molto
                conveniente."
              </p>
              <p className="font-semibold text-gray-900">Marco R.</p>
              <p className="text-sm text-gray-500">Cliente da Milano</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <span className="text-yellow-400 text-2xl">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 italic mb-4">
                "Professionalità e trasparenza. La valutazione del mio usato è
                stata onesta e la nuova auto corrisponde esattamente alla
                descrizione."
              </p>
              <p className="font-semibold text-gray-900">Laura M.</p>
              <p className="text-sm text-gray-500">Cliente da Torino</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <span className="text-yellow-400 text-2xl">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 italic mb-4">
                "Assistenza post-vendita fantastica. Quando ho avuto un
                problema, l'hanno risolto subito senza costi aggiuntivi.
                Consiglio vivamente!"
              </p>
              <p className="font-semibold text-gray-900">Giuseppe T.</p>
              <p className="text-sm text-gray-500">Cliente da Milano</p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 text-center">
          <Link to="/">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all cursor-pointer">
              <span className="mr-2">🚗</span>
              Trova la Tua Auto Perfetta
              <span className="ml-2">→</span>
            </div>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
