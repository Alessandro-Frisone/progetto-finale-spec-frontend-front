// src/components/ComparatorBar.jsx
import { useComparator } from "../contexts/ComparatorContext";
import { Link } from "react-router-dom";

export default function ComparatorBar() {
  const { selectedCars, removeFromComparator, clearComparator } = useComparator();

  if (selectedCars.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-2xl z-40 border-t-4 border-blue-500">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          
          {/* Selected cars display */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center gap-2">
              <i className="fas fa-balance-scale text-xl text-blue-200"></i>
              <span className="font-semibold text-lg">
                Comparatore ({selectedCars.length}/2)
              </span>
            </div>
            
            <div className="flex space-x-4">
              {selectedCars.map((car, index) => (
                <div key={car.id} className="flex items-center bg-blue-500/30 rounded-lg px-4 py-2 border border-blue-400/30">
                  <span className="font-medium text-sm mr-3 max-w-32 truncate">
                    {car.title}
                  </span>
                  <button
                    onClick={() => removeFromComparator(car.id)}
                    className="text-blue-200 hover:text-white hover:bg-blue-500 p-1 rounded-full transition-all duration-200"
                    aria-label={`Rimuovi ${car.title} dal comparatore`}
                  >
                    <i className="fas fa-times text-sm"></i>
                  </button>
                </div>
              ))}
              
              {/* Placeholder for second car */}
              {selectedCars.length === 1 && (
                <div className="flex items-center bg-blue-500/20 rounded-lg px-4 py-2 border-2 border-dashed border-blue-400/50">
                  <span className="text-blue-200 text-sm font-medium">
                    Seleziona seconda auto
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center space-x-3">
            {selectedCars.length === 2 && (
              <Link
                to="/comparator"
                className="bg-white text-blue-700 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <i className="fas fa-eye text-blue-600"></i>
                Confronta
              </Link>
            )}
            
            <button
              onClick={clearComparator}
              className="bg-blue-500/30 text-white px-4 py-2 rounded-full hover:bg-blue-500/50 transition-all duration-200 border border-blue-400/30 flex items-center gap-2"
            >
              <i className="fas fa-trash text-sm"></i>
              Svuota
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}