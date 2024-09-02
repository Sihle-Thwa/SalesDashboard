import PropTypes from "prop-types";
import "./profilemodal.css";
import profileImg from "../../assets/avi.jpg";
import NewCustomer from "./NewCustomer";
function ProfileModal() {
  return (
    <div className="card profile-widget">
      <div className="card-body">
        <div className="card-title justify-content-start align-items-start">
          <div className="row p-2 text-center">
            <div className= "col">
            <img
              src={profileImg}
              alt=""
              width="50"
              height="50"
              className="rounded-circle "
            />
            </div>
            
          </div>
          <div className="row p-2 text-center">
            <span> Siphesihle Mthethwa</span>
            <span className="text-muted">Role and Responsibilities</span>
          </div>
        </div>
        <hr />
        <ul>
          {dropdownItems.map((item) => (
            <li key={item.href}>
              <a className="dropdown-item" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <hr />
        <div className="row">
          <button className="btn btn-warning">Logout</button>
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
    href: <NewCustomer />,
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
