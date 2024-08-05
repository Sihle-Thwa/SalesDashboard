import { BsGear } from "react-icons/bs";
import { BsBell } from "react-icons/bs";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white position-sticky">
      <a className="navbar-brand" href="/dashboard">
        LOGO
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Search <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <BsBell />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <BsGear />
            </a>
          </li>
        </ul>
        <div className="btn-group justify-content-end">
          <button
            className="btn btn-secondary btn-sm dropdown-toggle"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src=""
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>S.Mthethwa</strong>
          </button>
          <ul
            className="dropdown-menu dropdown-menu-end"
          >
            <li>
              <a className="dropdown-item" href="#">
                New Customer
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                New Product
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Generate Invoice
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Log out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;