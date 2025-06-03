export default function ProductCard({ car }) {
  return (
    <div>
      <h2>{car.title}</h2>
      <p><strong>Marca:</strong> {car.brand || 'N/D'}</p>
      <p><strong>Modello:</strong> {car.model || 'N/D'}</p>
      <p><strong>Categoria:</strong> {car.category}</p>
      <p><strong>Anno:</strong> {car.year || 'N/D'}</p>
      <p><strong>Chilometri:</strong> {car.km || 'N/D'} km</p>
      <p><strong>Prezzo:</strong> € {car.price || 'N/D'}</p>
      <img src={car.imageUrl} alt={car.title} className="w-full h-48 object-cover" />
    </div>
  );
}