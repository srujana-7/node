const express = require('express')
const testQuestion = require('../models/testQuestion')

const router = new express.Router()



router.post("/testQuestion/add/",  async (req, res) => {
    const newtestQuestion = new testQuestion(req.body);
  
    try {
      const savedtestQuestion = await newtestQuestion.save();
      res.status(200).json(savedtestQuestion);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get("/testQuestion/getAll",async (req,res)=>{
 
    try {
        const testQuestions = await testQuestion.find({});
        res.status(200).json(testQuestions);
      } catch (err) {
        res.status(500).json(err);
      }
})


router.get("/testQuestion/getOne/:id", async (req, res) => {
    try {
      const res_testQuestion = await testQuestion.findById({_id:req.params.id});
      res.status(200).json(res_testQuestion);
    } catch (err) {
      res.status(500).json(err);
    }
  });


router.put("/testQuestion/update/:id", async (req, res) => {
    try {
      const updatedtestQuestion = await testQuestion.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedtestQuestion);
    } catch (err) {
      res.status(500).json(err);
    }
  });


router.delete("/testQuestion/delete/:id",  async (req, res) => {
    try {
      await testQuestion.findByIdAndDelete(req.params.id);
      res.status(200).json(" deleted.");
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router