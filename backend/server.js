import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import swaggerUi from "swagger-ui-express";

import { PORT, MONGODB_URI } from "./database/config.js";
import Expense from "./routes/expense.route.js";
import swaggerDocument from "./docs/swagger.json" assert { type: "json" };

const app = express();
// Middleware for handling CORS POLICY
app.use(cors());
app.use(express.json());

// Swagger Configuration
// const swaggerDocument = require("./docs/swagger.json");

app.get("/api/", (request, response) => {
   console.log(request);
	return response.status(234).send("Welcome To MERN Stack Tutorial");
});


app.use(Expense);


app.use("/api-docs", swaggerUi.serveWithOptions(), swaggerUi.setup( swaggerDocument));
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
