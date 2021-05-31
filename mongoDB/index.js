const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://respiraWorks:S5u7t5yOmomK0x9j@cluster0.7yqbv.mongodb.net/sampleData?retryWrites=true&w=majority";
const databaseName = "sampleData";
const collectionName = "dataFiles";

let client, connection;

const connectToDb = (function() {  
  client = new MongoClient(url, { useUnifiedTopology: true });
  connection = client.connect();
}())

const testConnectToMongo = async () => {  
  return connection.then(() => {
    const dbo = client.db(databaseName);
    dbo.collection(collectionName).findOne({}, function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  })
}

module.exports = {
	client,
	connection,
	testConnectToMongo
};