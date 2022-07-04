const express = require("express");
const { errorHandler } = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users/", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(PORT, () => console.log(`server running on ${PORT}`));
