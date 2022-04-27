const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name:{
        type:String,
     //   required:true,
    },
    username:{
        type:String,
        trim:true,
       // required:true,
    },    
    email:{     
        type:String,
        trim:true,
       // required:true,
    },
  


    programs: {
        type  :Array,
        default:[],
    },
    
    certificates:{
    type:Array,
    default :[],
    },
      },
    
      { timestamps: true }
    );
module.exports = mongoose.model("User", userSchema);