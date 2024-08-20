
import PropTypes from "prop-types";

const NotificationsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="modal fade"
      tabIndex="-1"
      id="NotificationModal"
      role="dialog"
      aria-labelledby="NotificationModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Notifications</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            >
              ×
            </button>
          </div>
          <div className="modal-body">
            <ul className="list-unstyled">
              <li>
                <p>New message from John Doe</p>
                <small>10 minutes ago</small>
              </li>
              <li>
                <p>New comment on your post</p>
                <small>1 hour ago</small>
              </li>
              <li>
                <p>You have a new task assigned</p>
                <small>2 hours ago</small>
              </li>
            </ul>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

NotificationsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default NotificationsModal;