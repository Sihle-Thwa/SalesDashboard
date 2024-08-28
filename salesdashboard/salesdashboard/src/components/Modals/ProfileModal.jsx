
import PropTypes from "prop-types";

function ProfileModal(props) {
  return (
    <div className="card">
    <div className="card-body">
      <h5 className="card-title">Profile Menu</h5>
      <button
          className="btn btn-close ms-auto p-1 justify-content-end"
          onClick={props.onClose}
        />
      <ul>
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
  )
}

ProfileModal.propTypes = {
    onClose: PropTypes.func.isRequired,
  };
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
export default ProfileModal