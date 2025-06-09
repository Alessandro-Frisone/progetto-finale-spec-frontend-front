// src/pages/Comparison.jsx
import { useComparison } from "../contexts/ComparisonContext";
import { Link } from "react-router-dom";

export default function Comparison() {
  const { comparisonCars, removeFromComparison, clearComparison, canCompare } = useComparison();

  // Se non ci sono abbastanza auto per il confronto
  if (!canCompare()) {
    return (
      <div className="bg-orange-50 min-h-screen pt-16">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <div className="text-center">
            <i className="fas fa-balance-scale text-6xl text-gray-300 mb-6"></i>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Comparatore Auto
            </h1>
            <p className="text-gray-600 mb-8">
              {comparisonCars.length === 0 
                ? "Non hai ancora selezionato auto da confrontare."
                : `Hai selezionato ${comparisonCars.length} auto. Selezionane un'altra per confrontarle.`
              }
            </p>
            <Link
              to="/"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-full transition-colors duration-200"
            >
              Torna al Catalogo
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const [car1, car2] = comparisonCars;

  // Funzione per ottenere l'icona della categoria
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

  // Componente per una riga di confronto
  const ComparisonRow = ({ label, value1, value2, icon }) => (
    <div className="grid grid-cols-3 gap-4 py-4 border-b border-gray-100">
      <div className="flex items-center gap-2 font-medium text-gray-700">
        {icon && <i className={`${icon} text-orange-500`}></i>}
        {label}
      </div>
      <div className="text-center font-semibold text-gray-800 bg-blue-50 py-2 px-4 rounded">
        {value1 || "N/A"}
      </div>
      <div className="text-center font-semibold text-gray-800 bg-green-50 py-2 px-4 rounded">
        {value2 || "N/A"}
      </div>
    </div>
  );

  return (
    <div className="bg-orange-50 min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            <i className="fas fa-balance-scale text-blue-500 mr-3"></i>
            Confronto Auto
          </h1>
          <p className="text-gray-600 mb-6">
            Confronta le caratteristiche delle tue auto selezionate
          </p>
          
          {/* Azioni */}
          <div className="flex justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-6 rounded-full transition-colors duration-200"
            >
              <i className="fas fa-arrow-left"></i>
              Torna al Catalogo
            </Link>
            <button
              onClick={clearComparison}
              className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-6 rounded-full transition-colors duration-200"
            >
              <i className="fas fa-trash"></i>
              Svuota Comparatore
            </button>
          </div>
        </div>

        {/* Cards delle auto confrontate */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Auto 1 */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-4 border-blue-200">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-gray-800">
                {car1.title}
              </h2>
              <button
                onClick={() => removeFromComparison(car1.id)}
                className="text-red-500 hover:text-red-600 p-2"
                title="Rimuovi dal confronto"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <div className="flex justify-center mb-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
                <i className={`${getCategoryIcon(car1.category)} text-blue-500`}></i>
                {car1.category}
              </span>
            </div>
            
            <div className="text-center">
              <Link
                to={`/detail/${car1.id}`}
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-full transition-colors duration-200"
              >
                Vedi Dettagli
              </Link>
            </div>
          </div>

          {/* Auto 2 */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-4 border-green-200">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-gray-800">
                {car2.title}
              </h2>
              <button
                onClick={() => removeFromComparison(car2.id)}
                className="text-red-500 hover:text-red-600 p-2"
                title="Rimuovi dal confronto"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <div className="flex justify-center mb-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
                <i className={`${getCategoryIcon(car2.category)} text-green-500`}></i>
                {car2.category}
              </span>
            </div>
            
            <div className="text-center">
              <Link
                to={`/detail/${car2.id}`}
                className="inline-block bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-full transition-colors duration-200"
              >
                Vedi Dettagli
              </Link>
            </div>
          </div>
        </div>

        {/* Tabella di confronto */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-6">
            <h3 className="text-2xl font-bold text-center">
              Confronto Dettagliato
            </h3>
          </div>
          
          <div className="p-6">
            {/* Header della tabella */}
            <div className="grid grid-cols-3 gap-4 pb-4 border-b-2 border-gray-200 mb-4">
              <div className="font-bold text-gray-800 text-lg">
                Caratteristica
              </div>
              <div className="text-center font-bold text-blue-600 text-lg bg-blue-50 py-2 px-4 rounded">
                {car1.title}
              </div>
              <div className="text-center font-bold text-green-600 text-lg bg-green-50 py-2 px-4 rounded">
                {car2.title}
              </div>
            </div>

            {/* Righe di confronto */}
            <ComparisonRow
              label="Nome"
              value1={car1.title}
              value2={car2.title}
              icon="fas fa-tag"
            />
            
            <ComparisonRow
              label="Categoria"
              value1={car1.category}
              value2={car2.category}
              icon="fas fa-list"
            />
            
            <ComparisonRow
              label="Marca"
              value1={car1.brand || "Non specificata"}
              value2={car2.brand || "Non specificata"}
              icon="fas fa-industry"
            />
            
            <ComparisonRow
              label="Anno"
              value1={car1.year || "Non specificato"}
              value2={car2.year || "Non specificato"}
              icon="fas fa-calendar"
            />
            
            <ComparisonRow
              label="Prezzo"
              value1={car1.price ? `€ ${car1.price.toLocaleString()}` : "Non specificato"}
              value2={car2.price ? `€ ${car2.price.toLocaleString()}` : "Non specificato"}
              icon="fas fa-euro-sign"
            />
            
            <ComparisonRow
              label="Kilometraggio"
              value1={car1.mileage ? `${car1.mileage.toLocaleString()} km` : "Non specificato"}
              value2={car2.mileage ? `${car2.mileage.toLocaleString()} km` : "Non specificato"}
              icon="fas fa-tachometer-alt"
            />
            
            <ComparisonRow
              label="Carburante"
              value1={car1.fuel || "Non specificato"}
              value2={car2.fuel || "Non specificato"}
              icon="fas fa-gas-pump"
            />
            
            <ComparisonRow
              label="Trasmissione"
              value1={car1.transmission || "Non specificata"}
              value2={car2.transmission || "Non specificata"}
              icon="fas fa-cogs"
            />
            
            <ComparisonRow
              label="Potenza"
              value1={car1.power ? `${car1.power} CV` : "Non specificata"}
              value2={car2.power ? `${car2.power} CV` : "Non specificata"}
              icon="fas fa-bolt"
            />
            
            <ComparisonRow
              label="Colore"
              value1={car1.color || "Non specificato"}
              value2={car2.color || "Non specificato"}
              icon="fas fa-palette"
            />
          </div>
        </div>

        {/* Call to action finale */}
        <div className="text-center mt-12 p-8 bg-white rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Hai trovato l'auto giusta?
          </h3>
          <p className="text-gray-600 mb-6">
            Visualizza i dettagli completi di ciascuna auto o torna al catalogo per cercarne altre.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to={`/detail/${car1.id}`}
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-full transition-colors duration-200"
            >
              <i className="fas fa-eye"></i>
              Dettagli {car1.title}
            </Link>
            <Link
              to={`/detail/${car2.id}`}
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-full transition-colors duration-200"
            >
              <i className="fas fa-eye"></i>
              Dettagli {car2.title}
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-full transition-colors duration-200"
            >
              <i className="fas fa-search"></i>
              Cerca Altre Auto
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}