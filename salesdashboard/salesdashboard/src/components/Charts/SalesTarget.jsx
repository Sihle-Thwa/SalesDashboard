import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import data from "../../Data/SalesVsTarget.json";

function SalesTarget() {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">
          <h5>Sales Vs Target</h5>
        </div>
      </div>
      <div className="card-body">
        <LineChart
          width={500}
          height={250}
          data={data} // access the array of objects within the data object
          margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />

          <YAxis dataKey="target" />
          <Tooltip />
          <Legend />

          <Line type="monotone" dataKey="sales" stroke="#750505" />
          <Line type="monotone" dataKey="target" stroke="#750505" />
        </LineChart>
      </div>
    </div>
  );
}

export default SalesTarget;
