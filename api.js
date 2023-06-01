const express = require("express");
const dbConnect = require("./mongoconnect");
//for deleting through id
const mongodb = require('mongodb');

const app = express();
// Parse JSON request bodies
app.use(express.json());

/*//with the help of body parser also we can parse body data for example
const bodyParser = require('body-parser');
// Parse JSON request bodies
app.use(bodyParser.json());
// Parse URL-encoded form request bodies
app.use(bodyParser.urlencoded({ extended: true }));*/

//get method
app.get("/", async (req, res) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  //console.log(data);
  res.send(data);
});
//post method
app.post("/", async (req, res) => {
  //console.log(req.body)
  const data = await dbConnect();
  //single data insert
  //let result = await data.insertOne(req.body)
  //multiple data inserted
  let result = await data.insertMany(req.body);

  res.send(result);
});

//put method
// app.put("/", async (req, res) => {
//   //console.log(req.body);
//   const data = await dbConnect();
//   let result = await data.updateMany(
//     //{name:"nothing"},or
//     { name: req.body.name },
//     { $set: req.body }
//   );

//   res.send({ result: "updated" });
// });
//delete method
app.delete('/:id',async(req,res)=>{
    console.log(req.params.id);
    const data = await dbConnect();
    const result = await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)});
    res.send(result);
})

//if you want to update name
app.put('/:id',async(req,res)=>{
    //console.log(req.body);
    const data = await dbConnect();
    let result = await data.updateOne(
        //{name:"nothing"},or
        {_id:new mongodb.ObjectId(req.params.id)},
        {$set:req.body}
    )

    res.send({result})

})

app.listen(3000, () => {
  console.log("server running on 3000 port");
});
