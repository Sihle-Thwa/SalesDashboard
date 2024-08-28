import PropTypes from "prop-types";
import './profilemodal.css'
function ProfileModal(props) {
  return (
    <div className="card profile-widget">
      <div className="card-header">
        <div className="card-title row justify-content-start align-items-start">
          <div className="col">
            <img
              src=""
              alt=""
              width="24"
              height="24"
              className="rounded-circle me-2"
            />
          </div>
          <div className="col">
            <span> Siphesihle Mthethwa</span>
            <span className="text-muted">Role and Responsibilities</span>
          </div>
          <div className="col">
          <button
            className="btn btn-close ms-auto p-1 justify-content-end"
            onClick={props.onClose}
          />
        </div>
        </div>
        
      </div>
      <div className="card-body">
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
      <div className="card-footer">
        <div className="col">
            <button className="btn btn-dark">Logout</button>
        </div>
      </div>
    </div>
  );
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
];
export default ProfileModal;
