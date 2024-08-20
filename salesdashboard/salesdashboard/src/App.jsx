import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import SideNav from "./components/Navigation/SideNav";
import Footer from "./components/Footer/Footer";
import { routes } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <div className="app w-100">
        <Header />
        <div className="row h-100">
          <nav className="col-1 p-0 main-nav">
            <SideNav />
          </nav>
          <main className="col-11">
            <Routes>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  element={<route.component />}
                />
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
