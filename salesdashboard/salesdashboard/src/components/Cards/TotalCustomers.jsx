import SummaryCard from "./SummaryCard";
import data from "../../Data/TotalCustomers.json";
import { FcBusinessman } from "react-icons/fc";

function TotalCustomers() {
  const { totalCustomers, percentage } = data;

  return (
    <SummaryCard
      title="Total Customers"
      value={totalCustomers}
      percentage={percentage}
      className="total-revenue-card"
      icon={<FcBusinessman size={50} />}
    />
  );
}

export default TotalCustomers;
