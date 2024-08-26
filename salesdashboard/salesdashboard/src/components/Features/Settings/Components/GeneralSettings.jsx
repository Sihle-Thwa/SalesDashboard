function GeneralSettings() {
  return (
    <div className="container-wrapper vh-75">
      <div className="row pt-4">
        <h3>General</h3>
        <p className="text text-muted">Update your profile</p>
      </div>
      <hr />
      <div className="row">
        <h5>Personal Details</h5>
      </div>
      <div className="row ">
        <div className="col p-2 ">
          <img
            src="https://www.flaticon.com/free-icon/profile_3135715?term=user+avatar&related_id=3135715"
            alt=""
            width="75"
            height="75"
            className="rounded-circle me-2"
          />
        </div>
        <div className="col p-2 md-6 col-lg-2">
          <button className="btn btn-primary w-100  ">
            <small> Upload new</small>
          </button>
        </div>
        <div className="col p-2 md-6 col-lg-2">
          <button className="btn btn-light w-100 ">
            <small>Delete</small>
          </button>
        </div>
      </div>
      <div className="row g-3 pt-4">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Full name"
            aria-label="Full name"
          />
        </div>
        <div className="col-md-6">
          <input
            type="email"
            className="form-control"
            placeholder="Email Address"
            aria-label="Email Address"
          />
        </div>
      </div>
      <div className="row g-3 pt-4">
        <div className="col-md-6">
          <input
            type="number"
            className="form-control"
            placeholder="Cell Number"
            aria-label="Cell Number"
          />
        </div>
        <div className="col-md-6">
          <input
            type="number"
            className="form-control"
            placeholder="Work Number"
            aria-label="Work Number"
          />
        </div>
      </div>
      <hr />
      <div className="row pt-4">
        <h5>Residential Address</h5>
      </div>
      <div className="row">
        <div className="col-12 pt-2">
          <label htmlFor="inputAddress" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>
        <div className="col-12 pt-2">
          <label htmlFor="inputAddress2" className="form-label">
            Address 2
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
          />
        </div>
        <div className="col-md-6 pt-2">
          <label htmlFor="inputCity" className="form-label">
            City
          </label>
          <input type="text" className="form-control" id="inputCity" />
        </div>
        <div className="col-md-4 pt-2">
          <label htmlFor="inputState" className="form-label">
            Province
          </label>
          <input type="text" className="form-control" id="inputProvince" />
        </div>
        <div className="col-md-2 pt-2">
          <label htmlFor="inputZip" className="form-label">
            Zip Code
          </label>
          <input type="text" className="form-control" id="inputZip" />
        </div>
      </div>
      <hr />
    </div>
  );
}

export default GeneralSettings;
