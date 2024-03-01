import { useDispatch, useSelector } from "react-redux";
import History from "../components/History";
import { useEffect, useState } from "react";
// import useFetch from "../hooks/useFetch";
import calculateTransaction from "../utils/calculateTransaction";
import { BASE_URL } from "../utils/constant";
import axios from "axios";
import { addIncome } from "../redux/slices/incomeSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const selectedIncomeAmount = useSelector((store) => store.income);
  const selectedExpenseAmount = useSelector((store) => store.expense);
  const [transactions, setTransactions] = useState([]);
  const [amount, setAmount] = useState(0);
  const totalAmount = calculateTransaction(
    selectedIncomeAmount.totalIncome,
    selectedExpenseAmount.totalExpense
  );
  console.log("totalAmount=> ", selectedIncomeAmount);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${BASE_URL}get-incomes`);
      const data = res.data;
      console.log(res.data);
      setTransactions(data);
      dispatch(addIncome(res.data));
    };
    fetchData();
  }, []);

  return (
    <div className="w-[100%] m-3 ">
      <h1 className="text-4xl font-bold text-gray-600 mb-4">
        All Transactions
      </h1>
      {/* <div className="grid  grid-cols-5  bg-red-50"> */}
      <div className="grid grid-cols-[repeat(5,1fr)]  gap-8">
        <div className="grid border-red-200 border-2 col-span-3   rounded-lg auto-rows-[minmax(380px,auto)]">
          Box1
        </div>
        <div className=" grid col-span-2 border-red-200 border-2 row-span-1">
          <History />
        </div>

        <div className="grid col-span-1 border-red-200 border-2">Box4 </div>
        <div className="grid col-span-2  w-[100%] border-red-200 border-2 auto-rows-[minmax(180px,auto)]">
          <div className="flex items-center align-middle">
            <h1 className="p-6 m-7 rounded- bg-red-100 text-2xl font-bold">
              {/* {transactions.length >= 1 &&
                transactions.map((item) =>  (t += item.amount)
                )} */}
              Total Amount Remaining:- {totalAmount}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
