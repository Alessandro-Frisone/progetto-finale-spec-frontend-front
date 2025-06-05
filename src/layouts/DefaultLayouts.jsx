import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="pt-22 bg-gray-50 min-h-screen w-full overflow-x-hidden">
        <Outlet />
      </main>
    </>
  );
}
