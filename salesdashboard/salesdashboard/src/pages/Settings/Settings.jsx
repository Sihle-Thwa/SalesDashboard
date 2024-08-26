import { useState } from "react";
import GeneralSettings from "../../components/Features/Settings/Components/GeneralSettings.jsx";
import PreferenceSettings from "../../components/Features/Settings/Components/PreferenceSettings";
import NotificationsSettings from "../../components/Features/Settings/Components/NotificationsSettings";
import AccountSettings from "../../components/Features/Settings/Components/AccountSettings";
import UserSettings from "../../components/Features/Settings/Components/UserSettings";
import BillingsSettings from "../../components/Features/Settings/Components/BillingSettings";
import {
  BsBell,
  BsCashStack,
  BsGear,
  BsPeople,
  BsUniversalAccess,
  BsWindowDesktop,
} from "react-icons/bs";

function Settings() {
  const [activeComponent, setActiveComponent] = useState(null);
  const settingsNavItems = [
    {
      href: "/ssettings-general",
      icon: <BsPeople />,
      label: "General",
      component: <GeneralSettings />,
    },
    {
      href: "/ssettings-preference",
      icon: <BsWindowDesktop />,
      label: "Preference",
      component: <PreferenceSettings />,
    },
    {
      href: "/ssettings-Notifications",
      icon: <BsBell />,
      label: "Notifications",
      component: <NotificationsSettings />,
    },
    {
      href: "/ssettings-Account",
      icon: <BsGear />,
      label: "Account",
      component: <AccountSettings />,
    },
    {
      href: "/ssettings-User",
      icon: <BsUniversalAccess />,
      label: "Permissions",
      component: <UserSettings />,
    },
    {
      href: "/ssettings-Billings",
      icon: <BsCashStack />,
      label: "Billings",
      component: <BillingsSettings />,
    },
  ];

  const handleNavItemClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="settings-app">
      {/* SubHeader */}
      <div className="row sub-header mt-2 mb-1 p-1 ">
        <div className="col">
          <div className="page-title-heading">
            <h3> Settings</h3>
          </div>
        </div>
        <div className="col col-lg-1 ">
          <button className="btn btn-light w-100  ">
            <small> Cancel</small>
          </button>
        </div>
        <div className="col col-lg-1">
          <button className="btn btn-primary w-100 ">
            <small> Save</small>
          </button>
        </div>
      </div>
      <hr />

      {/* Settings Navigation */}

      <div className="row bg-white border-1">
        <div className="col-2">
          <ul className="nav nav-pills flex-column mb-auto ml-1 mt-1 pb-1 pt-1">
            {settingsNavItems.map((item, index) => (
              <li key={index} className="nav-item ml-1 mt-1 pb-1 pt-1">
                <a
                  className="nav-link p-3"
                  onClick={() => handleNavItemClick(item.component)}
                >
                  <span className="nav-icon"> {item.icon}</span>
                  <span className="nav-label d-none ms-1 d-lg-inline p-lg-2 ">
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Settings Main */}
        <div className="col-10 settings-main w-75">{activeComponent}</div>
      </div>
    </div>
  );
}

export default Settings;
