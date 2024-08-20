import NewCustomer from "../../components/Modals/NewCustomer";
import CustomersTable from "../../components/Tables/CustomersTable";

import DateRangeComponent from "../../components/DateRangeComponent";
function Customers() {
  return (
    <>
      <div className="row row  mt-2 mb-1 p-1 ">
        <div className="col">
          <div className="input-group">
            <input
              type="search"
              className="form-control"
              placeholder="Search"
              aria-label="Search.."
            />
            <i className="bi bi-search"></i>
          </div>
        </div>
        <div className="col">
          <DateRangeComponent />
        </div>
        <div className="col">
          <button
            type="button"
            className="btn btn-primary btn-sm"
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
