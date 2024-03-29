import express from "express";
import {Expense} from "../model/expense.model.js"
const router = express.Router();
// const swaggerAutogen = require("swagger-autogen")();

router.get("/api/expenses/", async (req, res) => {
	try {
		const expenses = await Expense.find({});
		res.json(expenses);
	} catch (err) {
		res.json({ message: err });
	}
});

router.post("/api/expenses/", async (req, res) => {
	const expense = new Expense({
		amount: req.body.amount,
		category: req.body.category,
		title: req.body.title,
		description: req.body.description,
	});
	try {
		const savedExpense = await expense.save();
		res.json(savedExpense);
	} catch (err) {
		res.json({ message: err });
	}
});
router.get("/api/expenses/:expenseId", async (req, res) => {
	try {
		const expense = await Expense.findById(req.params.expenseId);
		res.json(expense);
	} catch (err) {
		res.json({ message: err });
	}
});

router.delete("/api/expenses/:expenseId", async (req, res) => {
	try {
		const removedExpense = await Expense.deleteOne({
			_id: req.params.expenseId,
		});
		res.json(removedExpense);
	} catch (err) {
		res.json({ message: err });
	}
});

router.put("/api/expenses/:expenseId", async (req, res) => {
   try {
      const updatedExpense = await Expense.findByIdAndUpdate(
         req.params.expenseId,
         {
            amount: req.body.amount,
            category: req.body.category,
            title: req.body.title,
            description: req.body.description,
            updated_at: Date.now(),
         },
         {new: true}
      );
      res.json(updatedExpense);
   } catch (err) {
      res.json({ message: err });
   }
});

export default router;
