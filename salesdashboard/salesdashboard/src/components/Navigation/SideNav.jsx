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
  const navItems = [
    {
      href: "/dashboard",
      icon: <BsColumns />,
      label: "Dashboard",
    },
    {
      href: "/report",
      icon: <BsFileEarmarkText />,
      label: "Report",
    },
    {
      href: "/product",
      icon: <BsTicket />,
      label: "Product",
    },
    {
      href: "#",
      icon: <BsGraphUp />,
      label: "Analytics",
    },
    {
      href: "#",
      icon: <BsSpeedometer />,
      label: "Performance",
    },
    {
      href: "/customers",
      icon: <BsPeople />,
      label: "Customers",
    },
    {
      href: "#",
      icon: <BsQuestion />,
      label: "Help center",
    },
    {
      href: "#",
      icon: <BsGear />,
      label: "Settings",
    },
    {
      href: "#",
      icon: <BsPc />,
      label: "Logout",
    },
  ];

  return (
    <nav
      className="nav d-flex flex-column flex-shrink-0 p-1 text-black bg-light col-12"
      style={{ height: "100vh", maxWidth: "100%" }}
    >
      <a
        href="/dashboard"
        className="d-flex align-items-center mb-2  me-md-auto text-black text-decoration-none"
      >
        <h1 className="d-none d-lg-block">Sales4U</h1>
      </a>
      <hr className=" d-lg-block" />

      <ul className="nav nav-pills flex-column mb-1">
        {navItems.map((item) => (
          <li key={item.href} className="nav-item">
            <a className="nav-link" href={item.href}>
              {item.icon}
              <span className="ms-1 d-lg-inline d-none">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SideNav;
