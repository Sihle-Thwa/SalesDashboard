import { useState, useEffect } from "react";
import { BsGear, BsBell } from "react-icons/bs";
import NotificationsModal from "../../components/Modals/NotificationsModal";
import ProfileModal from "../Modals/ProfileModal";
import './header.css'


function Header() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleNotificationsOpen = () => {
    setShowNotifications(true);
  };

  const handleNotificationsClose = () => {
    setShowNotifications(false);
  };

  const handleProfileMenuOpen = () => {
    setShowProfileMenu(true);
  };

  const handleProfileMenuClose = () => {
    setShowProfileMenu(false);
  }

  useEffect(() => {
    const handleWindowClick = (event) => {
      if (showNotifications || showProfileMenu) {
        if (!event.target.closest('.notification-modal') && !event.target.closest('.profile-modal')) {
          setShowNotifications(false);
          setShowProfileMenu(false);
        }
      }
    };
  
    window.addEventListener('click', handleWindowClick);
  
    return () => {
      window.removeEventListener('click', handleWindowClick);
    };
  }, [showNotifications, showProfileMenu]);

  return (
    <nav className="navbar navbar-expand-lg bg-white text-dark border-bottom">
      <button
        className="navbar-toggler"
        type="button"
        aria-haspopup="true"
        aria-expanded="false"
        data-toggle="dropdown"
        style={{cursor:"pointer"}}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id=""
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" onClick={handleNotificationsOpen}
            >
              <BsBell />
              Notifications
            </a>
          </li>
          {showNotifications && (
            <div
              className="position-absolute notification-modal"
              style={{
                top: "50px",
                right: "20px",
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

        <div className="dropdown d-inline-block ">
          <button
            className="btn btn-secondary btn-sm dropdown-toggle bg-white text-dark"
            aria-haspopup="true"
            role="button"
            data-toggle="dropdown"
            aria-expanded="false"
            
            onClick={handleProfileMenuOpen}

          >
            <img
              src=""
              alt=""
              width="24"
              height="24"
              className="rounded-circle me-2"
            />
            <strong>Siphesihle</strong>
          </button>
          {showProfileMenu && (
  <div
    className="position-absolute profile-menu"
    style={{
      top: "50px",
      right: "20px",
      zIndex: 1000,
    }}
  >
    <ProfileModal onClose={handleProfileMenuClose} />
  </div>
)}
          
          
        </div>
      </div>
    </nav>
  );
}



export default Header;
