const express = require("express");
const connectDB = require("./config/connect");
const errorHandler = require("./middleware/errorMiddleware");

require("dotenv").config();
require("colors");
const app = express();
const cors = require("cors");

app.use(cors());
//connect your database

connectDB();

// Convert data into JSON
app.use(express.json());

// Middleware for encoding
app.use(express.urlencoded({ extended: false }));

app.use("/api/users/", require("./routes/userRoutes"));
app.use("/api/quizzes/", require("./routes/quizRoutes"));
app.use("/api/quizresult/", require("./routes/resultRoutes"));
app.use("/api/courses/", require("./routes/courseRoutes"));
app.use("/api/orders/", require("./routes/orderRoutes"));

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`server started on PORT:  ${process.env.PORT.yellow}`);
});
