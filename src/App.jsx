// App.jsx
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { FavoritesProvider } from "./contexts/FavoritesContext";
import Layout from "./layouts/DefaultLayouts";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import FavoritesPage from "./pages/FavoritesPage";
import Comparison from "./pages/Comparison";
import ComparisonButton from "./components/ComparisonButton";
import { ComparisonProvider } from "./contexts/ComparisonContext";

export default function App() {
  return (
    <BrowserRouter>
      <FavoritesProvider>
        <ComparisonProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="detail/:id" element={<Detail />} />
            <Route path="favorites" element={<FavoritesPage />} />
            <Route path="/comparison" element={<Comparison />} />
          </Route>
        </Routes>
        <ComparisonButton/>
        </ComparisonProvider>
      </FavoritesProvider>
    </BrowserRouter>
  );
}
