const express = require("express");
const IncomeSchema = require("../models/incomeModel");

// const router = express.Router();
const addIncome = async (req, res) => {
  const { title, amount, date, category, description } = req.body;
  const income = IncomeSchema({
    title,
    amount,
    category,
    description,
    date,
  });

  try {
    if (!title || !amount || !date || !category || !description) {
      return res
        .status(400)
        .json({ message: "details are not in proper format or are/is empty" });
    }
    if (amount <= 0) {
      return res.status(400).json({ message: "Amount must be positive " });
    }

    const savedIncome = await income.save();

    res.status(200).json(savedIncome);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
  console.log(req.body);
};

const getIncomes = async (req, res) => {
  //   console.log("callim");
  try {
    const incomes = await IncomeSchema.find().sort({ createdAt: -1 });
    res.status(200).json(incomes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

const deleteIncome = async (req, res) => {
  const { id } = req.params;
  console.log("id=> ", id);
  try {
    const deletedIncome = await IncomeSchema.findByIdAndDelete(id);
    res.status(200).json(deletedIncome);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { addIncome, getIncomes, deleteIncome };
