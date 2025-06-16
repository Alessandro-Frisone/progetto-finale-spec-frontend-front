/**
 * CUSTOM HOOKS (Context API)
 * Questi hooks forniscono accesso ai Context globali dell'applicazione
 */
import { useFavorites } from "../../contexts/FavoritesContext"; // Gestione preferiti
import { useComparator } from "../../contexts/ComparatorContext"; // Sistema confronto auto
import { useNotification } from "../../contexts/NotificationContext"; // Sistema notifiche
import { Link } from "react-router-dom";

// =====================================
// COMPONENTE PRINCIPALE
// =====================================

/**
 * ProductCard Component
 *   - car.id: identificativo univoco
 *   - car.title: nome/modello dell'auto
 *   - car.category: categoria (SUV, Berlina, etc.)
 */
export default function ProductCard({ car }) {
  // =====================================
  // ESTRAZIONE FUNZIONI DAI CONTEXT
  // =====================================

  /**
   * FAVORITES CONTEXT
   * - addToFavorites: aggiunge auto ai preferiti
   * - removeFromFavorites: rimuove auto dai preferiti
   * - isFavorite: verifica se un'auto è nei preferiti
   */
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  /**
   * COMPARATOR CONTEXT
   * - addToComparator: aggiunge auto al confronto
   * - removeFromComparator: rimuove auto dal confronto
   * - isInComparator: verifica se auto è nel confronto
   * - canAddMore: verifica se si possono aggiungere altre auto (limite: 2)
   */
  const { addToComparator, removeFromComparator, isInComparator, canAddMore } =
    useComparator();

  /**
   * NOTIFICATION CONTEXT
   * - addNotification: mostra notifica all'utente
   *   Parametri: (messaggio, tipo) dove tipo può essere 'success', 'error', 'info'
   */
  const { addNotification } = useNotification();

  // =====================================
  // STATO DERIVATO
  // =====================================

  /**
   * Calcola lo stato corrente dell'auto nei vari sistemi
   * Questi valori sono "derivati" dai Context e si aggiornano automaticamente
   */
  const isCarFavorite = isFavorite(car.id); // È nei preferiti?
  const isCarInComparator = isInComparator(car.id); // È nel confronto?

  // =====================================
  // EVENT HANDLERS
  // =====================================

  /**
   * GESTORE CLICK FAVORITI
   * Logica:
   * 1. Previene comportamenti di default (Link wrapper)
   * 2. Ferma la propagazione dell'evento
   * 3. Toggle: aggiunge o rimuove dai preferiti
   * 4. Mostra notifica appropriata
   */
  const handleFavoriteClick = (e) => {
    e.preventDefault(); // Impedisce navigazione Link
    e.stopPropagation(); // Ferma bubbling evento (serve per impedire che un evento si "trasmetta" agli elementi genitori)

    if (isCarFavorite) {
      // Auto già nei preferiti → RIMUOVI
      removeFromFavorites(car.id);
      addNotification(`${car.title} rimosso dai preferiti`, "info");
    } else {
      // Auto non nei preferiti → AGGIUNGI
      addToFavorites(car);
      addNotification(`${car.title} aggiunto ai preferiti!`, "success");
    }
  };

  /**
   * GESTORE CLICK COMPARATORE
   * Logica più complessa:
   * 1. Se auto già nel confronto → rimuovi
   * 2. Se non nel confronto E si può aggiungere → aggiungi
   * 3. Se limite raggiunto → mostra errore
   */
  const handleComparatorClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (isCarInComparator) {
      // CASO 1: Auto già nel confronto → rimuovi
      removeFromComparator(car.id);
      addNotification(`${car.title} rimosso dal confronto`, "info");
    } else if (canAddMore) {
      // CASO 2: Auto non nel confronto E posso aggiungere → aggiungi
      addToComparator(car);
      addNotification(`${car.title} aggiunto al confronto!`, "success");
    } else {
      // CASO 3: Limite raggiunto → errore
      addNotification("Puoi confrontare massimo 2 auto", "error");
    }
  };

  // =====================================
  // UTILITY FUNCTIONS
  // =====================================

  /**
   * FUNZIONE PER ICONE CATEGORIA
   * Pattern: Switch statement per mappare categorie → icone
   * Fallback: icona generica se categoria non riconosciuta
   */
  const getCategoryIcon = (category) => {
    switch (category.toLowerCase()) {
      case "suv":
        return "fas fa-car"; // Icona auto generica per SUV
      case "berlina":
        return "fas fa-car-side"; // per berlina
      case "coupé":
        return "fas fa-car-alt"; // Variante per coupé
      case "station wagon":
        return "fas fa-shuttle-van"; // Van per station wagon
      case "cabrio":
        return "fas fa-wind"; // Vento per cabrio
      case "plug-in hybrid":
        return "fas fa-charging-station"; // Stazione ricarica per ibrida
      default:
        return "fas fa-car"; // Fallback generico
    }
  };

  return (
    <div className="group relative w-full max-w-sm mx-auto bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* ---------- Header con titolo e pulsante preferiti ---------- */}
      <div className="relative h-24 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        {/* Pulsante per aggiungere/rimuovere dai preferiti */}
        <button
          onClick={handleFavoriteClick}
          className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-10 ${
            isCarFavorite
              ? "text-orange-500"
              : "text-white hover:text-orange-300"
          }`}
          aria-label={
            isCarFavorite ? "Rimuovi dai preferiti" : "Aggiungi ai preferiti"
          }
        >
          <i
            className={`${
              isCarFavorite ? "fas fa-heart" : "far fa-heart"
            } text-lg`}
          ></i>
        </button>

        {/* Titolo dell'auto */}
        <div className="absolute inset-0 flex items-center justify-center px-16">
          <h2 className="text-xl font-bold text-white text-center leading-tight hover:text-gray-200 transition-colors duration-300">
            {car.title}
          </h2>
        </div>
      </div>

      {/* ---------- Corpo principale della card ---------- */}
      <div className="p-6 space-y-6">
        {/* Categoria dell'auto con icona */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-700 rounded-full border border-orange-200">
            <i
              className={`${getCategoryIcon(car.category)} text-orange-600`}
            ></i>
            <span className="text-sm font-medium">{car.category}</span>
          </div>
        </div>

        {/* Decorazione con linee e punto centrale */}
        <div className="flex items-center justify-center gap-3">
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-orange-300"></div>
          <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
          <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-orange-300"></div>
        </div>

        {/* ---------- Pulsanti: confronto e dettagli ---------- */}
        <div className="space-y-3">
          {/* Pulsante per aggiungere/rimuovere dal comparatore */}
          <button
            onClick={handleComparatorClick}
            disabled={!canAddMore && !isCarInComparator}
            className={`w-full flex items-center justify-center gap-3 py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
              isCarInComparator
                ? "bg-gray-800 text-white border border-gray-700 hover:bg-gray-700"
                : canAddMore
                ? "bg-gray-50 text-gray-700 border border-gray-200 hover:bg-gray-100 hover:border-gray-300"
                : "bg-gray-50 text-gray-400 border border-gray-200 cursor-not-allowed opacity-60"
            }`}
          >
            <i
              className={`fas fa-balance-scale ${
                isCarInComparator ? "text-orange-400" : "text-gray-500"
              }`}
            ></i>
            <span className="text-sm">
              {isCarInComparator ? "Nel comparatore" : "Aggiungi al confronto"}
            </span>
          </button>

          {/* Link ai dettagli dell'auto */}
          <Link
            to={`/detail/${car.id}`}
            className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:shadow-lg group"
          >
            <span className="text-sm">Visualizza dettagli</span>
            <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform duration-300"></i>
          </Link>
        </div>
      </div>

      {/* ---------- Linea decorativa inferiore ---------- */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600"></div>
    </div>
  );
}
