import { useEffect, useState } from 'react';
import { fetchCars } from '../services/api';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchCars()
      .then(setCars)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Caricamento...</p>;
  if (error) return <p>Errore: {error}</p>;

  return (
    <div>
      <h1>Auto disponibili</h1>
      {cars.map((car) => (
        <ProductCard key={car.id} car={car} />
      ))}
    </div>
  );
}
