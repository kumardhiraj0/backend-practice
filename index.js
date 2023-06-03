//post api with mongoose
const express = require("express");
require("./config");
const product = require("./product");

const app = express();
app.use(express.json());
//search using regex
app.get("/search/:key",async(req,res)=>{
  console.log(req.params.key);
  const data = await product.find({
    "$or":[
      {"name":{$regex:req.params.key}},
      {"brand":{$regex:req.params.key}},
      {"category":{$regex:req.params.key}},
    ]
  })
  
  res.send(data);
})

app.listen("5000",()=>{
  console.log("port running on 5000");
})
