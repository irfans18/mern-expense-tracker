
import swaggerAutogen from "swagger-autogen";

const outputFile = "./docs/swagger.json";
const endpointsFiles = ["./routes/*.js"];

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Expense Tracker API",
			description:
				"API endpoints for a Expense Tracker services documented on swagger",
			contact: {
				name: "Irfan Shiddiq",
				email: "irfams99@gmail.com",
				url: "https://github.com/irfans18/mern-expense-tracker",
			},
			version: "1.0.0",
		},
		servers: [
			{
				url: "http://localhost:8080/",
				description: "Local server",
			}
		],
	},
	// looks for configuration in specified directories
	apis: ["./routes/*.js"],
};

swaggerAutogen(outputFile, endpointsFiles, options);
