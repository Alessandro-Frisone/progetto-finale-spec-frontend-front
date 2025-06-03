export default function ProductCard({ car }) {
  // Debug: stampa tutti i dati ricevuti
  console.log('=== DEBUG AUTO ===');
  console.log('Oggetto completo:', car);
  console.log('car.km:', car.km, 'tipo:', typeof car.km);
  console.log('car.price:', car.price, 'tipo:', typeof car.price);
  console.log('Tutte le chiavi:', Object.keys(car));
  console.log('==================');

  return (
    <div>
      <h2>{car.title}</h2>
      <p><strong>Marca:</strong> {car.brand || 'N/D'}</p>
      <p><strong>Modello:</strong> {car.model || 'N/D'}</p>
      <p><strong>Categoria:</strong> {car.category}</p>
      <p><strong>Anno:</strong> {car.year || 'N/D'}</p>
      <p><strong>Chilometri:</strong> {car.km || 'N/D'} km</p>
      <p><strong>Prezzo:</strong> € {car.price || 'N/D'}</p>
    </div>
  );
}