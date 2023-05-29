//read data from mongodb, make file or db connection
//connect Node with MongoDB
const { MongoClient } = require("mongodb");
//connection url
const url = "mongodb://0.0.0.0:27017";
const client = new MongoClient(url);
const databaseName = "e-comm";

async function dbConnect() {
  let result = await client.connect();
  let db = result.db(databaseName);
  return db.collection("products");
}
module.exports = dbConnect;