import data from "../../Data/TotalProducts.json";

function TotalProducts() {
  const { totalProduct, percentage } = data;
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">
          <h4>Total Products</h4>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col">
            <li className="list-group-item">
              <h5>{totalProduct}</h5>
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

export default TotalProducts;
