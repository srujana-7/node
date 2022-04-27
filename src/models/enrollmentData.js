
var mongoose = require('mongoose')
var enrollmentDataSchema = mongoose.Schema({
    
userId:{
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'user',
     required: true,
    
},
programId:{
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'program',
     required: true
},
userQuestionnaireId:{
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'userQuestionnaire',
     required: true 
},
userTestId:{
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'userTest',
     required: true 
},
acceptanceStatus:{
     type:Boolean,
     default:false
},
paymentId:{
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'payment',
     required: true 
},
isUserEnrolled:{
    type:Boolean,
    default:false,
},
},
{ timestamps: true },

)
module.exports = mongoose.model('EnrollmentData',enrollmentDataSchema)