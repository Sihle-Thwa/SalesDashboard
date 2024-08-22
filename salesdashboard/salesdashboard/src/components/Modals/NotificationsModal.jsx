function NotificationsModal(props) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title  d-flex">Notifications</div>
        <button
          className="btn btn-close ms-auto p-1 justify-content-end"
          onClick={props.onClose}
        />
      </div>
      <div className="card-body">
        <div className="list-group">
          <div className="list-group-item">
            <p>New Message from John Doe</p>
            <small>10 Min Ago</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationsModal;
