const express =  require("express");
require('dotenv').config();
const mongoose = require('mongoose');
const userRoute = require("./routes/userRoutes.js");
const productRoute = require("./routes/productRoutes.js");


mongoose.connect(process.env.MONGO_URL)
   .then(() => console.log("MongoDB Connected"))
   .catch(err => console.error("Connection Error: ", err));

const app = express();
const port = 4000;


app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is active!");
});

app.use("/users", userRoute);
app.use("/products", productRoute);
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

//PRODUCTS PART - referenceing