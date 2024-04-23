const { MongoClient } = require('mongodb');
var url = "mongodb://localhost:27017";
async function getMysqlConnection()
{
    var client = new MongoClient(url);
    await client.connect();
    var db = client.db("test");
    return db;
    // console.log("collection sellected");
}

async function insertData(data)
{
    var db = await getMysqlConnection();
    var mycollection = db.collection('mycollection');
    var res = await mycollection.insertOne(data);
    return res;
}

module.exports = {
    insertData: insertData 
  };
