import { useState } from "react";
// import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
import { addExpense } from "../redux/slices/expenseSlice";
import Form from "../components/Form";
import { clearLocalStorage } from "../utils/clearLocalStorage";
const Expense = () => {
  // const [date]
  const [expense, setExpense] = useState({
    title: "",
    amount: "",
    // date: "",
    description: "",
    category: "",
  });
  const dispatch = useDispatch();

  // const { title, amount, category } = expense;
  const selector = useSelector((store) => store.expense);
  const handleInput = (name) => (e) => {
    setExpense({ ...expense, [name]: e.target.value });
  };
  const submitHandler = (e) => {
    clearLocalStorage();
    e.preventDefault();
    dispatch(addExpense(expense));
    setExpense({
      title: "",
      amount: "",
      date: new Date(),
      description: "",
      category: "",
    });
  };

  return (
    <>
      <Form
        title={"Expense"}
        submitHandler={submitHandler}
        inputHandler={handleInput}
        total={selector && selector?.totalExpense}
        transactionState={expense}
        setTransactionState={setExpense}
      />
    </>
  );
};

export default Expense;
