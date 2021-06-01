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

router.get('/download-file', async (req, res) => {
  
  const { fileName } = req.query;
  const file = await mongoConnection.getFile(fileName);

  res.send({
    msg : "Worked!",
    file,
  });
});

module.exports = router;