const mongoose = require('mongoose')
const programSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
      //   unique:true
    },
    description: {
        type: String,
        required: true,
    },
   
    startDate:{
        type:Date,
     
    },
    price:{
        type:Number,
        required:true,
    },
    duration:{
        type:String,
        required : true,
    }
 
},
{
timestamps:true,
}
 
)
module.exports = mongoose.model('Program',programSchema)