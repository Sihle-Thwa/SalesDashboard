import NewCustomer from "../../components/Modals/NewCustomer";
import CustomersTable from "../../components/Tables/CustomersTable";

function Customers() {
    return (
        <>
            <div className="row sub-header m-0 p-1 align-items-center">
                <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                    Customers
                </div>
                <div className="col-sm-1 col-md-8 col-lg-2">
                    Search Filter

                </div>
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


            <CustomersTable />
        </>
    );
}

export default Customers;
