

const mongoose = require('mongoose')
const userTestSchema = mongoose.Schema({
   
    userId:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'user',
         required: true  
    },

    testId:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'test',
         required: true,
    },
    
},
{
timestamps:true,
}
 
)
module.exports = mongoose.model('userTest',userTestSchema)