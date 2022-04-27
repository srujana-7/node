const express = require('express')
const user = require('../models/user')

const router = new express.Router()



router.post("/user/add/",  async (req, res) => {
    const newuser = new user(req.body);
  
    try {
      const saveduser = await newuser.save();
      res.status(200).json(saveduser);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get("/user/getAll",async (req,res)=>{
 
    try {
        const users = await user.find({});
        res.status(200).json(users);
      } catch (err) {
        res.status(500).json(err);
      }
})


router.get("/user/getOne/:id", async (req, res) => {
    try {
      const res_user = await user.findById({_id:req.params.id});
      res.status(200).json(res_user);
    } catch (err) {
      res.status(500).json(err);
    }
  });


router.put("/user/update/:id", async (req, res) => {
    try {
      const updateduser = await user.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updateduser);
    } catch (err) {
      res.status(500).json(err);
    }
  });


router.delete("/user/delete/:id",  async (req, res) => {
    try {
      await user.findByIdAndDelete(req.params.id);
      res.status(200).json(" deleted.");
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router