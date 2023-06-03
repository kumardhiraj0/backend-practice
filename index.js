//post api with mongoose
const express = require("express");
require("./config");
const product = require("./product");

const app = express();
app.use(express.json());
app.post("/create", async (req, res) => {
  let data = new product(req.body);
  let result = await data.save();
  console.log(req.body);
  res.send(result);
});
//get all data from database
app.get("/list", async (req, res) => {
  const data = await product.find();
  res.send(data);
});
//delete data from database
app.delete("/delete/:_id", async (req, res) => {
  console.log(req.params);
  const data = await product.deleteOne(req.params);
  res.send(data);
});

//upadate data in database
app.put("/update/:_id", async (req, res) => {
  const data = await product.updateOne(req.params, { $set: req.body });
  res.send(data);
});

app.listen(5000, () => {
  console.log("running on port 5000"); 
});
