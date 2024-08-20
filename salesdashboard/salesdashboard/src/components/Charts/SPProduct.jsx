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
    <div className="card">
      <div className="card-header">
        <div className="card-title">
          <h5>Sales Per Product</h5>
        </div>
      </div>
      <div className="card-body">
        <BarChart
          width={500}
          height={250}
          data={data}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
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
    </div>
  );
}

export default SPProduct;
