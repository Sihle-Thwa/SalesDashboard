import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import SideNav from "./components/Navigation/SideNav";
import Dashboard from "./pages/Dashboard/Dashboard";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid wrapper">
        <div className="row">
          <header className="col-lg-12 col-md-12 main-head">
            <Header />
          </header>
        </div>
        <div className="row row-offcanvas row-offcanvas-left h-100 ">
          <nav className="col-lg-1 col-md-1  w-25 main-nav">
            <SideNav />
          </nav>
          <main className="col-lg-9  col-md-12 content-wrapper ">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </main>
        </div>

        <footer className="col-md-12 main-footer">
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
