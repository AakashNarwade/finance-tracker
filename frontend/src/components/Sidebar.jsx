import { Link } from "react-router-dom";
import UserImage from "../assets/user.jpg";
import { RxDashboard } from "react-icons/rx";
import { FaArrowUp19 } from "react-icons/fa6";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { LuArrowDown01 } from "react-icons/lu";
//      width: 374px;
// height: 100%;
// background: rgba(252,246,249,0.78);

const Sidebar = () => {
  return (
    <div className=" w-[18%]  rounded-lg bg-[#fcf6f9]  p-3">
      <div className=" flex items-center gap-3 ">
        <img
          className="h-12 w-12 rounded-[50%]  "
          src={UserImage}
          alt="userImg"
        />

        <h1 className="text-xl font-bold">Mike Hussey</h1>
      </div>
      <p className="text-sm font-bold text-left py-3 text-gray-400 ">
        Your Money
      </p>
      <div className="py-4">
        <ul className="text-md font-bold text-gray-600">
          {" "}
          <Link to={"/dashboard"}>
            <div className="flex items-center py-4 gap-3">
              <span>
                <RxDashboard size={20} />
              </span>
              <li className="hover:bg-red-200 p-4 rounded-lg">Dashboard</li>{" "}
            </div>
          </Link>
          <Link to={"/dashboard"}>
            <div className="flex items-center py-4 gap-3">
              <span>
                <FaMoneyBillTrendUp size={20} />
              </span>
              <li className="hover:bg-red-200 p-4 rounded-lg">
                View Transactions
              </li>{" "}
            </div>
          </Link>
          <Link to={"/income"}>
            <div className="flex items-center py-4 gap-3">
              <span>
                <LuArrowDown01 size={20} />
              </span>
              <li className="hover:bg-red-200 p-4 rounded-lg">Income</li>{" "}
            </div>
          </Link>
          <Link to={"/expense"}>
            <div className="flex items-center py-4 gap-3">
              <span>
                <FaArrowUp19 size={20} />
              </span>
              <li className="hover:bg-red-200 p-4  rounded-lg">Expense</li>{" "}
            </div>
          </Link>
        </ul>
      </div>
    </div>
  );
};

// content: "";
// position: absolute;
// left: 0;
// top: 0;
// width: 4px;
// height: 100%;
// background: #222260;
// border-radius: 0 10px 10px 0;

export default Sidebar;
