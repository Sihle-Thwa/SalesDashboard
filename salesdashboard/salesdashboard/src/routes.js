import Dashboard from "./pages/Dashboard/Dashboard";
import Product from "./pages/Product/Product";
import ReportPage from "./pages/ReportPage/ReportPage";
import Customers from "./pages/Customers/Customers";
import Settings from "./pages/Settings/Settings";

export const routes = [
  {
    path: "/dashboard",
    component: Dashboard,
  },
  {
    path: "/product",
    component: Product,
  },
  {
    path: "/report",
    component: ReportPage,
  },
  {
    path: "/customers",
    component: Customers,
  },
  {
    path: "/settings",
    component: Settings,
  },
];
