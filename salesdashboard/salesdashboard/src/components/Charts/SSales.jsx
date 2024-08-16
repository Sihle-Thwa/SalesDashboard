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
    <div className="chart">
      <div className="chart-heading">
        <h2>Sales</h2>
      </div>
      <LineChart
        width={600}
        height={300}
        data={data} // access the array of objects within the data object
        margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
        padding={0}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis dataKey="TotalSales" />
        <Tooltip />
        <Legend />

        <Line type="monotone" dataKey="TotalSales" stroke="#06c" />
      </LineChart>
    </div>
  );
}

export default SSales;
