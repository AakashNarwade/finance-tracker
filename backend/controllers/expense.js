const express = require("express");
const expenseSchema = require("../models/expenseModel.js");

// const router = express.Router();
const addExpense = async (req, res) => {
  const { title, amount, date, category, description } = req.body;
  const expense = expenseSchema({
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
    if (amount <= 0 || typeof amount != "number") {
      return res.status(400).json({ message: "Amount must be positive " });
    }

    await expense.save();
    res.status(200).json({ message: "Info logged successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const getExpenses = async (req, res) => {
  try {
    const expenses = await expenseSchema.find().sort({ createdAt: -1 });
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const deleteExpense = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedexpense = await expenseSchema.findByIdAndDelete(id);
    res.status(200).json({ message: "deleted expense" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { addExpense, getExpenses, deleteExpense };
