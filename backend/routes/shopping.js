const express = require('express')
const router =  express.Router()
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' }); // Check the 'dest' folder

router.post("/add-new-item", upload.single('image'), (req, res) => {
  console.log(req.file); // Check if the file is properly uploaded
});
module.exports = router