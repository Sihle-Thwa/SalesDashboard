import data from "../../Data/TotalProducts.json";
import SummaryCard from "./SummaryCard";

function TotalProducts() {
  const { totalProduct, percentage } = data;
  return (
    <SummaryCard
      title="Total Products"
      value={totalProduct}
      percentage={percentage}
      className="total-products-card"
    />
  );
}

export default TotalProducts;
