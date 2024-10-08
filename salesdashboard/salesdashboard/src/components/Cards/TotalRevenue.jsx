import { FcSalesPerformance } from "react-icons/fc";
import data from "../../Data/TotalRevenue.json";
import SummaryCard from "./SummaryCard";

function TotalRevenue() {
  const { totalRevenue, percentage } = data;

  return (
    <SummaryCard
      title="Total Revenue"
      value={totalRevenue}
      percentage={percentage}
      className="total-revenue-card"
      icon={<FcSalesPerformance size={50} />}
    />
  );
}

export default TotalRevenue;
