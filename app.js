const express = require('express')
const app = express()
const port = 3000
const router = require('./routes/index.js')
const session = require('express-session')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended : true}))
app.use(session({
    secret : 'wqekwjqelk',
    resave : false,
    saveUninitialized: false
}))
app.use(express.static('./public'))

app.use(router)

app.listen(port, ()=>{
    console.log('This App listen to', port)
})