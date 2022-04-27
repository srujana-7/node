const express = require('express')
const enrollmentData = require('../models/enrollmentData')

const router = new express.Router()



router.post("/enrollmentData/add/",  async (req, res) => {
    const newenrollmentData = new enrollmentData(req.body);
  
    try {
      const savedenrollmentData = await newenrollmentData.save();
      res.status(200).json(savedenrollmentData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get("/enrollmentData/getAll",async (req,res)=>{
 
    try {
        const enrollmentDatas = await enrollmentData.find({});
        res.status(200).json(enrollmentDatas);
      } catch (err) {
        res.status(500).json(err);
      }
})


router.get("/enrollmentData/getOne/:id", async (req, res) => {
    try {
      const res_enrollmentData = await enrollmentData.findById({_id:req.params.id});
      res.status(200).json(res_enrollmentData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


router.put("/enrollmentData/update/:id", async (req, res) => {
    try {
      const updatedenrollmentData = await enrollmentData.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedenrollmentData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


router.delete("/enrollmentData/delete/:id",  async (req, res) => {
    try {
      await enrollmentData.findByIdAndDelete(req.params.id);
      res.status(200).json(" deleted.");
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router