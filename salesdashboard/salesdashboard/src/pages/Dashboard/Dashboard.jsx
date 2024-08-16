import { BsDownload } from "react-icons/bs";
import SSales from "../../components/Charts/SSales";
import TotalOrders from "../../components/Cards/TotalOrders";
import TotalProducts from "../../components/Cards/TotalProducts";
import TotalRevenue from "../../components/Cards/TotalRevenue";
import SPProduct from "../../components/Charts/SPProduct";

function Dashboard() {
  return (
    <>
      <div className="row sub-header m-0 p-1 align-items-center">
        <h3 className="col-sm-1 col-md-8 col-lg-2 p-1">Hello Siphesihle</h3>
        <div className="row justify-content-end">
          <div className="col-sm-1 col-md-8 col-lg-2 ">
            <select
              className="form-select form-select-sm"
              aria-label="Default select example"
            >
              <option value="1">Daily</option>
              <option value="2">Weekly</option>
              <option value="3">Monthly</option>
            </select>
          </div>
          <div className="col-sm-1 col-md-1 col-lg-1">
            <button className="btn btn-primary">
              <BsDownload />
            </button>
          </div>
        </div>
      </div>
      <hr />

      <div className="row p-2 m-0">
        <div className="col-4">
          <TotalOrders />
        </div>
        <div className="col-4">
          <TotalProducts />
        </div>
        <div className="col-4">
          <TotalRevenue />
        </div>

        <div className="row">
          <div className="col">
            <SSales />
          </div>
          <div className="col">
            <SPProduct />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
