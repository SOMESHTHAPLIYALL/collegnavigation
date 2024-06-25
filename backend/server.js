const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/UserRoutes");
const eventRoutes = require("./routes/EventRoutes");
const blogRoutes = require("./routes/BlogRoutes");

const connectDB = require("./config/db");
const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/user", userRoutes);
app.use("/events", eventRoutes);
app.use("/blogs", blogRoutes);

app.listen(8000, () => {
  console.log("Server Is Running");
});
