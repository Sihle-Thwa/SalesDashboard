import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import SideNav from "./components/Navigation/SideNav";
import Footer from "./components/Footer/Footer";
import { routes } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <div className="app ">
        <Header />
        <div className="row ">
          <nav className="col-2 main-nav" style={{ maxWidth: "250px", height: "100vh" }}>
            <SideNav />
          </nav>
          <main className="col-10">
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