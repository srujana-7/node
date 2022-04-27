const express = require('express')
const payment = require('../models/payment')

const router = new express.Router()



router.post("/payment/add/",  async (req, res) => {
    const newpayment = new payment(req.body);
  
    try {
      const savedpayment = await newpayment.save();
      res.status(200).json(savedpayment);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get("/payment/getAll",async (req,res)=>{
 
    try {
        const payments = await payment.find({});
        res.status(200).json(payments);
      } catch (err) {
        res.status(500).json(err);
      }
})


router.get("/payment/getOne/:id", async (req, res) => {
    try {
      const res_payment = await payment.findById({_id:req.params.id});
      res.status(200).json(res_payment);
    } catch (err) {
      res.status(500).json(err);
    }
  });


router.put("/payment/update/:id", async (req, res) => {
    try {
      const updatedpayment = await payment.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedpayment);
    } catch (err) {
      res.status(500).json(err);
    }
  });


router.delete("/payment/delete/:id",  async (req, res) => {
    try {
      await payment.findByIdAndDelete(req.params.id);
      res.status(200).json(" deleted.");
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router