const express = require('express')
const userTest = require('../models/userTest')

const router = new express.Router()



router.post("/userTest/add/",  async (req, res) => {
    const newuserTest = new userTest(req.body);
  
    try {
      const saveduserTest = await newuserTest.save();
      res.status(200).json(saveduserTest);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get("/userTest/getAll",async (req,res)=>{
 
    try {
        const userTests = await userTest.find({});
        res.status(200).json(userTests);
      } catch (err) {
        res.status(500).json(err);
      }
})


router.get("/userTest/getOne/:id", async (req, res) => {
    try {
      const res_userTest = await userTest.findById({_id:req.params.id});
      res.status(200).json(res_userTest);
    } catch (err) {
      res.status(500).json(err);
    }
  });


router.put("/userTest/update/:id", async (req, res) => {
    try {
      const updateduserTest = await userTest.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updateduserTest);
    } catch (err) {
      res.status(500).json(err);
    }
  });


router.delete("/userTest/delete/:id",  async (req, res) => {
    try {
      await userTest.findByIdAndDelete(req.params.id);
      res.status(200).json(" deleted.");
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router