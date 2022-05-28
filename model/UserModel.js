const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description: {
        type:String,
        required:true
    },
    date: {
        type: Date,
        default:Date.now
    }

})

module.exports = mongoose.model('User', UserSchema)