import data from "../../Data/TotalOrders.json";
import SummaryCard from "./SummaryCard";

import { FcBarChart } from "react-icons/fc";

function TotalOrders() {
  const { totalOrder, percentage } = data;

  return (
    <SummaryCard
      title="Total Orders"
      value={totalOrder}
      percentage={percentage}
      className="total-orders-card"
      icon={<FcBarChart size={50} />}
    />
  );
}

export default TotalOrders;
