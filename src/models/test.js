const mongoose = require('mongoose')
const testSchema = mongoose.Schema({

    testQuestionId:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'testQuestion',
         required: true 
    },

    name: {
        type: String,
     //   required: true
    },
    description: {
        type: String,
       // required: true
    },
   duration:[{
       hours:{
           type:Number,
       //    required:true,
       },
       minutes:{
           type:Number,
         //  required:true,
       }
    },
],
    totalMarks:{
        type:Number,
      //  required:true,
    },
 
},
{
timestamps:true,
}  
)
module.exports = mongoose.model('Test',testSchema)