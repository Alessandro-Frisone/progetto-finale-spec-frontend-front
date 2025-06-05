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
      .then(setCars)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Caricamento...</p>;
  if (error) return <p>Errore: {error}</p>;

  return (
    <div className="px-6 py-8 bg-gray-50 min-h-screen">
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
            misura. Dal primo contatto fino all’assistenza post-vendita, siamo
            sempre al tuo fianco per garantirti un’esperienza d’acquisto
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

      <section className="relative bg-gradient-to-br from-orange-50 via-white to-gray-50 py-20 px-4 sm:px-8 md:px-12 lg:px-20 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Titolo con animazione */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              🚗 Auto <span className="text-orange-500">disponibili</span>
            </h1>
            <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
              Scopri la nostra selezione esclusiva di auto usate, accuratamente
              scelte per te.
            </p>
          </div>

          {/* Griglia con animazione su scroll */}
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
        </div>
      </section>
    </div>
  );
}
