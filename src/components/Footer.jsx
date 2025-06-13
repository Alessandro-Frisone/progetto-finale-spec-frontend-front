import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-6 relative">
        {/* Contenitore a 3 colonne */}
        <div className="flex justify-between items-center flex-wrap md:flex-nowrap mb-6 relative">
          {/* Logo e informazioni aziendali (sinistra) */}
          <div className="flex flex-col items-start">
            <Link to="/" className="mb-2">
              <img
                src="/logo_transparent.png"
                alt="AutoDeal logo"
                className="h-10 w-auto transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </Link>
            <div className="text-sm text-gray-400 leading-tight">
              <p>AutoDeal S.r.l.</p>
              <p>Via dei Motori 123, Milano (MI)</p>
              <p>P.IVA 01234567890</p>
            </div>
          </div>

          {/* Link centrati (assoluti al centro della pagina) */}
          <ul className="absolute left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center text-sm text-gray-300 gap-4 text-center">
            <li>
              <Link
                to="/ChiSiamo"
                className="hover:text-white transition-colors duration-200"
              >
                Chi siamo
              </Link>
            </li>
            <li>
              <Link
                to="/Servizi"
                className="hover:text-white transition-colors duration-200"
              >
                Servizi
              </Link>
            </li>
            <li>
              <Link
                to="/LavoraConNoi"
                className="hover:text-white transition-colors duration-200"
              >
                Lavora con noi
              </Link>
            </li>
            <li>
              <Link
                to="/FAQ"
                className="hover:text-white transition-colors duration-200"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/Contattaci"
                className="hover:text-white transition-colors duration-200"
              >
                Contattaci
              </Link>
            </li>
            <li>
              <Link
                to="/termini&privacy"
                className="hover:text-white transition-colors duration-200"
              >
                Termini & Privacy
              </Link>
            </li>
          </ul>

          {/* Social (destra) */}
          <div className="flex space-x-4 text-lg text-gray-300 mt-4 md:mt-0">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-white transition-colors duration-200"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-white transition-colors duration-200"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-white transition-colors duration-200"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="#"
              aria-label="X (Twitter)"
              className="hover:text-white transition-colors duration-200"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="hover:text-white transition-colors duration-200"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a
              href="#"
              aria-label="TikTok"
              className="hover:text-white transition-colors duration-200"
            >
              <i className="fab fa-tiktok"></i>
            </a>
          </div>
        </div>

        {/* Divider e copyright */}
        <div className="border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          © 2025 AutoDeal. Tutti i diritti riservati.
        </div>
      </div>
    </footer>
  );
}
