import data from "../../Data/TotalOrders.json";
import SummaryCard from "./SummaryCard";
import "./charts.css";
function TotalOrders() {
  const { totalOrder, percentage } = data;

  return (
    <SummaryCard
      title="Total Orders"
      value={totalOrder}
      percentage={percentage}
      className="total-orders-card"
    />
  );
}

export default TotalOrders;
