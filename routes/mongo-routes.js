const express = require('express');
const router = express.Router();
const mongoConnection = require('../mongoDB/index.js');
// let multer  = require('multer')
// let upload = multer({ dest: 'uploads/' })

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

router.post('/upload-file', async (req, res) => {
  try {
    if(!req.files){
      res.send({
        status: false,
        message: "No files"
      })
    } else {
      const { file } = req.files
      file.mv("./images/" + file.name)

      res.send({
        status: true,
        message: "File is uploaded"
      });
    }
  } catch (e) {
    res.status(500).send(e)
  }
})

module.exports = router;