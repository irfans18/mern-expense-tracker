
import swaggerAutogen from "swagger-autogen";

const outputFile = "./docs/swagger.json";
const endpointsFiles = ["./routes/*.js"];

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Mini Blog API",
			description:
				"API endpoints for a mini blog services documented on swagger",
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
// const swaggerSpec = swaggerJsdoc(options);
// function swaggerDocs(app, port) {
// 	// Swagger Page
// 	app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// 	// Documentation in JSON format
// 	app.get("/docs.json", (req, res) => {
// 		res.setHeader("Content-Type", "application/json");
// 		res.send(swaggerSpec);
// 	});
// }
// export default swaggerDocs;
