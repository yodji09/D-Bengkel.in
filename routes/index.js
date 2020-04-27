const express = require('express');
const router = express.Router();
const userRouter = require('./user');
const serviceRouter = require('./service.js');
router.get('/', (req, res)=>{
    res.render('home');
})

router.get('/home', (req, res)=>{
    res.render('home');
})
router.use('/user', userRouter);
router.use('/services', serviceRouter)



module.exports = router;