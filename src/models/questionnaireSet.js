const mongoose = require('mongoose')
const questionnaireSetSchema = mongoose.Schema({
    
   

    programId:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'program',
         required: true 
    },
    

    questions:[
 {       
    questionText:{
        type:String,
        required : true,
        unique:true
    },
    options:{
        type:Array,
        default:[],
    },
    answer :{
        type:String,
    },
}
    ],
},

{ timestamps: true },

)
module.exports = mongoose.model('QuestionnaireSet',questionnaireSetSchema)