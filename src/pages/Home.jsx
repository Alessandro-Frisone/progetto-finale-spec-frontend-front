import { useEffect, useState } from "react";
import { fetchCars } from "../services/api";
import ProductCard from "../components/ProductCard";
import CarCarousel from "../components/CarCarousel";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import SortFilter from "../components/SortFilter";

export default function Home() {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetchCars()
      .then((data) => {
        setCars(data);
        setFilteredCars(data);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  // AGGIORNATO: useEffect per applicare filtri quando cambiano gli stati
  useEffect(() => {
    applyFiltersAndSort();
  }, [cars, searchTerm, selectedCategory]);

  

  // AGGIORNATA: Funzione semplificata per applicare filtri
  const applyFiltersAndSort = () => {
    let filtered = [...cars];

    // Applica filtro per titolo
    if (searchTerm.trim()) {
      filtered = filtered.filter((car) =>
        car.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Applica filtro per categoria
    if (selectedCategory) {
      filtered = filtered.filter((car) => car.category === selectedCategory);
    }
    setFilteredCars(filtered);
  };

  // AGGIORNATE: Funzioni semplificate per gestire i cambi di stato
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };


  if (loading) return <p>Caricamento...</p>;
  if (error) return <p>Errore: {error}</p>;

  return (
    <div className="bg-gradient-to-b from-gray-200 via-gray-100 via-white to-white pt-28">
      <CarCarousel />

      <section className="relative bg-white px-6 pt-16 pb-42 overflow-hidden">
        <div className="max-w-5xl mx-auto text-left z-10 relative">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">
            Perché scegliere noi
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4 text-center">
            Scegliere <strong>AutoDeal</strong> significa affidarsi a un team
            esperto che mette al primo posto la tua tranquillità. Ogni veicolo è
            accuratamente controllato e certificato, i prezzi sono tra i più
            competitivi del mercato e offriamo soluzioni di finanziamento su
            misura. Dal primo contatto fino all'assistenza post-vendita, siamo
            sempre al tuo fianco per garantirti un'esperienza d'acquisto
            semplice, trasparente e sicura. Il nostro obiettivo è costruire
            fiducia, offrendo un servizio moderno e accessibile. Grazie al
            nostro approccio diretto e trasparente, ci siamo affermati
            rapidamente a livello regionale e nazionale.
          </p>
        </div>
        <img
          src="/auto-esposizione.jpg"
          alt="Auto in esposizione"
          className="absolute top-32 right-0 w-[550px] max-w-full object-contain pointer-events-none select-none"
        />
        <img
          src="/auto-esposizione.jpg"
          alt="Auto in esposizione"
          className="absolute top-32 left-0 w-[550px] max-w-full object-contain pointer-events-none select-none scale-x-[-1]"
        />
      </section>

      <section className="relative bg-gradient-to-b from-orange-200 via-white to-orange-50 py-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          {/* Titolo con animazione */}
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              🚗 Auto <span className="text-orange-500">disponibili</span>
            </h1>
            <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
              Scopri la nostra selezione esclusiva di auto usate, accuratamente
              scelte per te.
            </p>
          </div>

          {/* Contenitore per controlli di ricerca, filtro e ordinamento */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Barra di ricerca - più larga */}
              <div className="flex-1">
                <SearchBar onSearch={handleSearch} />
              </div>

              {/* Filtro categoria e ordinamento affiancati */}
              <div className="flex flex-col sm:flex-row gap-4 lg:w-auto">
                <div className="w-full sm:w-48">
                  <CategoryFilter
                    cars={cars}
                    onFilterChange={handleCategoryFilter}
                    selectedCategory={selectedCategory}
                  />
                </div>

                <div className="w-full sm:w-56">
                  <SortFilter />
                </div>
              </div>
            </div>
          </div>

          {/* Indicatori filtri attivi */}
          <div className="flex flex-wrap justify-center gap-2 mb-4 -mt-2">
            {selectedCategory && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-orange-100 text-orange-800">
                <i className="fas fa-list mr-2"></i>
                Categoria: {selectedCategory}
              </span>
            )}
          </div>

          {/* Risultati della ricerca */}
          <div className="text-center mb-6">
            <p className="text-gray-600">
              {searchTerm || selectedCategory ? (
                <>
                  <span className="font-semibold text-orange-600">
                    {filteredCars.length}
                  </span>{" "}
                  {filteredCars.length === 1 ? "risultato" : "risultati"}
                  {searchTerm && ` per "${searchTerm}"`}
                  {selectedCategory && ` nella categoria "${selectedCategory}"`}
                </>
              ) : (
                <>
                  <span className="font-semibold text-orange-600">
                    {cars.length}
                  </span>{" "}
                  auto disponibili
                </>
              )}
            </p>
          </div>

          {/* Messaggio se nessun risultato */}
          {(searchTerm || selectedCategory) && filteredCars.length === 0 && (
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
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Nessun risultato trovato
              </h3>
              <p className="text-gray-500 mb-4">
                Non ci sono auto che corrispondono ai filtri selezionati.
              </p>

              {/* Pulsanti per rimuovere i filtri */}
              <div className="flex flex-wrap justify-center gap-3">
                {searchTerm && (
                  <button
                    onClick={() => handleSearch("")}
                    className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-200"
                  >
                    <i className="fas fa-times mr-2"></i>
                    Rimuovi ricerca
                  </button>
                )}
                {selectedCategory && (
                  <button
                    onClick={() => handleCategoryFilter("")}
                    className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-200"
                  >
                    <i className="fas fa-times mr-2"></i>
                    Rimuovi filtro categoria
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Griglia con animazione su scroll */}
          {filteredCars.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 animate-fade-in">
              {filteredCars.map((car, index) => (
                <div
                  key={car.id}
                  className="animate-slide-up"
                  style={{
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
