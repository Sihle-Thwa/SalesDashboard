import data from "../../Data/TotalOrders.json";

function TotalOrders() {
  const { totalOrder, percentage, currentValue, previousValue, increase } =
    data;

  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">Total Orders</h3>
        <div className="row">
          <div className="col">
            <li className="list-group-item">
              <h4>{totalOrder}</h4>
            </li>
          </div>
          <div className="col">
            <li className="list-group-item">
              <span className="badge badge-pill badge-success">
                {percentage}%
              </span>
            </li>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <li className="list-group-item">
              <h5>{currentValue}</h5>
            </li>
          </div>
          <div className="col">
            <li className="list-group-item">
              <h6>{previousValue}</h6>
            </li>
          </div>
        </div>
        <div className="row">
          <p>Orders increased by: </p>
          <span className="badge badge-pill badge-success">{increase}</span>
        </div>
      </div>
    </div>
  );
}

export default TotalOrders;
