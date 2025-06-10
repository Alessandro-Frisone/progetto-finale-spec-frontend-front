import { Routes, Route, BrowserRouter } from "react-router-dom";
import { FavoritesProvider } from "./contexts/FavoritesContext";
import Layout from "./layouts/DefaultLayouts";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import FavoritesPage from "./pages/FavoritesPage";
// -------------------------------FOOTER-------------------------------- //
import ChiSiamo from "./pages/footer/ChiSiamo";
import Servizi from "./pages/footer/Servizi";
import LavoraConNoi from "./pages/footer/LavoraConNoi";
import FAQ from "./pages/footer/FAQ";
import TerminiEPrivacy from "./pages/footer/Termini&Privacy";
import Contattaci from "./pages/footer/Contattaci";

export default function App() {
  return (
    <BrowserRouter>
      <FavoritesProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="detail/:id" element={<Detail />} />
            <Route path="favorites" element={<FavoritesPage />} />
            <Route path="/ChiSiamo" element={<ChiSiamo />} />
            <Route path="/Servizi" element={<Servizi />} />
            <Route path="/LavoraConNoi" element={<LavoraConNoi />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/Termini&Privacy" element={<TerminiEPrivacy />} />
            <Route path="/Contattaci" element={<Contattaci />} />
          </Route>
        </Routes>
      </FavoritesProvider>
    </BrowserRouter>
  );
}
