import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
  name: "expense",
  initialState: {
    expenseData: [],
    totalExpense: 0,
  },
  reducers: {
    addExpense: (state, action) => {
      const amountInNumber = Number(action.payload.amount);
      state.expenseData.push(action.payload);
      state.totalExpense += amountInNumber;
    },
  },
});

export const { addExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
