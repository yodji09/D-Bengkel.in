const express = require('express');
const router = express.Router();
const userRouter = require('./user');
const serviceRouter = require('./service.js');
const vehicleRouter = require('./vehicle.js');

router.get('/home', (req, res)=>{
    res.render('home');
})
router.use('/user', userRouter);

router.use('/services', serviceRouter);

router.use('/vehicles', vehicleRouter);

module.exports = router;