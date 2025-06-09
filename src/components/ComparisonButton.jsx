// src/components/ComparisonButton.jsx
import { useComparison } from "../contexts/ComparisonContext";
import { Link } from "react-router-dom";

export default function ComparisonButton() {
  const { comparisonCount, canCompare, clearComparison } = useComparison();

  if (comparisonCount === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-white rounded-full shadow-lg border border-gray-200 p-4 min-w-[200px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <i className="fas fa-balance-scale text-blue-500"></i>
            <span className="font-medium text-gray-800">
              {comparisonCount}/2 auto
            </span>
          </div>
          
          <div className="flex gap-2">
            {canCompare() && (
              <Link
                to="/comparison"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200"
              >
                Confronta
              </Link>
            )}
            <button
              onClick={clearComparison}
              className="text-gray-400 hover:text-gray-600 p-1"
              title="Svuota comparatore"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
        
        {!canCompare() && (
          <p className="text-xs text-gray-500 mt-2">
            Aggiungi {2 - comparisonCount} auto per confrontarle
          </p>
        )}
      </div>
    </div>
  );
}