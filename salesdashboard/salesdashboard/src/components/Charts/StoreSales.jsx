import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import data from "../../Data/StoreSales.json";
function StoreSales() {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">
          <h5>Sales Per Store</h5>
        </div>
      </div>
      <div className="card-body">
        <ResponsiveContainer width="100%" height={250}>
          <BarChart
            width={500}
            height={250}
            data={data}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="store" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="sales"
              fill="#8884d8"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default StoreSales;
