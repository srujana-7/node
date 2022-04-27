
const mongoose = require('mongoose')
const paymentSchema = mongoose.Schema({
    
userId:{
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'user',
     required: true,
},

paymentMode:{
    type:String,
    required:true,
},
amount:{
    type:String,
    
},
accountNumber:{
    type:String,
    
},
gateway:{
    type:String,
},
paymentStatus:{
    type:Boolean,
}
        
},
{ timestamps: true },

)
module.exports = mongoose.model('payment',paymentSchema)