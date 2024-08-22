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
    <nav className="navbar navbar-expand-lg navbar-light bg-white text-dark border-bottom">
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
                <a className="nav-link" onClick={handleModalOpen}>
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
        <div className="dropdown justify-content-end">
          <button
            className="btn btn-secondary btn-sm dropdown-toggle bg-white text-dark"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            id="dropDownMenuProfile"
          >
            <img
              src="https://www.flaticon.com/free-icon/profile_3135715?term=user+avatar&related_id=3135715"
              alt=""
              width="24"
              height="24"
              className="rounded-circle me-2"
            />
            <strong>Siphesihle</strong>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropDownMenuProfile">
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
    href: "#NotificationModal",
    icon: <BsBell />,
    label: "Notifications",
  },
  {
    href: "#/settings",
    icon: <BsGear />,
    label: "Settings",
  },
];

const dropdownItems = [
  {
    href: "/new-customer",
    label: "New Customer",
  },
  {
    href: "#/new-product",
    label: "New Product",
  },
  {
    href: "#/generate-invoice",
    label: "Generate Invoice",
  },
  {
    href: "#/logout",
    label: "Log out",
  },
];

export default Header;
