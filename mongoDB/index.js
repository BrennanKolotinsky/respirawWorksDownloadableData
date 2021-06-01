const MongoClient = require('mongodb').MongoClient;

const url = process.env.MONGODB_URL;
const databaseName = "sampleData";
const collectionName = "dataFiles";

let client, connection;

const connectToDb = (function() {  
  client = new MongoClient(url, { useUnifiedTopology: true });
  connection = client.connect();
}())

const testConnectToMongo = () => {  
  return connection.then(() => {
    const dbo = client.db(databaseName);
    return dbo.collection(collectionName).findOne({}, function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  })
}

const grabAllFileNames = async () => {  
  return connection.then(async () => {
    const dbo = client.db(databaseName);
    const fileNameArr = [];
    await dbo.collection(collectionName).find().forEach(
      (e) => {
      	fileNameArr.push(e.filename);
  	});

  	return fileNameArr;
  });
}

const getFile = async (filename) => {  
  return connection.then(async () => {
    const dbo = client.db(databaseName);
    return await dbo.collection(collectionName).findOne({filename});
  });
}

module.exports = {
	client,
	connection,
	testConnectToMongo,
	grabAllFileNames,
  getFile,
};