import {
  LineChart,
  Line,
  Legend,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import data from "../../Data/Sales.json";

function SSales() {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">
          <h5> Total Sales</h5>
        </div>
      </div>
      <div className="card-body">
        <LineChart
          width={500}
          height={250}
          data={data} // access the array of objects within the data object
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis dataKey="TotalSales" />
          <Tooltip />
          <Legend />

          <Line type="monotone" dataKey="TotalSales" stroke="#06c" />
        </LineChart>
      </div>
    </div>
  );
}

export default SSales;
