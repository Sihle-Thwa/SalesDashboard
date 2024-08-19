import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import SideNav from "./components/Navigation/SideNav";
import Footer from "./components/Footer/Footer";
import { routes } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid m-0 wrapper">
        <Header />
        <div className="row row-offcanvas row-offcanvas-left h-100">
          <nav className="col-lg-1 col-md-1 w-25 col-md-w-11 main-nav">
            <SideNav />
          </nav>
          <main className="col-lg-9 col-md-9 content-wrapper">
            <Routes>
              {routes.map((route, index) => (
                <Route key={index} path={route.path} element={<route.component />} />
              ))}
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;