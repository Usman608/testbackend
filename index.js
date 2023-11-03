require("dotenv").config();
const express = require("express");
const db = require("./models");
const bodyParser = require("body-parser");
const cors = require("cors");
const authenticationRoutes=require("./routes/authentication");
const appointmentRoutes=require("./routes/appointment")
const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", authenticationRoutes);
app.use("/api",appointmentRoutes);

const PORT = process.env.PORT || 4000;
db.sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Database synced");
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
