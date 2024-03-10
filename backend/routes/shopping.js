const express = require('express')
const router =  express.Router()
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' }); // Check the 'dest' folder
const mongoose = require('mongoose')
const wardrobe = require('../admin.js')


router.post("/add-new-item", upload.single('image'), async(req, res) => {
  try{
    const item= new wardrobe({
      name:req.body.name,
      description:req.body.description,
      category:req.body.category,
      price:req.body.price,
      imageUrl:req.file.path
     })
      console.log("hi");
     await item.save()
     console.log(item,"hi");
     res.status(200).json({ message: 'item added successfully' })
  }
  catch(err){

  }
});
module.exports = router