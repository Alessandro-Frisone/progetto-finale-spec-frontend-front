import { Link } from "react-router-dom";
import { useComparison } from "../contexts/ComparisonContext";


export default function Navbar() {

  const { comparisonCount } = useComparison();

  return (
    <nav className="bg-black shadow-lg px-12 py-4 flex justify-between items-center fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <div className="flex items-center space-x-2">
        <Link to="/">
          <img
            src="/logo.png"
            alt="AutoDeal logo"
            className="h-15 w-auto transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </Link>
      </div>

      <div className="space-x-6">
        <Link
          to="/"
          className="text-gray-300 hover:text-white font-medium transition-colors duration-200"
        >
          Home
        </Link>
        <Link
          to="/favorites"
          className="text-gray-300 hover:text-white font-medium transition-colors duration-200"
        >
          Favorites
        </Link>
        <Link
              to="/comparison"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-500 font-medium transition-colors duration-200 relative"
            >
              <i className="fas fa-balance-scale"></i>
              Comparatore
              {comparisonCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {comparisonCount}
                </span>
              )}
            </Link>
      </div>
    </nav>
  );
}
