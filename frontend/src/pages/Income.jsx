import { useEffect, useState } from "react";
// import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
// eslint-disable-next-line no-unused-vars
import { addIncome, getIncome } from "../redux/slices/incomeSlice";
import Form from "../components/Form";
import { BASE_URL } from "../utils/constant";
import axios from "axios";
import { clearLocalStorage } from "../utils/clearLocalStorage";

const Income = () => {
  const [income, setIncome] = useState({
    title: "",
    amount: "",
    date: new Date(),
    description: "",
    category: "",
  });

  const dispatch = useDispatch();

  const selector = useSelector((store) => store.income);

  useEffect(() => {
    const fetchData = async () => {
      clearLocalStorage();
      const res = await axios.get(`${BASE_URL}get-incomes`);
      const data = res.data;
      console.log(res.data);
      setIncome(data);
      dispatch(addIncome(income));
    };
    fetchData();
  }, []);

  const handleInput = (name) => (e) => {
    setIncome({ ...income, [name]: e.target.value });
  };
  // add income
  const addIncomeToBackend = async () => {
    try {
      const response = await axios.post(`${BASE_URL}add-income`, income);
      const amount = response?.data;
      dispatch(addIncome(amount));
    } catch (error) {
      console.log(error);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      !(
        income.title ||
        income.amount ||
        income.description ||
        income.data ||
        income.category
      )
    )
      return;
    addIncomeToBackend();
    // getIncomeFromBackend();
    setIncome({
      title: "",
      amount: "",
      description: "",
      date: new Date(),
      category: "",
    });

    // setIncome;
  };

  return (
    <>
      <Form
        title={"Income"}
        submitHandler={submitHandler}
        inputHandler={handleInput}
        total={selector && selector?.totalIncome}
        transactionState={income}
        setTransactionState={setIncome}
      />
    </>
  );
};

export default Income;
