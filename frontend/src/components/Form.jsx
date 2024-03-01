/* eslint-disable react/prop-types */
// import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
const Form = (props) => {
  const {
    transactionState,
    title,
    submitHandler,
    inputHandler,
    total,
    setTransactionState,
  } = props;
  return (
    <div className="w-[60%] ">
      <h1 className=" text-4xl font-bold text-gray-600 mb-4 text-center">
        {title}
      </h1>
      <div
        className={` ${
          title === "Expense" ? "text-red-700" : " text-green-700"
        }  h-24 text-center border-red-200 rounded-full border-2 text-3xl flex justify-center items-center font-bold `}
      >
        {`$ ${total}`}
      </div>
      <div className="my-3 ">
        <form onSubmit={submitHandler} className="w-full">
          <input
            className="w-[60%] p-4 m-5 text-gray-600 bg-red-100 placeholder:text-xl font-bold"
            type="text"
            placeholder={`Enter ${title} Title `}
            onChange={inputHandler("title")}
            value={transactionState.title}
          />
          <input
            className="w-[60%] p-4 m-5 text-gray-600 bg-red-100 placeholder:text-xl font-bold"
            type="text"
            placeholder={`Enter ${title} Amount`}
            onChange={inputHandler("amount")}
            value={transactionState.amount}
          />

          <div className="flex gap-5 ">
            <div className="">
              <select
                className="m-5 p-4 bg-red-100 text-xl font-bold rounded-lg  text-gray-400"
                required
                value={transactionState.category}
                name="category"
                id="category"
                onChange={inputHandler("category")}
              >
                <option
                  className="m-4 p-4 bg-red-100 text-xl font-bold rounded-lg text-gray-400"
                  value=""
                  disabled
                >
                  Select Category
                </option>
                <option value="education">Education</option>
                <option value="groceries">Groceries</option>
                <option value="health">Health</option>
                <option value="subscriptions">Subscriptions</option>
                <option value="takeaways">Takeaways</option>
                <option value="clothing">Clothing</option>
                <option value="travelling">Travelling</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="w-[30%] p-4 m-5 text-gray-600 bg-red-100">
              <DatePicker
                className="bg-[#fcf6f9]"
                selected={transactionState.date}
                dateFormat={"dd/MM/yyyy"}
                onChange={(date) => {
                  setTransactionState({ ...transactionState, date });
                }}
              />
            </div>
          </div>
          <div className=" bg-[#fcf6f9] ">
            <textarea
              className="border p-4 m-5 outline-red-400 w-[60%] border-red-200 rounded-xl bg-[#fcf6f9]"
              name="description"
              value={transactionState.description}
              placeholder="Add A Reference"
              id="description"
              cols="30"
              rows="4"
              onChange={inputHandler("description")}
            ></textarea>
          </div>

          <button
            className="p-4 m-5 color white bg-red-200 rounded-lg text-xl font-bold"
            type="submit"
          >
            Submit{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
