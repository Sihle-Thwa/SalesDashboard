import { BsDownload } from "react-icons/bs";
import SCardOne from "../../components/Cards/SCardOne";
import SSales from "../../components/Charts/SSales";

function Dashboard() {
  return (
    <>
      <div className="row sub-header m-0 p-1 align-items-center">

        <div className="col-sm-1 col-md-8 col-lg-2 p-1">Hello User</div>
        <div className="row justify-content-end">

          <div className="col-sm-1 col-md-8 col-lg-2 ">
            <select
              className="form-select form-select-md"
              aria-label="Default select example"
            >
              <option value="1">Daily</option>
              <option value="2">Weekly</option>
              <option value="3">Monthly</option>
            </select>
          </div>
          <div className="col-sm-1 col-md-8 col-lg-2">
            <button className="btn btn-primary">
              <BsDownload />
              Export
            </button>
          </div>
        </div>

      </div>
      <hr />

      <div className="row p-2 m-0">
        <div className="col-4">
          <SCardOne />
        </div>
        <div className="col-4">
          <SCardOne />
        </div>
        <div className="col-4">
          <SCardOne />
        </div>

        <div className="row">
          
            <SSales />
          
        </div>
      </div>
    </>
  );
}

export default Dashboard;
