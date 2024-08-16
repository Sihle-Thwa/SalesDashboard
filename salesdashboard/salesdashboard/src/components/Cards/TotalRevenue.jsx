import data from "../../Data/TotalRevenue.json";

function TotalRevenue() {
  const { totalRevenue, percentage, currentProfit, previousProfit, increase } =
    data;

  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">Total Revenue</h3>
        <div className="row">
          <div className="col">
            <li className="list-group-item">
              <h4>{totalRevenue}</h4>
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
              <h5>{currentProfit}</h5>
            </li>
          </div>
          <div className="col">
            <li className="list-group-item">
              <h6>{previousProfit}</h6>
            </li>
          </div>
        </div>
        <div className="row">
          <p>Orders decreased by: </p>
          <span className="badge badge-pill badge-success">{increase}</span>
        </div>
      </div>
    </div>
  );
}

export default TotalRevenue;
