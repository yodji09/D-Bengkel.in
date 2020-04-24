const express = require('express');
const router = express.Router();
const userRouter = require('./user');

router.get('/', (req, res)=>{
    res.render('home');
})

router.get('/home', (req, res)=>{
    res.render('home');
})
router.use('/user', userRouter);



module.exports = router;