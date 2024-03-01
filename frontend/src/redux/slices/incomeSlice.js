import { createSlice } from "@reduxjs/toolkit";

const incomeSlice = createSlice({
  name: "income",
  initialState: {
    incomeData: [],
    totalIncome: 0,
  },
  reducers: {
    addIncome: (state, action) => {
      state.incomeData.push(action.payload);
      const temp = action.payload;
      state.totalIncome = temp.reduce((acc, curr) => acc + curr.amount, 0);
    },
    getIncome: (state) => {
      return state;
    },
  },
});

export const { addIncome, getIncome } = incomeSlice.actions;
export default incomeSlice.reducer;
