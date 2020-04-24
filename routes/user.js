const express = require('express')
const router = express.Router()
const ControllerUser = require('../controllers/ControllerUser')

const serviceRouter = require('./service.js');
const vehicleRouter = require('./vehicle.js');

router.get('/register', ControllerUser.showRegister)
router.post('/register', ControllerUser.register)
router.get('/login', ControllerUser.showLogin)
router.post('/login', ControllerUser.Login)
router.get('/:username', (req, res, next)=>{
    if(req.session.isLogin){
        next()
    } else {
        req.session.message = "Please login first"
        res.redirect('/user/login')
    }
},ControllerUser.showUser)
router.get('/:username/topup', ControllerUser.topUpForm)
router.post('/:username/topup', ControllerUser.userUpload)
router.get('/:username/edit', ControllerUser.showEditForm)
router.post('/:username/edit', ControllerUser.editUser)
router.get('/:username/logout', ControllerUser.logOutUser)
router.use('/:username/services', serviceRouter);
router.use('/:username/vehicles', vehicleRouter);

module.exports = router