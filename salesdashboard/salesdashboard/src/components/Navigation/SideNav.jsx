import {
  BsColumns,
  BsFileEarmarkText,
  BsGear,
  BsGraphUp,
  BsPc,
  BsPeople,
  BsQuestion,
  BsSpeedometer,
  BsTicket,
} from "react-icons/bs";
import "./SidaNav.css";

function SideNav() {
  const mainNavItems = [
    {
      href: "/dashboard",
      icon: <BsColumns size={20} />,
      label: "Dashboard",
    },
    {
      href: "/report",
      icon: <BsFileEarmarkText size={20} />,
      label: "Report",
    },
    {
      href: "/product",
      icon: <BsTicket size={20} />,
      label: "Product",
    },
    {
      href: "#/analytics",
      icon: <BsGraphUp size={20} />,
      label: "Analytics",
    },
    {
      href: "#/performance",
      icon: <BsSpeedometer size={20} />,
      label: "Performance",
    },
    {
      href: "/customers",
      icon: <BsPeople size={20} />,
      label: "Customers",
    },
  ];

  const footerNavItems = [
    {
      href: "#/help",
      icon: <BsQuestion size={20} />,
      label: "Help",
    },
    {
      href: "/settings",
      icon: <BsGear size={20} />,
      label: "Settings",
    },
    {
      href: "#/logout",
      icon: <BsPc size={20} />,
      label: "Logout",
    },
  ];

  return (
    <nav
      className="nav d-flex flex-column flex-shrink-0 text-dark bg-white col-12 border-end text-decoration-none"
      style={{ height: "100vh", maxWidth: "300px" }}
    >
      <a
        href="/dashboard"
        className="d-flex align-items-center mb-2  me-md-auto text-black text-decoration-none"
      >
        <h2
          className="d-none d-lg-block lh-3 lh-2 align-self-center"
          style={{ color: "#06c" }}
        >
          SBM
        </h2>
      </a>

      <ul className="nav nav-pills flex-column mb-auto ml-1 mt-1 pb-1 pt-1 lh-3">
        {mainNavItems.map((item) => (
          <li key={item.href} className="nav-item ml-1 mt-1 pb-1 pt-1 lh-3">
            <a className="nav-link p-3" href={item.href}>
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label ms-1 d-lg-inline p-lg-2 d-none">
                {item.label}
              </span>
            </a>
          </li>
        ))}
      </ul>

      <ul className="nav nav-pills flex-column mb-0 ml-1 pb-1 pt-1 link-offset-1-hover">
        {footerNavItems.map((item) => (
          <li key={item.href} className="nav-item ml-1 mt-1 pb-1 pt-1 lh-3">
            <a className="nav-link p-3" href={item.href}>
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label ms-1 d-lg-inline p-lg-2 d-none">
                {item.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SideNav;
