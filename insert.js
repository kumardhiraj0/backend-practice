const dbConnect = require("./mongoconnect");
const insert = async()=>{
    const db = await dbConnect();
    //insert single  records
    // const result = await db.insertOne(
    //     {
    //         name:"redminote8",
    //         brand:"redmi",
    //         price:345,
    //         category:"mobile"
    //     }
    // );

    //insert more than one records
    const result = await db.insertMany([
        {
            name: "iphone12",
            brand: "apple",
            price: 999,
            category: "mobile",
          },
          {
            name: "iphone13",
            brand: "apple",
            price: 698,
            category: "mobile",
          }
    ])
    if (result.acknowledged) {
        console.log(`${result.insertedCount} documents inserted`);
      }
}
insert();