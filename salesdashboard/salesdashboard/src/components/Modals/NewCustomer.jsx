function NewCustomer() {
    return (
        <div
            className="modal fade"
            id="newCustomerModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="newCustomerModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="newCustomerModalLabel">
                            New Customer
                        </h5>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label className="name">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    placeholder="Enter name"
                                />
                            </div>
                            <div className="form-group">
                                <label className="email">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Enter email"
                                />
                            </div>
                            <div className="form-group">
                                <label className="phone">Phone</label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="phone"
                                    placeholder="Enter phone number"
                                />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-dismiss="modal"
                        >
                            Close
                        </button>
                        <button type="button" className="btn btn-primary" id="saveCustomer">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewCustomer;
