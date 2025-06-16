import React, { useState, useEffect } from "react";
import { fetchCars } from "../../services/api";

// ============================================================================
// COMPONENTI SVG PERSONALIZZATI
// ============================================================================
// Questi sono componenti funzionali che renderizzano icone SVG personalizzate
// Ogni componente accetta props come className e altri attributi HTML
// Utilizzo del destructuring per estrarre className e spread operator per il resto
const PhoneIcon = ({ className, ...props }) => (
  <svg
    className={className}
    {...props}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      // d => definisce la forma del disegno (è come un tracciato di disegno)
    />
  </svg>
);

const MailIcon = ({ className, ...props }) => (
  <svg
    className={className}
    {...props}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const MapPinIcon = ({ className, ...props }) => (
  <svg
    className={className}
    {...props}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const ClockIcon = ({ className, ...props }) => (
  <svg
    className={className}
    {...props}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12,6 12,12 16,14" />
  </svg>
);

const SendIcon = ({ className, ...props }) => (
  <svg
    className={className}
    {...props}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22,2 15,22 11,13 2,9 22,2" />
  </svg>
);

const CarIcon = ({ className, ...props }) => (
  <svg
    className={className}
    {...props}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M13 6h4l2 5v6H5v-6l2-5h4"
    />
    <line x1="5" y1="11" x2="19" y2="11" />
  </svg>
);

const MessageCircleIcon = ({ className, ...props }) => (
  <svg
    className={className}
    {...props}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
    />
  </svg>
);

const CalendarIcon = ({ className, ...props }) => (
  <svg
    className={className}
    {...props}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const StarIcon = ({ className, ...props }) => (
  <svg className={className} {...props} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const KeyIcon = ({ className, ...props }) => (
  <svg
    className={className}
    {...props}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
    />
  </svg>
);

// ============================================================================
// COMPONENTE PRINCIPALE CONTATTACI
// ============================================================================
// Componente funzionale che gestisce un form di contatto con logica condizionale
// per informazioni generali o prenotazione test drive
export default function Contattaci() {
  // ============================================================================
  // GESTIONE DELLO STATO CON USESTATE HOOK
  // ============================================================================
  
  // Stato principale del form - oggetto con tutti i campi del modulo
  // Utilizzo di un singolo oggetto stato per gestire tutti i campi del form
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    email: "",
    telefono: "",
    messaggio: "",
    interesseAuto: "",
    dataContatto: "",
    tipoRichiesta: "informazioni", // Valore predefinito
    // Campi specifici per test drive (renderizzazione condizionale)
    dataTestDrive: "",
    orarioTestDrive: "",
    modelloTestDrive: "",
    esperienza: "",
    patente: true,
  });

  // Stati per la gestione dell'interfaccia utente
  const [isSubmitting, setIsSubmitting] = useState(false); // Loading state durante invio
  const [isSubmitted, setIsSubmitted] = useState(false);   // Conferma invio completato
  const [hoveredService, setHoveredService] = useState(null); // Hover effects

  // Stati per la gestione delle auto dal backend (chiamata API)
  const [availableCars, setAvailableCars] = useState([]); // Array delle auto disponibili
  const [isLoadingCars, setIsLoadingCars] = useState(true); // Loading state per API
  const [carsError, setCarsError] = useState(null); // Gestione errori API

  // ============================================================================
  // USEEFFECT HOOK PER SIDE EFFECTS
  // ============================================================================
  
  // useEffect per caricare le auto dal backend al mount del componente
  // Dependency array vuoto [] significa che si esegue solo al primo render
  useEffect(() => {
    const loadCars = async () => {
      try {
        setIsLoadingCars(true);  // Attiva loading state
        setCarsError(null);      // Reset errori precedenti
        const cars = await fetchCars(); // Chiamata API asincrona
        setAvailableCars(cars);  // Aggiorna stato con i dati ricevuti
      } catch (error) {
        console.error("Errore nel caricamento delle auto:", error);
        setCarsError("Errore nel caricamento dei modelli disponibili");
      } finally {
        setIsLoadingCars(false); // Disattiva loading indipendentemente dall'esito
      }
    };

    loadCars(); // Esegui la funzione
  }, []); // Dependency array vuoto - esegui solo al mount

  // ============================================================================
  // GESTORI DI EVENTI (EVENT HANDLERS)
  // ============================================================================
  
  // Gestore per i cambiamenti negli input del form
  // Utilizza destructuring per estrarre le proprietà dell'event target
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    // Aggiorna lo stato usando il pattern di merge con lo spread operator
    // Per checkbox usa 'checked', per altri input usa 'value'
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Gestore per l'invio del form
  // Previene il comportamento predefinito e gestisce l'invio asincrono
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previene il reload della pagina
    setIsSubmitting(true); // Attiva lo stato di caricamento

    // Simula una chiamata API con Promise e setTimeout
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false); // Disattiva loading
    setIsSubmitted(true);   // Mostra messaggio di conferma

    // Reset automatico del form dopo 3 secondi
    setTimeout(() => {
      setIsSubmitted(false);
      // Reset completo dello stato del form ai valori iniziali
      setFormData({
        nome: "",
        cognome: "",
        email: "",
        telefono: "",
        messaggio: "",
        interesseAuto: "",
        dataContatto: "",
        tipoRichiesta: "informazioni",
        dataTestDrive: "",
        orarioTestDrive: "",
        modelloTestDrive: "",
        esperienza: "",
        patente: true,
      });
    }, 3000);
  };

  // ============================================================================
  // DATI STATICI E CONFIGURAZIONE
  // ============================================================================
  
  // Array di oggetti per i servizi offerti - dati statici
  const servizi = [
    {
      id: 1,
      titolo: "Valutazione Auto",
      descrizione: "Valutazione gratuita del tuo veicolo usato",
      icon: CarIcon,
      colore: "bg-orange-500",
    },
    {
      id: 2,
      titolo: "Finanziamenti",
      descrizione: "Soluzioni di finanziamento personalizzate",
      icon: MessageCircleIcon,
      colore: "bg-green-500",
    },
    {
      id: 3,
      titolo: "Garanzia",
      descrizione: "Garanzia estesa su tutti i nostri veicoli",
      icon: CalendarIcon,
      colore: "bg-purple-500",
    },
  ];

  // Array di orari disponibili per il test drive
  const orariDisponibili = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
  ];

  // ============================================================================
  // FUNZIONI UTILITY
  // ============================================================================
  
  // Funzione per formattare il nome dell'auto per la select
  // Gestisce diversi possibili formati di dati dell'API
  const formatCarName = (car) => {
    // Controllo condizionale delle proprietà dell'oggetto car
    if (car.brand && car.model) {
      return `${car.brand} ${car.model}${car.year ? ` (${car.year})` : ""}`;
    }
    // Fallback con operatore OR per diversi possibili nomi di proprietà
    return (
      car.name ||
      car.title ||
      `${car.marca} ${car.modello}` ||
      "Auto non specificata"
    );
  };

  // useEffect per scroll to top al mount del componente
  // Migliora l'UX riportando la vista in cima alla pagina
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ============================================================================
  // RENDER DEL COMPONENTE - STRUTTURA JSX
  // ============================================================================
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
      
      {/* ========================================================================
          SEZIONE HEADER/HERO - Intestazione della pagina
      ======================================================================== */}
      <div className="bg-gradient-to-r from-orange-600 via-orange-700 to-red-700 text-white py-16 relative overflow-hidden">
        {/* Overlay scuro per migliorare la leggibilità del testo */}
        <div className="absolute inset-0 bg-black opacity-20"></div>
        
        {/* Elementi decorativi animati */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="animate-pulse absolute top-10 right-20 w-32 h-32 bg-white opacity-10 rounded-full"></div>
          <div
            className="animate-pulse absolute bottom-10 left-20 w-24 h-24 bg-white opacity-5 rounded-full"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
        
        {/* Contenuto principale dell'header */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 animate-fadeIn">AUTODEAL</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Il tuo concessionario di fiducia per auto usate di qualità
            </p>
            <div className="mt-6 flex justify-center">
              <CarIcon className="w-12 h-12 animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================
          CONTENUTO PRINCIPALE - Layout a due colonne
      ======================================================================== */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* ====================================================================
              COLONNA SINISTRA - FORM DI CONTATTO
          ==================================================================== */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <SendIcon className="text-orange-600" />
              Contattaci Ora
            </h2>

            {/* RENDERIZZAZIONE CONDIZIONALE - Messaggio di conferma vs Form */}
            {isSubmitted ? (
              // ---- STATO POST-INVIO: Messaggio di conferma ----
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                {/* Messaggio dinamico basato sul tipo di richiesta */}
                <h3 className="text-xl font-semibold text-green-600 mb-2">
                  {formData.tipoRichiesta === "test-drive"
                    ? "Test Drive Prenotato!"
                    : "Messaggio Inviato!"}
                </h3>
                <p className="text-gray-600">
                  {formData.tipoRichiesta === "test-drive"
                    ? "La tua prenotazione per il test drive è stata confermata. Ti contatteremo per confermare i dettagli."
                    : "Ti contatteremo presto per offrirti la migliore soluzione."}
                </p>
              </div>
            ) : (
              // ---- FORM ATTIVO ----
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* SELEZIONE TIPO RICHIESTA - Radio buttons personalizzati */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Tipo di richiesta *
                  </label>
                  <div className="grid md:grid-cols-2 gap-4">
                    
                    {/* Opzione: Informazioni Generali */}
                    <div
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                        formData.tipoRichiesta === "informazioni"
                          ? "border-orange-500 bg-orange-50"  // Stato attivo
                          : "border-gray-200 hover:border-orange-300" // Stato inattivo
                      }`}
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          tipoRichiesta: "informazioni",
                        }))
                      }
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="tipoRichiesta"
                          value="informazioni"
                          checked={formData.tipoRichiesta === "informazioni"}
                          onChange={handleInputChange}
                          className="text-orange-600"
                        />
                        <div>
                          <div className="flex items-center gap-2">
                            <MessageCircleIcon className="w-5 h-5 text-orange-600" />
                            <span className="font-semibold text-gray-800">
                              Informazioni Generali
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">
                            Richiedi informazioni sui nostri servizi
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Opzione: Test Drive */}
                    <div
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                        formData.tipoRichiesta === "test-drive"
                          ? "border-orange-500 bg-orange-50"
                          : "border-gray-200 hover:border-orange-300"
                      }`}
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          tipoRichiesta: "test-drive",
                        }))
                      }
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="tipoRichiesta"
                          value="test-drive"
                          checked={formData.tipoRichiesta === "test-drive"}
                          onChange={handleInputChange}
                          className="text-orange-600"
                        />
                        <div>
                          <div className="flex items-center gap-2">
                            <KeyIcon className="w-5 h-5 text-orange-600" />
                            <span className="font-semibold text-gray-800">
                              Prenota Test Drive
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">
                            Prova gratuitamente un'auto
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CAMPI BASE - Nome e Cognome (Grid Layout) */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 group-hover:border-orange-300"
                      placeholder="Il tuo nome"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Cognome *
                    </label>
                    <input
                      type="text"
                      name="cognome"
                      value={formData.cognome}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 group-hover:border-orange-300"
                      placeholder="Il tuo cognome"
                    />
                  </div>
                </div>

                {/* CAMPI CONTATTO - Email e Telefono */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 group-hover:border-orange-300"
                      placeholder="la-tua-email@esempio.com"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefono *
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 group-hover:border-orange-300"
                      placeholder="+39 123 456 7890"
                    />
                  </div>
                </div>

                {/* RENDERIZZAZIONE CONDIZIONALE - Campi specifici per tipo richiesta */}
                {formData.tipoRichiesta === "test-drive" ? (
                  // ---- SEZIONE TEST DRIVE - Campi aggiuntivi ----
                  <>
                    <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                      <h3 className="text-lg font-semibold text-orange-800 mb-4 flex items-center gap-2">
                        <KeyIcon className="w-5 h-5" />
                        Dettagli Test Drive
                      </h3>

                      {/* Modello e Data */}
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="group">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Modello di interesse *
                          </label>
                          {/* Select dinamica popolata dall'API */}
                          <select
                            name="modelloTestDrive"
                            value={formData.modelloTestDrive}
                            onChange={handleInputChange}
                            required
                            disabled={isLoadingCars} // Disabilita durante il caricamento
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 group-hover:border-orange-300 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <option value="">
                              {isLoadingCars
                                ? "Caricamento modelli..."
                                : "Seleziona il modello"}
                            </option>
                            {/* Gestione errori API */}
                            {carsError && (
                              <option value="" disabled>
                                {carsError}
                              </option>
                            )}
                            {/* Map dell'array di auto per creare le opzioni */}
                            {availableCars.map((car) => (
                              <option key={car.id} value={car.id}>
                                {formatCarName(car)}
                              </option>
                            ))}
                          </select>
                          {/* Messaggio di errore condizionale */}
                          {carsError && (
                            <p className="text-red-500 text-sm mt-1">
                              {carsError}. Riprova più tardi o contattaci
                              direttamente.
                            </p>
                          )}
                        </div>

                        <div className="group">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Data preferita *
                          </label>
                          {/* Input date con validazione min (data odierna) */}
                          <input
                            type="date"
                            name="dataTestDrive"
                            value={formData.dataTestDrive}
                            onChange={handleInputChange}
                            required
                            min={new Date().toISOString().split("T")[0]} // Impedisce date passate
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 group-hover:border-orange-300"
                          />
                        </div>
                      </div>

                      {/* Orario ed Esperienza */}
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="group">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Orario preferito *
                          </label>
                          {/* Select popolata da array statico */}
                          <select
                            name="orarioTestDrive"
                            value={formData.orarioTestDrive}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 group-hover:border-orange-300"
                          >
                            <option value="">Seleziona l'orario</option>
                            {orariDisponibili.map((orario) => (
                              <option key={orario} value={orario}>
                                {orario}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="group">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Esperienza di guida
                          </label>
                          <select
                            name="esperienza"
                            value={formData.esperienza}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 group-hover:border-orange-300"
                          >
                            <option value="">Seleziona esperienza</option>
                            <option value="principiante">
                              Principiante (0-2 anni)
                            </option>
                            <option value="intermedio">
                              Intermedio (3-10 anni)
                            </option>
                            <option value="esperto">
                              Esperto (oltre 10 anni)
                            </option>
                          </select>
                        </div>
                      </div>

                      {/* Checkbox Patente */}
                      <div className="flex items-center gap-3 mb-4">
                        <input
                          type="checkbox"
                          name="patente"
                          checked={formData.patente}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-orange-600 rounded focus:ring-orange-500"
                        />
                        <label className="text-sm text-gray-700">
                          Confermo di essere in possesso di patente di guida
                          valida *
                        </label>
                      </div>

                      <div className="bg-orange-100 p-4 rounded-lg">
                        <h4 className="font-semibold text-orange-800 mb-2">
                          📋 Informazioni importanti:
                        </h4>
                        <ul className="text-sm text-orange-700 space-y-1">
                          <li>• È richiesta la patente di guida valida</li>
                          <li>• Durata test drive: circa 30 minuti</li>
                          <li>• Accompagnato da nostro consulente esperto</li>
                          <li>• Completamente gratuito e senza impegno</li>
                        </ul>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="group">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Tipo di auto interessata
                        </label>
                        <select
                          name="interesseAuto"
                          value={formData.interesseAuto}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 group-hover:border-orange-300"
                        >
                          <option value="">Seleziona categoria</option>
                          <option value="city-car">City Car</option>
                          <option value="berlina">Berlina</option>
                          <option value="suv">SUV</option>
                          <option value="station-wagon">Station Wagon</option>
                          <option value="monovolume">Monovolume</option>
                          <option value="sportiva">Cabrio</option>
                          <option value="Coupé">Coupé</option>
                        </select>
                      </div>
                      <div className="group">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preferenza contatto
                        </label>
                        <input
                          type="date"
                          name="dataContatto"
                          value={formData.dataContatto}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 group-hover:border-orange-300"
                        />
                      </div>
                    </div>
                  </>
                )}

                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {formData.tipoRichiesta === "test-drive"
                      ? "Note aggiuntive"
                      : "Messaggio"}
                  </label>
                  <textarea
                    name="messaggio"
                    value={formData.messaggio}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 group-hover:border-orange-300 resize-none"
                    placeholder={
                      formData.tipoRichiesta === "test-drive"
                        ? "Eventuali richieste particolari o domande sul test drive..."
                        : "Descrivici le tue esigenze o facci delle domande..."
                    }
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={
                    isSubmitting ||
                    (formData.tipoRichiesta === "test-drive" &&
                      !formData.patente)
                  }
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-orange-700 hover:to-red-700 focus:outline-none focus:ring-4 focus:ring-orange-300 transition-all duration-200 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      {formData.tipoRichiesta === "test-drive"
                        ? "Prenotazione in corso..."
                        : "Invio in corso..."}
                    </>
                  ) : (
                    <>
                      {formData.tipoRichiesta === "test-drive" ? (
                        <>
                          <KeyIcon className="w-5 h-5" />
                          Prenota Test Drive
                        </>
                      ) : (
                        <>
                          <SendIcon className="w-5 h-5" />
                          Invia Messaggio
                        </>
                      )}
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Informazioni di contatto */}
          <div className="space-y-8">
            {/* Contatti principali */}
            <div className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden">
              {/* Decorazioni di sfondo */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-100 to-red-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-yellow-100 to-orange-100 rounded-full translate-y-12 -translate-x-12 opacity-50"></div>

              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-3">
                    Siamo Qui Per Te
                  </h2>
                  <p className="text-gray-600 max-w-md mx-auto">
                    Contattaci attraverso uno dei nostri canali. Il nostro team
                    di esperti è pronto ad aiutarti a trovare l'auto perfetta.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {/* Telefono */}
                  <div className="group cursor-pointer">
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border-2 border-orange-100 hover:border-orange-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <PhoneIcon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-800 text-lg">
                            Chiamaci Ora
                          </h3>
                          <p className="text-orange-600 font-semibold">
                            +39 02 1234 5678
                          </p>
                        </div>
                      </div>
                      <div className="space-y-2 pl-18">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-sm text-gray-600">
                            Disponibili ora
                          </span>
                        </div>
                        <p className="text-sm text-gray-500">
                          Lun-Sab: 9:00-19:00
                        </p>
                        <p className="text-sm text-gray-500">
                          Consulenza gratuita
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="group cursor-pointer">
                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-2 border-green-100 hover:border-green-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <MessageCircleIcon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-800 text-lg">
                            WhatsApp
                          </h3>
                          <p className="text-green-600 font-semibold">
                            +39 345 678 9012
                          </p>
                        </div>
                      </div>
                      <div className="space-y-2 pl-18">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-sm text-gray-600">
                            Risposte rapide
                          </span>
                        </div>
                        <p className="text-sm text-gray-500">7 giorni su 7</p>
                        <p className="text-sm text-gray-500">Chat istantanea</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {/* Email */}
                  <div className="group cursor-pointer">
                    <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-xl border-2 border-amber-100 hover:border-amber-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <MailIcon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-800 text-lg">
                            Email
                          </h3>
                          <p className="text-amber-600 font-semibold">
                            info@autodeal.it
                          </p>
                        </div>
                      </div>
                      <div className="space-y-2 pl-18">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span className="text-sm text-gray-600">
                            Risposta garantita
                          </span>
                        </div>
                        <p className="text-sm text-gray-500">
                          Entro 2 ore lavorative
                        </p>
                        <p className="text-sm text-gray-500">
                          Preventivi dettagliati
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Orari */}
                  <div className="group cursor-pointer">
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border-2 border-orange-100 hover:border-orange-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <ClockIcon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-800 text-lg">
                            Orari Showroom
                          </h3>
                        </div>
                      </div>
                      <div className="space-y-2 pl-18">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Lun-Ven</span>
                          <span className="text-sm font-semibold text-gray-800">
                            9:00-19:00
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Sabato</span>
                          <span className="text-sm font-semibold text-gray-800">
                            9:00-17:00
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">
                            Domenica
                          </span>
                          <span className="text-sm text-red-500">Chiuso</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Showroom - Sezione espansa */}
                <div className="bg-gradient-to-r from-orange-500 via-red-600 to-orange-500 rounded-xl p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full -translate-y-20 translate-x-20"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-5 rounded-full translate-y-16 -translate-x-16"></div>

                  <div className="relative z-10">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <MapPinIcon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">
                          Vieni a Trovarci
                        </h3>
                        <p className="text-orange-100 mb-4">
                          Il nostro showroom di 2000 mq con oltre 50 auto
                          esposte ti aspetta nel cuore di Milano
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-lg mb-3">
                              📍 Indirizzo
                            </h4>
                            <p className="text-orange-100">Via Roma 123</p>
                            <p className="text-orange-100">20121 Milano (MI)</p>
                            <p className="text-orange-100">
                              Zona Porta Garibaldi
                            </p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-lg mb-3">
                              🚗 Come Raggiungerci
                            </h4>
                            <div className="space-y-2 text-orange-100">
                              <p>🚇 Metro: Porta Garibaldi (2 min)</p>
                              <p>🚌 Bus: Linee 43, 94 (fermata Roma)</p>
                              <p>🅿️ Parcheggio gratuito clienti</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-col items-center justify-center">
                    <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2">
                      <MapPinIcon className="w-5 h-5" />
                      Apri Maps
                    </button>
                  </div>
                </div>

                {/* Team e servizi rapidi */}
                <div className="mt-8 grid sm:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold">👨‍💼</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Consulenti Esperti
                    </h4>
                    <p className="text-sm text-gray-600">
                      Team qualificato a tua disposizione
                    </p>
                  </div>

                  <div className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold">🔧</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Test Drive
                    </h4>
                    <p className="text-sm text-gray-600">
                      Prova gratuita senza impegno
                    </p>
                  </div>

                  <div className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold">💰</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Valutazione Auto
                    </h4>
                    <p className="text-sm text-gray-600">
                      Stima immediata del tuo usato
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
