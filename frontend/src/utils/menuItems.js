import { RxDashboard } from "react-icons/rx";
import { FaArrowUp19 } from "react-icons/fa6";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { LuArrowDown01 } from "react-icons/lu";

export const menuItems = [
  {
    id: 1,
    title: "Dashboard",
    icon: <RxDashboard />,
    link: "/dashboard",
  },
  {
    id: 2,
    title: "View Transactions",
    icon: <FaMoneyBillTrendUp />,
    link: "/transaction",
  },
  {
    id: 3,
    title: "Incomes",
    icon: <LuArrowDown01 />,
    link: "/income",
  },
  {
    id: 4,
    title: "Expenses",
    icon: <FaArrowUp19 />,
    link: "/expense",
  },
];
