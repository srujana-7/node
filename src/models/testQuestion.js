
const mongoose = require('mongoose')
const testQuestionSchema = mongoose.Schema({
    
programId:{
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'program',
     required: true,
},

    testQuestions:[
        {
questionText:{
    type: String, 
    required: true,
    unique:true,
},
options:{
    type  :Array,
    default:[]
},
questionScore:{
    type:Number,
 //   required:true,
},
expectedAnswer: {
    type: String,
    required: true
},
userAnswer:{
    type:String,
  
}, 
userScore:{
    type:String,
 
}
        }
    ]
},
{ timestamps: true },

)
module.exports = mongoose.model('TestQuestion', testQuestionSchema )