const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("CampusConnect Backend Running 🚀");
});

const PORT = process.env.PORT || 5000;
//Register auth route in server.js
app.use("/api/auth", require("./routes/authRoutes"));
//Register test route in server.js
app.use("/api/test", require("./routes/testRoutes"));
//Register attendance route in server.js
app.use("/api/attendance", require("./routes/attendenceRoutes"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
