// import the libraries
const express = require('express');
const multer = require('multer');
const cors = require('cors');

//initiate the express app
const app = express();

app.use(cors({ origin: true, credentials: true }));

// creating storage for the files uploaded

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public');

    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname);
    };
  },
});

const upload = multer({ storage }).array('file');

app.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).send(req.files);
  });
});

app.listen(8001, () => {
  console.log('App is running on port 8001');
});
