import { useEffect, useState } from "react";
import { fetchCars } from "../services/api";
import ProductCard from "../components/ProductCard";
import CarCarousel from "../components/CarCarousel";

export default function Home() {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchCars()
      .then((data) => {
        setCars(data);
        setFilteredCars(data);
        
        // Extract unique categories from cars
        const uniqueCategories = [...new Set(data.map(car => car.category))];
        setCategories(uniqueCategories);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  // Filter cars when category selection changes
  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredCars(cars);
    } else {
      setFilteredCars(cars.filter(car => car.category === selectedCategory));
    }
  }, [selectedCategory, cars]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Function to get category icon (same as in ProductCard)
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
        return "fas fa-car";
    }
  };

  if (loading) return <p>Caricamento...</p>;
  if (error) return <p>Errore: {error}</p>;

  return (
    <div className="bg-gradient-to-b from-gray-200 via-gray-100 via-white to-white pt-16">
      <CarCarousel />

      <section className="relative bg-white px-6 pt-16 pb-56 overflow-hidden">
        <div className="max-w-5xl mx-auto text-left z-10 relative">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">
            Perché scegliere noi
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4 text-center">
            Scegliere <strong>AutoDeal</strong> significa affidarsi a un team
            esperto che mette al primo posto la tua tranquillità. Ogni veicolo è
            accuratamente controllato e certificato, i prezzi sono tra i più
            competitivi del mercato e offriamo soluzioni di finanziamento su
            misura...
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
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              🚗 Auto <span className="text-orange-500">disponibili</span>
            </h1>
            <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
              Scopri la nostra selezione esclusiva di auto usate, accuratamente
              scelte per te.
            </p>
          </div>

          {/* Category Filter Section */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
              Filtra per categoria
            </h3>
            
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {/* All Categories Button */}
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

              {/* Individual Category Buttons */}
              {categories.map((category) => {
                const categoryCount = cars.filter(car => car.category === category).length;
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
                    <i className={`${getCategoryIcon(category)} text-orange-400`}></i>
                    {category} ({categoryCount})
                  </button>
                );
              })}
            </div>
          </div>

          <div className="text-center mb-6">
            <p className="text-gray-600">
              {selectedCategory === "all" ? (
                <>
                  <span className="font-semibold text-orange-600">
                    {filteredCars.length}
                  </span>{" "}
                  auto disponibili
                </>
              ) : (
                <>
                  <span className="font-semibold text-orange-600">
                    {filteredCars.length}
                  </span>{" "}
                  auto nella categoria <span className="font-semibold text-orange-600">{selectedCategory}</span>
                </>
              )}
            </p>
          </div>

          {filteredCars.length === 0 ? (
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
                {selectedCategory === "all" 
                  ? "Nessun risultato disponibile"
                  : `Nessuna auto trovata nella categoria "${selectedCategory}"`
                }
              </h3>
              <p className="text-gray-500">
                {selectedCategory === "all"
                  ? "Al momento non ci sono auto da mostrare."
                  : "Prova a selezionare una categoria diversa."
                }
              </p>
              {selectedCategory !== "all" && (
                <button
                  onClick={() => handleCategoryChange("all")}
                  className="mt-4 inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-full transition-colors duration-200"
                >
                  Mostra tutte le auto
                </button>
              )}
            </div>
          ) : (
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