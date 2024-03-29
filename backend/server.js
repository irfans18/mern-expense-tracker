import express from "express";
import mongoose from "mongoose";
import { PORT, MONGODB_URI } from "./database/config.js";
import Expense from "./routes/expense.route.js";
import cors from "cors";

const app = express();
// Middleware for handling CORS POLICY
app.use(cors());


app.get("api/", (request, response) => {
	console.log(request);
	return response.status(234).send("Welcome To MERN Stack Tutorial");
});

app.use("api/expenses", Expense);

mongoose
	.connect(MONGODB_URI)
	.then(() => {
		console.log("App connected to database");
		app.listen(PORT, () => {
			console.log(`App is listening to port: ${PORT}`);
		});
	})
	.catch((err) => {
		console.log(err);
	});

// app.listen(port, () => console.log(`Example app listening on port ${port}!`));
