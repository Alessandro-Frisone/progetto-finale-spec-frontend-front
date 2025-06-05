import { useEffect, useState } from "react";
import { fetchCars } from "../services/api";
import ProductCard from "../components/ProductCard";
import CarCarousel from "../components/CarCarousel";

export default function Home() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchCars()
      .then((data) => setCars(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

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

          <div className="text-center mb-6">
            <p className="text-gray-600">
              <span className="font-semibold text-orange-600">
                {cars.length}
              </span>{" "}
              auto disponibili
            </p>
          </div>

          {cars.length === 0 ? (
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
                Nessun risultato disponibile
              </h3>
              <p className="text-gray-500">
                Al momento non ci sono auto da mostrare.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 animate-fade-in">
              {cars.map((car, index) => (
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
