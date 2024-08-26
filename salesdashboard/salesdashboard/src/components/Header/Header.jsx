import { useState } from "react";
import { BsGear, BsBell } from "react-icons/bs";
import NotificationsModal from "../../components/Modals/NotificationsModal";

function Header() {
  const [showNotifications, setShowNotifications] = useState(false);

  const handleNotificationsOpen = () => {
    setShowNotifications(true);
  };

  const handleNotificationsClose = () => {
    setShowNotifications(false);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white text-dark border-bottom">
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
          <li className="nav-item">
            <a className="nav-link" onClick={handleNotificationsOpen}>
              <BsBell />
              Notifications
            </a>
          </li>
          {showNotifications && (
            <div
              className="position-absolute notification-modal"
              style={{
                top: "50px",
                right: "20x",
                zIndex: 1000,
              }}
            >
              <NotificationsModal onClose={handleNotificationsClose} />
            </div>
          )}
          <li className="nav-item">
            <a className="nav-link" href="/settings">
              <BsGear />
              Settings
            </a>
          </li>
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
      </div>
    </nav>
  );
}

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
