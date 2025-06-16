// src/pages/ComparatorPage.jsx
import { useComparator } from "../contexts/ComparatorContext";
import { Link } from "react-router-dom";
import { useEffect } from "react";

/**
 * COMPONENTE PRINCIPALE: ComparatorPage
 * 
 * CONCETTI CHIAVE PER L'ESAME:
 * - Utilizzo di Custom Hook (useComparator)
 * - Conditional Rendering (renderizzazione condizionale)
 * - Array mapping per la visualizzazione dinamica
 * - State management tramite Context API
 * - Event handling (onClick, window.print)
 * - Side effects con useEffect
 * - Props destructuring
 * - Template literals e string manipulation
 */

export default function ComparatorPage() {
  // DESTRUCTURING: estrazione di proprietà dal custom hook
  // useComparator è un custom hook che accede al Context
  const { selectedCars, clearComparator } = useComparator();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll al top della pagina
  }, []);

  // CONDITIONAL RENDERING: Early return pattern
  // Se non ci sono abbastanza auto (< 2), mostra interfaccia di errore
  if (selectedCars.length < 2) {
    return (
      // SEZIONE 1: STATO VUOTO - Interfaccia quando non ci sono auto sufficienti
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        {/* Card centrale con messaggio di errore */}
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
          {/* Icona decorativa con Flexbox per centratura */}
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-balance-scale text-orange-600 text-xl"></i>
          </div>
          
          {/* Titolo e descrizione dell'errore */}
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Comparatore Vuoto
          </h1>
          <p className="text-gray-600 mb-8">
            Seleziona almeno 2 auto per utilizzare il comparatore.
          </p>
          
          {/* Link di navigazione - React Router Link component */}
          <Link
            to="/"
            className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors inline-flex items-center gap-2 font-medium"
          >
            <i className="fas fa-arrow-left"></i>
            Torna alla Home
          </Link>
        </div>
      </div>
    );
  }

  // FUNZIONE HELPER: Parsing e manipolazione stringhe
  // Estrae marca e modello dal titolo dell'auto
  const extractBrandAndModel = (title) => {
    // per valori null/undefined
    if (!title) return { brand: "Non specificato", model: "Non specificato" };
    
    // String splitting e array manipulation
    const parts = title.split(" ");
    if (parts.length >= 2) {
      return {
        brand: parts[0], // Primo elemento = marca
        model: parts.slice(1).join(" "), // Resto degli elementi = modello
      };
    }
    return { brand: title, model: "Non specificato" };
  };

  // FUNZIONE HELPER: Safe value extraction con fallback
  // Gestisce l'accesso sicuro alle proprietà degli oggetti
  const getSafeValue = (car, key) => {
    // Special cases per marca e modello (computed values)
    if (key === "brand") {
      return extractBrandAndModel(car.title).brand;
    }
    if (key === "model") {
      return extractBrandAndModel(car.title).model;
    }
    
    // Estrazione normale del valore con controllo null/undefined/empty
    const value = car[key];
    return value !== null && value !== undefined && value !== "" ? value : null;
  };

  // CONFIGURAZIONE DATI: Array di oggetti per struttura dinamica
  // Questo pattern permette di modificare facilmente la struttura senza toccare il JSX
  const specCategories = [
    {
      title: "Informazioni Generali",
      specs: [
        { label: "Marca", key: "brand" },
        { label: "Modello", key: "model" },
        { label: "Anno", key: "year" },
        { label: "Categoria", key: "category" },
        { label: "Prezzo", key: "price", format: "price" }, // format per formattazione custom
      ],
    },
    {
      title: "Motorizzazione",
      specs: [
        { label: "Carburante", key: "fuelType" },
        { label: "Potenza", key: "horsepower", format: "hp" },
        { label: "Cilindrata", key: "displacement", format: "cc" },
        { label: "Trasmissione", key: "transmission" },
        { label: "Consumo", key: "consumption", format: "consumption" },
      ],
    },
    {
      title: "Caratteristiche",
      specs: [
        { label: "Chilometraggio", key: "km", format: "km" },
        { label: "Porte", key: "doors" },
        { label: "Posti", key: "seats" },
        { label: "Colore", key: "color" },
        { label: "Classe Emissioni", key: "emissionClass" },
      ],
    },
  ];

  // FUNZIONE HELPER: Formattazione valori con switch statement
  // Pattern per gestire diversi tipi di formattazione
  const formatValue = (value, format) => {
    // Guard clause per valori vuoti
    if (value === null || value === undefined || value === "") return "Non specificato";

    // Switch statement per diversi formati
    switch (format) {
      case "price":
        return `€ ${value.toLocaleString("it-IT")}`; // Localizzazione italiana
      case "hp":
        return `${value} HP`;
      case "cc":
        return `${value} cc`;
      case "km":
        return `${value.toLocaleString("it-IT")} km`;
      case "consumption":
        return `${value} km/l`;
      default:
        return value; // Ritorna valore originale se nessun formato specificato
    }
  };

  // FUNZIONE HELPER: Logica di comparazione
  // Determina quale valore è "migliore" basato sul tipo di dato
  const isValueBetter = (value1, value2, key) => {
    // Guard clause per valori null/undefined
    if (value1 === null || value1 === undefined || value1 === "" ||
        value2 === null || value2 === undefined || value2 === "") {
      return false;
    }

    // Arrays per categorizzare i tipi di comparazione
    const higherIsBetter = ["horsepower", "year"]; // Più alto = meglio
    const lowerIsBetter = ["price", "km", "consumption"]; // Più basso = meglio

    // Logica di comparazione basata sul tipo
    if (higherIsBetter.includes(key)) {
      return parseFloat(value1) > parseFloat(value2);
    }
    if (lowerIsBetter.includes(key)) {
      return parseFloat(value1) < parseFloat(value2);
    }
    return false; // Default: nessuna comparazione
  };

  // ESTRAZIONE DATI: Accesso diretto agli elementi dell'array
  // Assumiamo che ci siano almeno 2 auto (controllato sopra)
  const car1 = selectedCars[0];
  const car2 = selectedCars[1];

  return (
    // SEZIONE 2: LAYOUT PRINCIPALE - Container principale con Tailwind CSS
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* SEZIONE 3: HEADER - Intestazione della pagina */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Comparatore Auto
          </h1>
          <p className="text-gray-600 text-lg">
            Confronta le caratteristiche delle tue auto selezionate
          </p>
        </div>

        {/* SEZIONE 4: CARDS DELLE AUTO - Grid responsive con mapping */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* ARRAY MAPPING: Iterazione attraverso selectedCars */}
          {selectedCars.map((car, index) => (
            <div key={car.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              
              {/* Header della card con colore dinamico basato su index */}
              <div className={`p-6 ${index === 0 ? 'bg-blue-600' : 'bg-green-600'} text-white`}>
                <div className="flex justify-between items-start">
                  <div>
                    {/* INTERPOLAZIONE: Accesso diretto alle proprietà dell'oggetto */}
                    <h2 className="text-2xl font-bold mb-2">{car.title}</h2>
                    <p className="opacity-90">{car.category}</p>
                  </div>
                  
                  {/* REACT ROUTER LINK: Navigazione programmatica */}
                  <Link
                    to={`/detail/${car.id}`} // Template literal per URL dinamico
                    className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                  >
                    Dettagli
                  </Link>
                </div>
              </div>

              {/* Contenuto della card */}
              <div className="p-6">
                {/* CONDITIONAL RENDERING: Mostra immagine o placeholder */}
                {car.imageUrl ? (
                  <img
                    src={car.imageUrl}
                    alt={car.title} // Alt text per accessibilità
                    className="w-full h-90 object-cover rounded-lg mb-4"
                  />
                ) : (
                  // Placeholder quando immagine non disponibile
                  <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center text-gray-400">
                      <i className="fas fa-car text-4xl mb-2"></i>
                      <p>Immagine non disponibile</p>
                    </div>
                  </div>
                )}

                {/* SEZIONE 5: STATISTICHE RAPIDE - Grid con valori formattati */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-xl font-bold text-gray-900">
                      {/* CHIAMATA FUNZIONE: Combinazione di getSafeValue e formatValue */}
                      {formatValue(getSafeValue(car, 'price'), 'price')}
                    </div>
                    <div className="text-sm text-gray-600">Prezzo</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-xl font-bold text-gray-900">
                      {formatValue(getSafeValue(car, 'year'))}
                    </div>
                    <div className="text-sm text-gray-600">Anno</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SEZIONE 6: TABELLA DI CONFRONTO - Struttura complessa con nested mapping */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          {/* NESTED MAPPING 1: Iterazione attraverso categorie */}
          {specCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="border-b border-gray-200 last:border-b-0">
              
              {/* Header della categoria */}
              <div className="bg-gray-100 px-6 py-4">
                <h3 className="text-lg font-bold text-gray-900">{category.title}</h3>
              </div>

              {/* NESTED MAPPING 2: Iterazione attraverso specifiche */}
              <div className="divide-y divide-gray-100">
                {category.specs.map((spec, specIndex) => {
                  // LOGICA DI COMPARAZIONE: Calcolo dei valori per entrambe le auto
                  const value1 = getSafeValue(car1, spec.key);
                  const value2 = getSafeValue(car2, spec.key);
                  const isBetter1 = isValueBetter(value1, value2, spec.key);
                  const isBetter2 = isValueBetter(value2, value1, spec.key);

                  return (
                    // GRID RESPONSIVE: 3 colonne su desktop, 1 su mobile
                    <div key={specIndex} className="grid grid-cols-1 md:grid-cols-3">
                      
                      {/* Colonna 1: Label della specifica */}
                      <div className="px-6 py-4 bg-gray-50 font-medium text-gray-900 border-b md:border-b-0 md:border-r border-gray-200">
                        {spec.label}
                      </div>

                      {/* Colonna 2: Valore Auto 1 con highlight condizionale */}
                      <div className={`px-6 py-4 border-b md:border-b-0 md:border-r border-gray-200 ${
                        isBetter1 ? 'bg-green-50' : '' // CONDITIONAL STYLING
                      }`}>
                        <div className="flex items-center gap-2">
                          {/* Indicatore colore per Auto 1 */}
                          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          <span className={`font-medium ${
                            isBetter1 ? 'text-green-700' : 'text-gray-900' // CONDITIONAL STYLING
                          }`}>
                            {formatValue(value1, spec.format)}
                          </span>
                          {/* CONDITIONAL RENDERING: Icona trophy per valore migliore */}
                          {isBetter1 && (
                            <i className="fas fa-trophy text-green-600 text-sm"></i>
                          )}
                        </div>
                      </div>

                      {/* Colonna 3: Valore Auto 2 con highlight condizionale */}
                      <div className={`px-6 py-4 ${
                        isBetter2 ? 'bg-green-50' : '' // CONDITIONAL STYLING
                      }`}>
                        <div className="flex items-center gap-2">
                          {/* Indicatore colore per Auto 2 */}
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className={`font-medium ${
                            isBetter2 ? 'text-green-700' : 'text-gray-900' // CONDITIONAL STYLING
                          }`}>
                            {formatValue(value2, spec.format)}
                          </span>
                          {/* CONDITIONAL RENDERING: Icona trophy per valore migliore */}
                          {isBetter2 && (
                            <i className="fas fa-trophy text-green-600 text-sm"></i>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* SEZIONE 7: PULSANTI DI AZIONE - Flexbox responsive */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          
          {/* REACT ROUTER LINK: Navigazione alla home */}
          <Link
            to="/"
            className="bg-gray-600 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors inline-flex items-center gap-2 font-medium"
          >
            <i className="fas fa-arrow-left"></i>
            Torna alla Home
          </Link>

          {/* EVENT HANDLER: Chiamata funzione dal context */}
          <button
            onClick={clearComparator} // Funzione dal custom hook
            className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors inline-flex items-center gap-2 font-medium"
          >
            <i className="fas fa-trash"></i>
            Svuota Comparatore
          </button>

          {/* WEB API: Utilizzo di window.print() */}
          <button
            className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors inline-flex items-center gap-2 font-medium"
            onClick={() => window.print()} // Arrow function inline per Web API
          >
            <i className="fas fa-print"></i>
            Stampa Confronto
          </button>
        </div>
      </div>
    </div>
  );
}
