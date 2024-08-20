import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,  } from 'recharts';
import data from '../../Data/SalesVsTarget.json';

function SalesTarget() {
  return (<LineChart
    width={600}
    height={300}
    data={data} // access the array of objects within the data object
    margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
    padding={0}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="month" />
    
    <YAxis dataKey="target" />
    <Tooltip />
    <Legend />

    <Line type="monotone" dataKey="sales" stroke="#750505" />
    <Line type="monotone" dataKey="target" stroke="#750505" />
    
  </LineChart>
  )
}

export default SalesTarget