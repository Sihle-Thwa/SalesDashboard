import NewCustomer from "../../components/Modals/NewCustomer";
import CustomersTable from "../../components/Tables/CustomersTable";

import DateRangeComponent from "../../components/DateRangeComponent";
function Customers() {
    return (
        <>
            <div className="row sub-header m-0 p-1 align-items-center">
                <div className="col-md-2 col-sm-1 col-lg-2">
                    <div className="input-group">
                        <input type="search" className="form-control" placeholder="Search" aria-label="Search.." />
                        <span className="input-group-btn">
                            <i><img src="../../assets/icons/Search.svg" sizes="24px" /></i>
                        </span>
                    </div>

                </div>
                <DateRangeComponent />
                <div className="col-sm-2 col-md-2 col-lg-2">
                    <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#newCustomerModal"
                    >
                        Add New Customer
                    </button>
                    <NewCustomer />
                </div>



            </div>


            <CustomersTable />
        </>
    );
}

export default Customers;
