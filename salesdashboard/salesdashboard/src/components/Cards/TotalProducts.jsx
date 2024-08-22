import { FcDatabase } from "react-icons/fc";
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
      icon={<FcDatabase size={50} />}
    />
  );
}

export default TotalProducts;
