require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
// const methodOverride = require('method-override')
const jsxEngine = require('jsx-view-engine')//needed to set up jsxEngineyes
const Log = require('./models/logs')
const PORT = 3000


const app = express()
app.set('view engine', 'jsx')//needed to set up jsxEngine
app.engine('jsx', jsxEngine())//needed to set up jsxEngine
app.use(express.urlencoded({ extended: true }))




mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => {
    console.log('connected to mongodb')
})




//NEW
app.get('/logs/new', (req, res) => {
    res.render('New')
})


//CREATE
app.post('/logs', async (req, res) => {
    
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }
    try {
        const createdLog = await Log.create(req.body)
        res.redirect(`/logs/Show/${createdLog._id}`)
    } catch (error) {
        res.status(400).send({message : error.message})
    }
    // res.send(req.body)
} )

//

app.listen(PORT, () => {
    console.log(`The PORT at ${PORT} is working`)
})