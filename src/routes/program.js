const express = require('express')
const program = require('../models/program')

const router = new express.Router()



router.post("/program/add/",  async (req, res) => {
    const newProgram = new program(req.body);
  
    try {
      const savedProgram = await newProgram.save();
      res.status(200).json(savedProgram);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get("/program/getAll",async (req,res)=>{
 
    try {
        const programs = await program.find({});
        res.status(200).json(programs);
      } catch (err) {
        res.status(500).json(err);
      }
})


router.get("/program/getOne/:id", async (req, res) => {
    try {
      const res_program = await program.findById({_id:req.params.id});
      res.status(200).json(res_program);
    } catch (err) {
      res.status(500).json(err);
    }
  });


router.put("/program/update/:id", async (req, res) => {
    try {
      const updatedProgram = await program.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedProgram);
    } catch (err) {
      res.status(500).json(err);
    }
  });


router.delete("/program/delete/:id",  async (req, res) => {
    try {
      await program.findByIdAndDelete(req.params.id);
      res.status(200).json(" deleted.");
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router