// require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
// const methodOverride = require('method-override')
const jsxEngine = require('jsx-view-engine')//needed to set up jsxEngineyes
const PORT = 3000


const app = express()
app.set('view engine', 'jsx')//needed to set up jsxEngine
app.engine('jsx', jsxEngine())//needed to set up jsxEngine
app.use(express.urlencoded({ extended: true }))

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
    res.send(req.body)
    // try {
    //     const createdLog = await 
    // } catch (error) {
        
    // }
} )

//

app.listen(PORT, () => {
    console.log(`The PORT at ${PORT} is working`)
})