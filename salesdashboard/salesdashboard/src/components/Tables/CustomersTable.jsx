import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function CustomersTable() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data/customers.json")
      .then((response) => response.json())
      .then((data) => {
        console.log("Received data:", data);
        setCustomers(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Customer ID</th>
          <th>Name</th>
          <th>Total Spent</th>
          <th>Last Purchased Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer) => (
          <tr key={customer.CustomerID}>
            <td>{customer.CustomerID}</td>
            <td>{customer.Name}</td>
            <td>{customer.TotalSpent}</td>
            <td>{customer.LastPurchasedDate}</td>
            <td>
              <button
                className="btn btn-primary btn-sm"
                data-toggle="tooltip"
                title="View Details"
              >
                <i className="fas fa-eye"></i>
              </button>
              <button
                className="btn btn-secondary btn-sm"
                data-toggle="tooltip"
                title="Edit Customer"
              >
                <i className="fas fa-pencil-alt"></i>
              </button>
              <button
                className="btn btn-danger btn-sm"
                data-toggle="tooltip"
                title="Delete Customer"
              >
                <i className="fas fa-trash-alt"></i>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CustomersTable;
