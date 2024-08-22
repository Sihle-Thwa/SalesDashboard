function Footer() {
  return (
    <>
      <div className="row d-flex footer position-sticky b-0 bg-white z-sticky">
        <div className="app-footer_inner">
          <div className=" col app-footer-left">
            <ul className="nav">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Footer Link 1
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Footer Link 2
                </a>
              </li>
            </ul>
          </div>
          <div className="col app-footer-right">
            <ul className="nav">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Footer Link 3
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <div className="badge bg-success me-1 ms-0">
                    <small>NEW</small>
                  </div>
                  Footer Link 4
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
