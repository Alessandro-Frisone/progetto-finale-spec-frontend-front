import { useEffect, useState } from "react";
import { fetchCars } from "../services/api";
import ProductCard from "../components/home/ProductCard";
import CarCarousel from "../components/home/CarCarousel";
import SearchBar from "../components/home/SearchBar";

export default function Home() {
  // ========================================================================================================================
  // ========================================GESTIONE DELLO STATO DELL'APPLICAZIONE==========================================
  // ========================================================================================================================

  // Stati principali per la gestione delle auto
  const [cars, setCars] = useState([]); // Array con tutte le auto caricate dal server
  const [filteredCars, setFilteredCars] = useState([]); // Array con le auto filtrate da mostrare

  // Stati per il filtro per categoria
  const [selectedCategory, setSelectedCategory] = useState("all"); // Categoria attualmente selezionata
  const [categories, setCategories] = useState([]); // Lista delle categorie disponibili

  // Stati per il caricamento e gli errori
  const [loading, setLoading] = useState(true); // Indica se i dati sono in caricamento
  const [error, setError] = useState(""); // Messaggio di errore in caso di problemi

  // Stato per la ricerca testuale
  const [searchTerm, setSearchTerm] = useState(""); // Termine di ricerca inserito dall'utente

  // Stati per l'ordinamento delle auto (attualmente solo per titolo)
  const [sortBy, setSortBy] = useState("none"); // Campo per cui ordinare: "none" o "title"
  const [sortOrder, setSortOrder] = useState("asc"); // Ordine di ordinamento: "asc" (crescente) o "desc" (decrescente)

  // ========================================================================================================================
  // ============================================CARICAMENTO INIZIALE DEI DATI===============================================
  // ========================================================================================================================

  // Effetto che si esegue al primo caricamento del componente
  useEffect(() => {
    fetchCars() // Chiamata API per ottenere l'elenco delle auto
      .then((data) => {
        setCars(data); // Salva tutte le auto nello stato
        setFilteredCars(data); // Inizialmente mostra tutte le auto

        // Estrae le categorie uniche dalle auto ricevute per creare i filtri
        const uniqueCategories = [...new Set(data.map((car) => car.category))];
        setCategories(uniqueCategories);
      })
      .catch((err) => setError(err.message)) // In caso di errore, salva il messaggio
      .finally(() => setLoading(false)); // Al termine (successo o errore) disattiva il loading
  }, []); // Array vuoto = esegue solo al primo mount del componente

  // ========================================================================================================================
  // ============================================LOGICA DI FILTRO E ORDINAMENTO==============================================
  // ========================================================================================================================

  // Effetto che ricalcola le auto da mostrare ogni volta che cambia:
  // - la categoria selezionata
  // - il termine di ricerca
  // - i criteri di ordinamento
  // - l'array originale delle auto
  useEffect(() => {
    let result = cars; // Parte da tutte le auto disponibili

    // PRIMO PASSO: Applica il filtro di ricerca per testo
    if (searchTerm.trim()) {
      result = result.filter((car) =>
        car.title.toLowerCase().includes(searchTerm.toLowerCase().trim())
      );
    }

    // SECONDO PASSO: Applica il filtro per categoria
    if (selectedCategory !== "all") {
      result = result.filter((car) => car.category === selectedCategory);
    }

    // TERZO PASSO: Applica l'ordinamento (attualmente solo per titolo)
    if (sortBy === "title") {
      result = [...result].sort((a, b) => {
        // Crea una copia per non modificare l'originale
        const valueA = a.title.toLowerCase(); // Confronto case-insensitive
        const valueB = b.title.toLowerCase();

        if (sortOrder === "asc") {
          return valueA.localeCompare(valueB); // Ordine alfabetico crescente (A-Z)
        } else {
          return valueB.localeCompare(valueA); // Ordine alfabetico decrescente (Z-A)
        }
      });
    }

    // Aggiorna lo stato con le auto filtrate e ordinate
    setFilteredCars(result);
  }, [selectedCategory, cars, sortBy, sortOrder, searchTerm]); // Si riesegue quando cambiano questi valori

  // ========================================================================================================================
  // ============================================FUNZIONI PER GESTIRE GLI EVENTI UTENTE======================================
  // ========================================================================================================================

  // Gestisce il cambio di categoria quando l'utente clicca su un filtro
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Gestisce l'inserimento di un termine di ricerca dalla SearchBar
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // Rimuove l'ordinamento e torna all'ordine originale
  const resetSort = () => {
    setSortBy("none");
    setSortOrder("asc");
  };

  // Imposta l'ordinamento alfabetico crescente (A-Z) per il titolo
  const handleSortAZ = () => {
    setSortBy("title");
    setSortOrder("asc");
  };

  // Imposta l'ordinamento alfabetico decrescente (Z-A) per il titolo
  const handleSortZA = () => {
    setSortBy("title");
    setSortOrder("desc");
  };

  // ========================================================================================================================
  // =================================================FUNZIONI DI UTILITÀ====================================================
  // ========================================================================================================================

  // Restituisce l'icona Font Awesome appropriata per ogni categoria di auto
  // Utilizzata sia nei filtri che nelle card delle auto per coerenza visiva
  const getCategoryIcon = (category) => {
    switch (category.toLowerCase()) {
      case "suv":
        return "fas fa-car";
      case "berlina":
        return "fas fa-car-side";
      case "coupé":
        return "fas fa-car-alt";
      case "station wagon":
        return "fas fa-shuttle-van";
      case "cabrio":
        return "fas fa-wind";
      case "plug-in hybrid":
        return "fas fa-charging-station";
      default:
        return "fas fa-car"; // Icona di default per categorie non riconosciute
    }
  };

  // ========================================================================================================================
  // =========================================GESTIONE STATI DI CARICAMENTO ED ERRORE========================================
  // ========================================================================================================================

  // Mostra un messaggio di caricamento mentre i dati vengono recuperati dal server
  if (loading) return <p>Caricamento...</p>;

  // Mostra un messaggio di errore se qualcosa è andato storto nel caricamento
  if (error) return <p>Errore: {error}</p>;

  return (
    <div className="bg-orange-50 pt-16">
      <CarCarousel />
      {/* ========================================================================================================================
                                                SEZIONE "PERCHÉ SCEGLIERE NOI"
                                     Presenta i vantaggi dell'azienda con testo descrittivo
                                            e immagini decorative di auto ai lati
  =========================================================================================================================*/}
      <section className="relative w-full bg-gradient-to-t from-orange-200 via-white to-orange-50 px-6 pt-28 pb-75 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center z-10 relative">
          <h2 className="text-5xl font-bold text-gray-800 mb-8">
            Perché scegliere noi
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Scegliere <strong>AutoDeal</strong> significa affidarsi a un team
            esperto che mette al primo posto la tua tranquillità. Ogni veicolo è
            accuratamente controllato e certificato, i prezzi sono tra i più
            competitivi del mercato e offriamo soluzioni di finanziamento su
            misura...
          </p>
        </div>

        {/* Immagini decorative di auto posizionate ai lati */}
        <img
          src="/auto_senza_sfondo.png"
          alt="Auto in esposizione"
          className="absolute top-32 left-0 w-[45%] max-w-none object-contain pointer-events-none select-none scale-x-[-1] z-0"
        />
        <img
          src="/auto_senza_sfondo.png"
          alt="Auto in esposizione"
          className="absolute top-32 right-0 w-[45%] max-w-none object-contain pointer-events-none select-none z-0"
        />
      </section>

      {/* ========================================================================================================================
                                                     SEZIONE CATALOGO AUTO
                                       Contiene tutti i controlli per filtrare, cercare
                                        e ordinare le auto, più la griglia di risultati
  =========================================================================================================================*/}
      <section className="relative bg-gradient-to-b from-orange-200 via-white to-orange-50 py-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          {/* Intestazione della sezione catalogo */}
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              🚗 Auto in{" "}
              <span className="text-orange-500">pronta consegna</span>
            </h1>
            <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
              Scopri la nostra selezione esclusiva di auto usate, accuratamente
              scelte per te.
            </p>
          </div>

          {/* ========================================================================================================================
                                                     FILTRI PER CATEGORIA
                                         Mostra pulsanti per filtrare per tipo di auto
  =========================================================================================================================*/}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
              Filtra per categoria
            </h3>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {/* Pulsante "Tutte" per mostrare tutte le categorie */}
              <button
                onClick={() => handleCategoryChange("all")}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === "all"
                    ? "bg-orange-500 text-white shadow-lg transform scale-105"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-orange-50 hover:border-orange-300"
                }`}
              >
                <i className="fas fa-th-large"></i>
                Tutte ({cars.length})
              </button>

              {/* Genera un pulsante per ogni categoria trovata */}
              {categories.map((category) => {
                const categoryCount = cars.filter(
                  (car) => car.category === category
                ).length;
                return (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? "bg-orange-500 text-white shadow-lg transform scale-105"
                        : "bg-white text-gray-700 border border-gray-300 hover:bg-orange-50 hover:border-orange-300"
                    }`}
                  >
                    <i
                      className={`${getCategoryIcon(category)} text-orange-400`}
                    ></i>
                    {category} ({categoryCount})
                  </button>
                );
              })}
            </div>
          </div>

          {/* ========================================================================================================================
                                                    SEZIONE RICERCA E ORDINAMENTO
                                       Contiene la barra di ricerca e i pulsanti di ordinamento
  =========================================================================================================================*/}
          <div className="flex flex-wrap gap-6 items-start w-full mb-8">
            {/* Barra di ricerca */}
            <div className="flex-1 min-w-[280px]">
              <SearchBar
                onSearch={handleSearch}
                totalCars={cars.length}
                filteredCount={filteredCars.length}
              />
            </div>

            {/* Controlli per l'ordinamento */}
            <div className="flex-1 min-w-[280px]">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center sm:text-left">
                Ordina per nome
              </h3>
              <div className="flex flex-wrap justify-center sm:justify-start gap-3 mb-4">
                {/* Pulsante per rimuovere ordinamento */}
                <button
                  onClick={resetSort}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    sortBy === "none"
                      ? "bg-orange-500 text-white shadow-lg"
                      : "bg-white text-gray-700 border border-gray-300 hover:bg-orange-50 hover:border-orange-300"
                  }`}
                >
                  <i className="fas fa-list"></i>
                  Nessun ordine
                </button>

                {/* Pulsante per ordinamento A-Z */}
                <button
                  onClick={handleSortAZ}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    sortBy === "title" && sortOrder === "asc"
                      ? "bg-orange-500 text-white shadow-lg"
                      : "bg-white text-gray-700 border border-gray-300 hover:bg-orange-50 hover:border-orange-300"
                  }`}
                >
                  <i className="fas fa-sort-alpha-down"></i>
                  Nome (A-Z)
                </button>

                {/* Pulsante per ordinamento Z-A */}
                <button
                  onClick={handleSortZA}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    sortBy === "title" && sortOrder === "desc"
                      ? "bg-orange-500 text-white shadow-lg"
                      : "bg-white text-gray-700 border border-gray-300 hover:bg-orange-50 hover:border-orange-300"
                  }`}
                >
                  <i className="fas fa-sort-alpha-up"></i>
                  Nome (Z-A)
                </button>
              </div>

              {/* Messaggio informativo quando è attivo l'ordinamento */}
              {sortBy === "title" && (
                <p className="text-sm text-gray-600 text-center sm:text-left">
                  <i className="fas fa-info-circle text-orange-500 mr-1"></i>
                  Auto ordinate per{" "}
                  <span className="font-semibold text-orange-600">nome</span> in
                  ordine
                  <span className="font-semibold text-orange-600">
                    {sortOrder === "asc"
                      ? " crescente (A-Z)"
                      : " decrescente (Z-A)"}
                  </span>
                </p>
              )}
            </div>
          </div>
          {/* ========================================================================================================================
                                                     CONTATORE RISULTATI
                                        Mostra quante auto sono attualmente visibili
  =========================================================================================================================*/}
          <div className="text-center mb-6">
            <p className="text-gray-600">
              {selectedCategory === "all" && !searchTerm ? (
                // Caso: nessun filtro attivo, mostra tutte le auto
                <>
                  <span className="font-semibold text-orange-600">
                    {filteredCars.length}
                  </span>{" "}
                  auto disponibili
                </>
              ) : (
                // Caso: filtri attivi, mostra risultati filtrati
                <>
                  <span className="font-semibold text-orange-600">
                    {filteredCars.length}
                  </span>{" "}
                  auto
                  {searchTerm && ` con "${searchTerm}"`}
                  {selectedCategory !== "all" && (
                    <>
                      {" "}
                      nella categoria{" "}
                      <span className="font-semibold text-orange-600">
                        {selectedCategory}
                      </span>
                    </>
                  )}
                </>
              )}
            </p>
          </div>
          ds
          {/* ========================================================================================================================
                                                  RISULTATI DELLA RICERCA
                                  Mostra le auto filtrate o un messaggio di "nessun risultato"
  =========================================================================================================================*/}
          {filteredCars.length === 0 ? (
            // Caso: nessuna auto trovata con i filtri correnti
            <div className="text-center py-12">
              <svg
                className="h-16 w-16 text-gray-300 mx-auto mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>

              {/* Messaggio di errore personalizzato in base ai filtri attivi */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {searchTerm
                  ? `Nessun risultato per "${searchTerm}"`
                  : selectedCategory === "all"
                  ? "Nessun risultato disponibile"
                  : `Nessuna auto trovata nella categoria "${selectedCategory}"`}
              </h3>
              <p className="text-gray-500">
                {searchTerm
                  ? "Prova a modificare i termini di ricerca o usa filtri diversi."
                  : selectedCategory === "all"
                  ? "Al momento non ci sono auto da mostrare."
                  : "Prova a selezionare una categoria diversa."}
              </p>

              {/* Pulsanti per resettare i filtri attivi */}
              {(searchTerm || selectedCategory !== "all") && (
                <div className="mt-4 space-x-3">
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm("")}
                      className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-full transition-colors duration-200"
                    >
                      Cancella ricerca
                    </button>
                  )}
                  {selectedCategory !== "all" && (
                    <button
                      onClick={() => handleCategoryChange("all")}
                      className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-full transition-colors duration-200"
                    >
                      Mostra tutte le auto
                    </button>
                  )}
                </div>
              )}
            </div>
          ) : (
            // Caso: ci sono auto da mostrare - griglia di ProductCard
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 animate-fade-in">
              {filteredCars.map((car, index) => (
                <div
                  key={car.id}
                  className="animate-slide-up"
                  style={{
                    // Animazione sfalsata per ogni card
                    animationDelay: `${index * 0.05}s`,
                    animationFillMode: "both",
                  }}
                >
                  <ProductCard car={car} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
