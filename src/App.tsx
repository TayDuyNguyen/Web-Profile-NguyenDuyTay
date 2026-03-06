import "./index.css";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="bg-background-light text-slate-900 antialiased">
      {/* Layout: Header */}
      <Header />

      {/* Main Content — render route con tại đây */}
      <main className="pt-20">
        <Outlet />
      </main>

      {/* Layout: Footer */}
      <Footer />
    </div>
  );
}

export default App;
