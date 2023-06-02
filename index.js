const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/e-comm");
const productschema = new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    category:String
  });
  //create data in db
  const saveInDB =async ()=>{
  const productsModal = mongoose.model("products",productschema);
  let data = new productsModal({
    name:"realme 2",
    price:459,
    brand:"realme",
    category:"tablet"
  });
  let result = await data.save();
  console.log(result);
}
// saveInDB()
//update in db
const updateInDB =async ()=>{
  const productsModal = mongoose.model("products",productschema);
  const data = await productsModal.updateMany(
    {name:"oppo"},
    {
      $set:{price:9999,name:"oppo 8",brand:"redmi"}
    }
    )
    console.log(data);

}
// updateInDB()

//delete data in db
const deleteInDB =async ()=>{
  const productsModal = mongoose.model("products",productschema);
  const data = await productsModal.deleteMany({name:"v8 engine"});
  console.log(data);
}

// deleteInDB()

//find in db (read from db)
const findInDB =async ()=>{
  const productsModal = mongoose.model("products",productschema);
  const data = await productsModal.find({})
  console.log(data);
}

findInDB();



