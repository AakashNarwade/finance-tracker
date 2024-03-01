// import Dashboard from "../pages/Dashboard";
import Sidebar from "./Sidebar";
// import ExpenseImage from "../assets/appimage.png";

import { Outlet } from "react-router-dom";

const MainContent = () => {
  return (
    <div className="flex gap-5 border border-r-2    bg-[#fcf6f9]  h-screen ">
      <Sidebar />
      <Outlet />

      {/* <div className="mx-auto my-auto p-10 m-10  w-[50%] h-auto">
        <h1 className="font-bold text-3xl">
          
          Welcome to Expense Tracker App
          <div>
            <img src={ExpenseImage} alt="img" />
          </div>
        </h1>
      </div> */}
    </div>
  );
};

export default MainContent;
