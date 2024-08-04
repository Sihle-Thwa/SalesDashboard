import { BsDownload } from "react-icons/bs";
import SCardOne from "../../components/Cards/SCardOne";

function Dashboard() {
  return (
    <div className="sub-header p-0 m-0">
      <div className="row p-1 align-items-center">
        <div className="col-auto">Hello User</div>
        <div className="col-auto">
          <select
            className="form-select form-select-sm"
            aria-label="Default select example"
          >
            <option value="1">Daily</option>
            <option value="2">Weekly</option>
            <option value="3">Monthly</option>
          </select>
        </div>
        <div className="col-auto">
          <button className="btn btn-primary">
            <BsDownload />
            Export
          </button>
        </div>
      </div>
      <hr />

      <SCardOne />


    </div>
  );
}

export default Dashboard;