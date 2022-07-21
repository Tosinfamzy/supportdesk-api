const express = require("express");
const { errorHandler } = require("./middleware/errorHandler");
const colors = require("colors");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yml");

const PORT = process.env.PORT || 5000;

// connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api-docs/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api/users/", require("./routes/userRoutes"));
app.use("/api/tickets/", require("./routes/ticketRoutes"));
app.use(errorHandler);

app.listen(PORT, () => console.log(`server running on ${PORT}`));
