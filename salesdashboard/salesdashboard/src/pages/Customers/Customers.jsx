import NewCustomer from "../../components/Modals/NewCustomer";
import CustomersTable from "../../components/Tables/CustomersTable";

import DateRangeComponent from "../../components/DateRangeComponent";
function Customers() {
  return (
    <>
      <div className="row row mt-2 mb-1 p-1  ">
        <div className="col-md-6">
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
        <div className="col-md-6">
          <DateRangeComponent />
        </div>
        <div className="col-md-6">
          
        </div>
      </div>

      <CustomersTable />
    </>
  );
}

export default Customers;
