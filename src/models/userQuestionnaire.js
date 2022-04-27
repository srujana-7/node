const mongoose = require('mongoose')
const userQuestionnaireSchema = mongoose.Schema({
   

  
    questionnaireId:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'questionnaireSet',
         required: true 
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'user',
         required: true  
    }
    

},
{ timestamps: true },

)
module.exports = mongoose.model('UserQuestionnaire',userQuestionnaireSchema)