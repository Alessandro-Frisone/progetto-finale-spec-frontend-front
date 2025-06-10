import React from "react";
import { useEffect } from "react";

export default function TerminiEPrivacy() {

     useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-black to-orange-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <img
            src="/logo_transparent.png"
            alt="AutoDeal logo"
            className="h-15 w-auto transition-transform duration-300 ease-in-out hover:scale-110"
          />
            <h1 className="text-3xl font-bold">
              Termini di Servizio e Privacy
            </h1>
          </div>
          <p className="text-blue-100 text-lg">
            AutoDeal - Concessionario Auto Usate di Fiducia
          </p>
          <p className="text-blue-200 mt-2">
            Ultimo aggiornamento: 10 Giugno 2025
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Sezione Introduttiva */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-6 text-blue-600">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                <path
                  fillRule="evenodd"
                  d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Introduzione</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-4">
            Benvenuti su AutoDeal, il vostro concessionario di fiducia per auto
            usate di qualità. Questi termini di servizio e l'informativa sulla
            privacy disciplinano l'utilizzo del nostro sito web e dei nostri
            servizi.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Utilizzando i nostri servizi, accettate integralmente questi termini
            e le nostre pratiche di gestione dei dati personali.
          </p>
        </div>

        {/* Termini di Servizio */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Termini di Servizio
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-3">
                1. Servizi Offerti
              </h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                AutoDeal offre i seguenti servizi:
              </p>
              <ul className="text-gray-600 space-y-2 ml-6">
                <li>• Vendita di automobili usate selezionate e garantite</li>
                <li>• Servizi di valutazione e permuta del vostro veicolo</li>
                <li>
                  • Assistenza per finanziamenti e pratiche amministrative
                </li>
                <li>• Servizi post-vendita e assistenza clienti</li>
                <li>• Consulenza personalizzata nella scelta del veicolo</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-3">
                2. Garanzie e Qualità
              </h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                Tutte le nostre auto usate sono sottoposte a rigorosi controlli
                di qualità:
              </p>
              <ul className="text-gray-600 space-y-2 ml-6">
                <li>
                  • Verifica completa della documentazione e della provenienza
                </li>
                <li>
                  • Controllo tecnico approfondito da parte di meccanici
                  qualificati
                </li>
                <li>• Garanzia di 12 mesi su tutti i veicoli venduti</li>
                <li>
                  • Certificazione dello stato del veicolo e del chilometraggio
                </li>
                <li>• Possibilità di test drive prima dell'acquisto</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-3">
                3. Condizioni di Vendita
              </h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                Le condizioni di vendita includono:
              </p>
              <ul className="text-gray-600 space-y-2 ml-6">
                <li>
                  • Prezzo finale comprensivo di IVA e passaggio di proprietà
                </li>
                <li>• Possibilità di finanziamento con tassi competitivi</li>
                <li>• Valutazione gratuita del vostro usato in permuta</li>
                <li>• Consegna del veicolo con tutti i documenti in regola</li>
                <li>• Diritto di recesso entro 14 giorni dall'acquisto</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-3">
                4. Responsabilità
              </h3>
              <p className="text-gray-600 leading-relaxed">
                AutoDeal si impegna a fornire informazioni accurate sui veicoli.
                Il cliente ha il diritto di ispezionare il veicolo prima
                dell'acquisto. La responsabilità è limitata al valore del
                veicolo acquistato, escludendo danni indiretti o consequenziali
                salvo quanto previsto dalla legge.
              </p>
            </div>
          </div>
        </div>

        {/* Informativa Privacy */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-6 text-blue-600">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              Informativa Privacy
            </h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-3">
                Raccolta dei Dati
              </h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                Raccogliamo i seguenti tipi di dati personali:
              </p>
              <ul className="text-gray-600 space-y-2 ml-6">
                <li>• Dati anagrafici (nome, cognome, codice fiscale)</li>
                <li>• Informazioni di contatto (telefono, email, indirizzo)</li>
                <li>• Dati economici per valutazioni finanziarie</li>
                <li>• Informazioni sul veicolo in permuta</li>
                <li>• Dati di navigazione del sito web</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-3">
                Finalità del Trattamento
              </h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                I vostri dati vengono utilizzati per:
              </p>
              <ul className="text-gray-600 space-y-2 ml-6">
                <li>• Gestione della compravendita di veicoli</li>
                <li>• Erogazione di servizi di finanziamento</li>
                <li>• Assistenza clienti e servizi post-vendita</li>
                <li>• Comunicazioni commerciali (previo consenso)</li>
                <li>• Adempimenti fiscali e legali</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-3">
                Diritti dell'Interessato
              </h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                Ai sensi del GDPR, avete diritto a:
              </p>
              <ul className="text-gray-600 space-y-2 ml-6">
                <li>• Accedere ai vostri dati personali</li>
                <li>• Richiedere la rettifica di dati inesatti</li>
                <li>• Richiedere la cancellazione dei dati</li>
                <li>• Limitare il trattamento dei dati</li>
                <li>• Portabilità dei dati</li>
                <li>• Opporvi al trattamento per finalità di marketing</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-3">
                Sicurezza dei Dati
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Adottiamo misure tecniche e organizzative appropriate per
                proteggere i vostri dati personali da accessi non autorizzati,
                perdite o divulgazioni. I dati sono conservati su server sicuri
                e l'accesso è limitato al personale autorizzato.
              </p>
            </div>
          </div>
        </div>

        {/* Cookie Policy */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Cookie Policy
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-3">
                Utilizzo dei Cookie
              </h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                Il nostro sito utilizza cookie per migliorare l'esperienza
                utente:
              </p>
              <ul className="text-gray-600 space-y-2 ml-6">
                <li>
                  • <strong>Cookie tecnici:</strong> necessari per il
                  funzionamento del sito
                </li>
                <li>
                  • <strong>Cookie analitici:</strong> per analizzare il
                  traffico web
                </li>
                <li>
                  • <strong>Cookie di profilazione:</strong> per personalizzare
                  i contenuti
                </li>
                <li>
                  • <strong>Cookie di terze parti:</strong> per servizi esterni
                  (Google Maps, ecc.)
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-3">
                Gestione dei Cookie
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Potete gestire le preferenze sui cookie attraverso le
                impostazioni del vostro browser. La disabilitazione di alcuni
                cookie potrebbe limitare la funzionalità del sito.
              </p>
            </div>
          </div>{" "}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 text-center">
              © 2025 AutoDeal S.r.l. - P.IVA 1234567890 - Tutti i diritti
              riservati
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
