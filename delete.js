const dbConnect = require("./mongoconnect");
const deleteData = async ()=>{
    const data = await dbConnect();
    //delete single records
    //let result = await data.deleteOne({name:"realme2"});
    //delete more than one who have same name
   let result1 = await data.deleteMany({name:"iphone"});
   if(result1.acknowledged){
    console.log("deleted data");
   }
}
deleteData();