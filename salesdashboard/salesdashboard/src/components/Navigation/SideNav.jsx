import { BsColumns, BsFileEarmarkText, BsGear, BsGraphUp, BsPc, BsPeople, BsQuestion, BsSpeedometer, BsTicket } from "react-icons/bs";

function SideNav() {
  return (
    <nav className="nav d-flex flex-column flex-shrink-0 p-1 text-white bg-dark w-100 md-w-75" style={{ height: "100vh" }}>
      <a
        href="/home"
        className="d-flex align-items-center mb-2 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <h1>Sales4U</h1>
      </a>
      <hr />

      <ul className="nav nav-pills flex-column mb-1">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/dashboard">
            <BsColumns />
            <span className="ms-1 d-sm-inline d-none">Dashboard</span>

          </a>
        </li>
      </ul>

      <ul className="nav nav-pills flex-column mb-1">
        <li className="nav-item">
          <a className="nav-link align-middle -sm-0" href="/report">
            <BsFileEarmarkText />
            <span className="ms-1 d-sm-inline d-none">Report</span>
          </a>
        </li>
      </ul>
      <ul className="nav nav-pills flex-column mb-1">
        <li className="nav-item">
          <a className="nav-link" href="/product">
            <BsTicket />
            <span className="ms-1 d-sm-inline d-none">Product</span>
          </a>
        </li>
      </ul>
      <ul className="nav nav-pills flex-column mb-1">
        <li className="nav-item">
          <a className="nav-link" href="#">
            <BsGraphUp />
            <span className="ms-1 d-sm-inline d-none">Analytics</span>
          </a>
        </li>
      </ul>
      <ul className="nav nav-pills flex-column mb-1">
        <li className="nav-item">
          <a className="nav-link" href="#">
            <BsSpeedometer />
            <span className="ms-1 d-sm-inline d-none">Performance</span>
          </a>
        </li>
      </ul>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a className="nav-link" href="/customers">
            <BsPeople />
            <span className="ms-1 d-sm-inline d-none">Customers</span>
          </a>
        </li>
      </ul>
      <ul className="nav nav-pills flex-column mb-1">
        <li className="nav-item">
          <a className="nav-link" href="#">
            <BsQuestion />
            <span className="ms-1 d-sm-inline d-none">Help center</span>
          </a>
        </li>
      </ul>
      <ul className="nav nav-pills flex-column mb-1">
        <li className="nav-item">
          <a className="nav-link" href="#">
            <BsGear />
            <span className="ms-1 d-sm-inline d-none">Settings</span>
          </a>
        </li>
      </ul>
      <ul className="nav nav-pills flex-column mb-1">
        <li className="nav-item">
          <a className="nav-link" href="#">
            <BsPc />
            <span className="ms-1 d-sm-inline d-none">Logout</span>
          </a>
        </li>
      </ul>

    </nav>
  );
}

export default SideNav;
