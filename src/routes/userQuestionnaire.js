const express = require('express')
const userQuestionnaire = require('../models/userQuestionnaire')

const router = new express.Router()



router.post("/userQuestionnaire/add/",  async (req, res) => {
    const newuserQuestionnaire = new userQuestionnaire(req.body);
  
    try {
      const saveduserQuestionnaire = await newuserQuestionnaire.save();
      res.status(200).json(saveduserQuestionnaire);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get("/userQuestionnaire/getAll",async (req,res)=>{
 
    try {
        const userQuestionnaires = await userQuestionnaire.find({});
        res.status(200).json(userQuestionnaires);
      } catch (err) {
        res.status(500).json(err);
      }
})


router.get("/userQuestionnaire/getOne/:id", async (req, res) => {
    try {
      const res_userQuestionnaire = await userQuestionnaire.findById({_id:req.params.id});
      res.status(200).json(res_userQuestionnaire);
    } catch (err) {
      res.status(500).json(err);
    }
  });


router.put("/userQuestionnaire/update/:id", async (req, res) => {
    try {
      const updateduserQuestionnaire = await userQuestionnaire.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updateduserQuestionnaire);
    } catch (err) {
      res.status(500).json(err);
    }
  });


router.delete("/userQuestionnaire/delete/:id",  async (req, res) => {
    try {
      await userQuestionnaire.findByIdAndDelete(req.params.id);
      res.status(200).json(" deleted.");
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router