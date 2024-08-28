import { useState } from "react";
import customerData from "./Customers.json";
import { BsEye, BsPencil, BsTrash } from "react-icons/bs";

function CustomersTable() {
  const [customers] = useState(customerData);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");



  const handleEntriesPerPage = (event) => {
    setEntriesPerPage(parseInt(event.target.value, 10));
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase())
  };

  //#region Search Query

  //const filteredCustomers = customers.filter((customer) => {
    //const customerName = customer.Name.toLowerCase();
    //const customerTotalSpent = customer.TotalSpent.toString();
    //const customerLastPurchasedDate = customer.LastPurchasedDate.toLowerCase();

    //return (
      //customerName.includes(searchQuery) //|| customerTotalSpent(searchQuery) || customerLastPurchasedDate(searchQuery)
    //);

  //})

  //#endregion Search Query

  const paginatedCustomers = customers.slice(0, entriesPerPage);

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">
          <h5>Customer List</h5>
        </div>
        <div className=" row card-tools">
          <div className="col">
            <select value={entriesPerPage} onChange={handleEntriesPerPage}>
              <option value="5">5 per page</option>
              <option value="10">10 per page</option>
              <option value="15">15 per page</option>
              <option value="20">20 per page</option>
            </select>
          </div>

          <div className="col input-group">
            <input
              type="search"
              className="form-control"
              placeholder="Search "
              aria-label="Search.."
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
        </div>
      </div>
      <div className="card-body">
        <table className="table table-striped table-bordered table-responsive-sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Total Spent (R)</th>
              <th>Last Purchased Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {paginatedCustomers.map((customer) => (
              <tr key={customer.CustomerID}>
                <td>{customer.Name}</td>
                <td>{customer.TotalSpent}</td>
                <td>{customer.LastPurchasedDate}</td>
                <td>
                  <button
                    className="btn btn-primary btn-sm"
                    data-toggle="tooltip"
                    title="View Details"
                  >
                    <BsEye />
                  </button>
                  <button
                    className="btn btn-secondary btn-sm"
                    data-toggle="tooltip"
                    title="Edit Customer"
                  >
                    <BsPencil />
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    data-toggle="tooltip"
                    title="Delete Customer"
                  >
                    <BsTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CustomersTable;
