const express = require('express');
const router = express.Router();
const mongoConnection = require('../mongoDB/index.js');

router.get('/test-route', async (req, res) => {
  const fileNames = await mongoConnection.grabAllFileNames();

  res.send({
    msg : "Worked!",
    fileNames: fileNames,
  });
});

module.exports = router;