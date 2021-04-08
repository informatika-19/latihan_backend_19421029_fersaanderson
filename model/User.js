const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    //username: String
    username: {
    default: '',
    type: String
    },
    password: {
    default: '',
    type: String
    },
    namalengkap: {
     default: '',
    type: String
    },
    alamat: {
    default: '',
    type: String
    }
})

module.exports = mongoose.model('user', userSchema)