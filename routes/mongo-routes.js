const express = require('express');
const router = express.Router();
const mongoConnection = require('../mongoDB/index.js');

// test-route/test-route
router.get('/file-names', async (req, res) => {
  const fileNames = await mongoConnection.grabAllFileNames();

  res.send({
    msg : "Worked!",
    fileNames: fileNames,
  });
});

module.exports = router;