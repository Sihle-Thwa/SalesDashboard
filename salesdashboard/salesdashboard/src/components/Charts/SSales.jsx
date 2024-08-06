import {
  LineChart,
  Line,
  Legend,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  {
    day: "Monday",
    TotalSales: 4000,
  
  },
  {
    day: "Tuesday",
    TotalSales: 3000,
    
  },
  {
    day: "Wednesday",
    TotalSales: 2000,
   
  },
  {
    day: "Thursday",
    TotalSales: 2780,
    
  },
  {
    day: "Friday",
    TotalSales: 1890,
    
  },
  {
    day: "Saturday",
    TotalSales: 2390,

  },
  {
    day: "Sunday",
    TotalSales: 2390,

  },
];

function SSales() {
  return (
    <LineChart
      width={730}
      height={250}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />
      <Legend />
    
      <Line type="monotone" dataKey="TotalSales" stroke="#82ca9d" />
    </LineChart>
  );
}

export default SSales;
