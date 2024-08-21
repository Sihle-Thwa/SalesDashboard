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
      href: "#/settings",
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
      className="nav d-flex flex-column flex-shrink-0 p-1 text-black bg-light col-12"
      style={{ height: "100vh", maxWidth: "300px", boxShadow: "5px 0 10px rgba(0, 0, 0, 0.1)" }}
    >
      <a
        href="/dashboard"
        className="d-flex align-items-center mb-2  me-md-auto text-black text-decoration-none"
      >
        <h2 className="d-none d-lg-block lh-3 ">Sales4U</h2>
      </a>
      <hr className=" d-none d-lg-block" />

      <ul className="nav nav-pills flex-column mb-auto ml-1 mt-1 pb-1 pt-1 lh-3">
        {mainNavItems.map((item) => (
          <li key={item.href} className="nav-item ml-1 mt-1 pb-1 pt-1 lh-3">
            <a className="nav-link p-3" href={item.href}>
              {item.icon}
              <span className="ms-1 d-lg-inline d-none  " style={{ fontSize: "16px" }}>
                {item.label}
              </span>
            </a>
          </li>
        ))}
      </ul>

      <ul className="nav nav-pills flex-column mb-0 ml-1 pb-1 pt-1 link-offset-1-hover ">
        {footerNavItems.map((item) => (
          <li key={item.href} className="nav-item ml-1 mt-1 pb-1 pt-1 lh-3 ">
            <a className="nav-link p-3" href={item.href}>
              {item.icon}
              <span className="ms-1 d-lg-inline d-none" style={{ fontSize: "16px" }}>
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