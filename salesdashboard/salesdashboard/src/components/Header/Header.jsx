import { BsGear, BsBell } from "react-icons/bs";
import NotificationsModal from "../Modals/NotificationsModal";
import { useState } from "react";

function Header() {
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white position-sticky">
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
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav">
          {navItems.map((item) => (
            <li key={item.href} className="nav-item">
              {item.icon === <BsBell /> ? (
                <a
                  className="nav-link"
                  onClick={handleModalOpen}
                >
                  {item.icon} {item.label}
                </a>
              ) : (
                <a className="nav-link" href={item.href}>
                  {item.icon} {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
        <div className="btn-group justify-content-end">
          <button
            className="btn btn-secondary btn-sm dropdown-toggle"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://www.flaticon.com/free-icon/profile_3135715?term=user+avatar&related_id=3135715"
              alt=""
              width="24"
              height="24"
              className="rounded-circle me-2"
            />
            <strong>S.Mthethwa</strong>
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            {dropdownItems.map((item) => (
              <li key={item.href}>
                <a className="dropdown-item" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <NotificationsModal isOpen={showModal} onClose={handleModalClose} />
      </div>
    </nav>
  );
}

const navItems = [
  {
    href: "#",
    icon: <BsBell />,
    label: "Notifications",
  },
  {
    href: "#",
    icon: <BsGear />,
    label: "Settings",
  },
];

const dropdownItems = [
  {
    href: "#",
    label: "New Customer",
  },
  {
    href: "#",
    label: "New Product",
  },
  {
    href: "#",
    label: "Generate Invoice",
  },
  {
    href: "#",
    label: "Log out",
  },
];

export default Header;