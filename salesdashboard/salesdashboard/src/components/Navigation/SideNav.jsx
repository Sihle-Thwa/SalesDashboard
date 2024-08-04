function SideNav() {
  return (
    <nav className="nav d-flex flex-column flex-shrink-0 p-1 text-white bg-dark w-100 md-w-75" style={{ height: "100vh" }}>
      <a
        href="/home"
        className="d-flex align-items-center mb-2 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <span>Sales4U</span>
      </a>
      <hr />

      <ul className="nav nav-pills flex-column mb-1">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/dashboard">
            <span className="ms-1 d-sm-inline"></span>
            Dashboard
          </a>
        </li>
      </ul>

      <ul className="nav nav-pills flex-column mb-1">
        <li className="nav-item">
          <a className="nav-link align-middle -sm-0" href="/report">
            <span className="ms-1 d-sm-inline ">Report</span>
          </a>
        </li>
      </ul>
      <ul className="nav nav-pills flex-column mb-1">
        <li className="nav-item">
          <a className="nav-link" href="/product">
            <span className="ms-1 d-sm-inline">Product</span>
          </a>
        </li>
      </ul>
      <ul className="nav nav-pills flex-column mb-1">
        <li className="nav-item">
          <a className="nav-link" href="#">
            <span className="ms-1 d-sm-inline">Analytics</span>
          </a>
        </li>
      </ul>
      <ul className="nav nav-pills flex-column mb-1">
        <li className="nav-item">
          <a className="nav-link" href="#">
            <span className="ms-1 d-sm-inline">Performance</span>
          </a>
        </li>
      </ul>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a className="nav-link" href="/customers">
            <span className="ms-1 d-sm-inline">Customers</span>
          </a>
        </li>
      </ul>
      <ul className="nav nav-pills flex-column mb-1">
        <li className="nav-item">
          <a className="nav-link" href="#">
            <span className="ms-1 d-sm-inline">Help center</span>
          </a>
        </li>
      </ul>
      <ul className="nav nav-pills flex-column mb-1">
        <li className="nav-item">
          <a className="nav-link" href="#">
            <span className="ms-1 d-sm-inline">Settings</span>
          </a>
        </li>
      </ul>
      <ul className="nav nav-pills flex-column mb-1">
        <li className="nav-item">
          <a className="nav-link" href="#">
            <span className="ms-1 d-sm-inline">Logout</span>
          </a>
        </li>
      </ul>
      <hr />

    </nav>
  );
}

export default SideNav;
