const express = require('express')
const test = require('../models/test')

const router = new express.Router()



router.post("/test/add/",  async (req, res) => {
    const newtest = new test(req.body);
  
    try {
      const savedtest = await newtest.save();
      res.status(200).json(savedtest);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get("/test/getAll",async (req,res)=>{
 
    try {
        const tests = await test.find({});
        res.status(200).json(tests);
      } catch (err) {
        res.status(500).json(err);
      }
})


router.get("/test/getOne/:id", async (req, res) => {
    try {
      const res_test = await test.findById({_id:req.params.id});
      res.status(200).json(res_test);
    } catch (err) {
      res.status(500).json(err);
    }
  });


router.put("/test/update/:id", async (req, res) => {
    try {
      const updatedtest = await test.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedtest);
    } catch (err) {
      res.status(500).json(err);
    }
  });


router.delete("/test/delete/:id",  async (req, res) => {
    try {
      await test.findByIdAndDelete(req.params.id);
      res.status(200).json(" deleted.");
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router