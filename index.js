//read data from mongodb, make file or db connection
//connect Node with MongoDB
const dbConnect = require("./mongoconnect");
//1st method promise handle
// dbConnect().then((res)=>{
//   res.find({}).toArray().then((data)=>{
//     console.log(data);
//   })
// })

//2nd method to handle promise
const main = async () => {
  let data = await dbConnect();
  data = await data.find({}).toArray();
  console.log(data);
};
main();
