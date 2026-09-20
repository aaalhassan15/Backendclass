const express =  require("express");
const mongoose = require('mongoose');
const userRoute = require("./routes/userRoutes.js");
const productRoute = require("./routes/productRoutes.js");

const compass_string = "mongodb://localhost:27017/myfirstdb"
const atlas_string = "mongodb+srv://alhassanabdulaziz330_db_user:alhassanabdulaziz330_db_user@cluster0.zwgv551.mongodb.net/?appName=Cluster0"

mongoose.connect(compass_string)
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