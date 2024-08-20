import data from "../../Data/TotalRevenue.json";

function TotalRevenue() {
  const { totalRevenue, percentage } = data;

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">
          <h4>Total Revenue</h4>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col">
            <li className="list-group-item">
              <h5>R{totalRevenue}</h5>
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
      </div>
    </div>
  );
}

export default TotalRevenue;
