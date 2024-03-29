import express from "express";
import {Expense} from "../model/expense.model.js"

const router = express.Router();

router.get("/", async (req, res) => {
	try {
		const expenses = await Expense.find({});
		res.json(expenses);
	} catch (err) {
		res.json({ message: err });
	}
});

router.post("/", async (req, res) => {
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

router.get("/:expenseId", async (req, res) => {
	try {
		const expense = await Expense.findById(req.params.expenseId);
		res.json(expense);
	} catch (err) {
		res.json({ message: err });
	}
});

router.delete("/:expenseId", async (req, res) => {
	try {
		const removedExpense = await Expense.deleteOne({
			_id: req.params.expenseId,
		});
		res.json(removedExpense);
	} catch (err) {
		res.json({ message: err });
	}
});

router.put("/:expenseId", async (req, res) => {
	try {
		const updatedExpense = await Expense.findByIdAndUpdate(
			req.params.expenseId,
			req.body,
			{ new: true }
		);
		res.json(updatedExpense);
	} catch (err) {
		res.json({ message: err });
	}
});

export default router;
