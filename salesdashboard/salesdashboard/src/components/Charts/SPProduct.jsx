import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import data from "../../Data/SalesPerProduct.json";

function SPProduct() {
  return (
    <div className="chart">
      <div className="chart-heading">
        <h2>Sales Per Product</h2>
      </div>
      <BarChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="ProductA" stackId="a" fill="#06c" />
        <Bar dataKey="ProductB" stackId="a" fill="#4cb140" />
        <Bar dataKey="ProductC" stackId="a" fill="#009596" />
        <Bar dataKey="ProductD" stackId="a" fill="#5752d1" />
      </BarChart>
    </div>
  );
}

export default SPProduct;
