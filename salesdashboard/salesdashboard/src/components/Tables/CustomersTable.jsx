import { useState, useEffect } from "react";
import jsonSchema from "jsonschema";

const customerSchema = {
  type: "array",
  items: {
    type: "object",
    properties: {
      CustomerID: { type: "integer" },
      Name: { type: "string" },
      TotalSpent: { type: "number" },
      LastPurchasedDate: { type: "string", format: "date" },
    },
    required: ["CustomerID", "Name", "TotalSpent", "LastPurchasedDate"],
  },
};

function validateCustomers(data) {
  try {
    const result = jsonSchema.validate(data, customerSchema);
    if (result.valid) {
      return data;
    } else {
      console.error("Invalid customer data:", result.errors);
      return [];
    }
  } catch (error) {
    console.error("Error validating customer data:", error);
    return [];
  }
}

function CustomersTable() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch("./Customers.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        const validCustomers = validateCustomers(data);
        setCustomers(validCustomers);
      });
  }, []);

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">
          <h5>Customer List</h5>
        </div>
      </div>
      <div className="card-body">
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
      </div>
    </div>
  );
}

export default CustomersTable;
