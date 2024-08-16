import data from "../../Data/TotalProducts.json";

function TotalProducts() {
  const { totalProduct, percentage, currentSum, previousSum, decrease } = data;
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">Total Products</h3>
        <div className="row">
          <div className="col">
            <li className="list-group-item">
              <h4>{totalProduct}</h4>
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
              <h5>{currentSum}</h5>
            </li>
          </div>
          <div className="col">
            <li className="list-group-item">
              <h6>{previousSum}</h6>
            </li>
          </div>
        </div>
        <div className="row">
          <p>Orders decreased by: </p>
          <span className="badge badge-pill badge-danger">{decrease}</span>
        </div>
      </div>
    </div>
  );
}

export default TotalProducts;
