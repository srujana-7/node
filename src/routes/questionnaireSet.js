const express = require('express')
const questionnaireSet = require('../models/questionnaireSet')

const router = new express.Router()



router.post("/questionnaireSet/add/",  async (req, res) => {
    const newquestionnaireSet = new questionnaireSet(req.body);
  
    try {
      const savedquestionnaireSet = await newquestionnaireSet.save();
      res.status(200).json(savedquestionnaireSet);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get("/questionnaireSet/getAll",async (req,res)=>{
 
    try {
        const questionnaireSets = await questionnaireSet.find({});
        res.status(200).json(questionnaireSets);
      } catch (err) {
        res.status(500).json(err);
      }
})


router.get("/questionnaireSet/getOne/:id", async (req, res) => {
    try {
      const res_questionnaireSet = await questionnaireSet.findById({_id:req.params.id});
      res.status(200).json(res_questionnaireSet);
    } catch (err) {
      res.status(500).json(err);
    }
  });


router.put("/questionnaireSet/update/:id", async (req, res) => {
    try {
      const updatedquestionnaireSet = await questionnaireSet.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedquestionnaireSet);
    } catch (err) {
      res.status(500).json(err);
    }
  });


router.delete("/questionnaireSet/delete/:id",  async (req, res) => {
    try {
      await questionnaireSet.findByIdAndDelete(req.params.id);
      res.status(200).json(" deleted.");
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router