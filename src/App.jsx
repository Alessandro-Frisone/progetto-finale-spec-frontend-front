// App.jsx
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { FavoritesProvider } from "./contexts/FavoritesContext";
import Layout from "./layouts/DefaultLayouts";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import FavoritesPage from "./pages/FavoritesPage";

export default function App() {
  return (
    <BrowserRouter>
      <FavoritesProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="detail/:id" element={<Detail />} />
            <Route path="favorites" element={<FavoritesPage />} />
           
          </Route>
        </Routes>
      </FavoritesProvider>
    </BrowserRouter>
  );
}
