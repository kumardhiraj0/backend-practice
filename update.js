const dbConnect = require("./mongoconnect");
const updateData = async ()=>{
    const data = await dbConnect();
    //update single records
    let result = await data.updateOne({name:"iphone12"},{$set:{name:"nothing",brand:"android"}});
    //update more than one who have same name
    let result1 = await data.updateMany({name:"iphone13"},{$set:{name:"iphone",brand:"iphonedk",price:989}});

    console.log(result);
}
updateData();