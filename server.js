// require('dotenv').config()
const express = require('express')
// const mongoose = require('mongoose')
const jsxEngine = require('jsx-view-engine')//needed to set up jsxEngine
const PORT = 3000


const app = express()
app.set('view engine', 'jsx')//needed to set up jsxEngine
app.engine('jsx', jsxEngine())//needed to set up jsxEngine
//NEW
app.get('/logs/new', (req, res) => {
    res.render('New')
})


//CREATE
//

app.listen(PORT, () => {
    console.log(`The PORT at ${PORT} is working`)
})