import { useEffect, useState } from "react";
import { fetchCars } from "../services/api";
import ProductCard from "../components/ProductCard";

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
      {/* Hero/carosello placeholder */}
      <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1500&q=80"
          alt="Car showroom"
          className="w-full h-64 object-cover"
        />
      </div>

      {/* Titolo */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Auto disponibili
      </h1>

      {/* Griglia di auto */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cars.map((car) => (
          <ProductCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}
