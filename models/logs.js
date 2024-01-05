const mongoose = require('mongoose')


const logSchema = new mongoose.Schema({
    Title: {type : String, require: true},
    Entry: {type : String, require: true},
    shipIsBroken: Boolean //  true or false
})

const Log = mongoose.model('Log', logSchema)

module.exports = Log