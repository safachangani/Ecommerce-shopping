const express = require('express')
const router =  express.Router()

router.post("/add-new-item",(req,res)=>{
    console.log("hi");
    console.log(req.body);
})

module.exports = router