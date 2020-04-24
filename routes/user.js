const express = require('express')
const router = express.Router()
const ControllerUser = require('../controllers/ControllerUser')
const ControllerService = require("../controllers/controllerservice.js");
const ControllerVehicle = require("../controllers/controllervehicle.js");

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
router.get('/:username/vehicles', ControllerVehicle.showDataVehicle)
router.get('/:username/vehicles/add', ControllerVehicle.addVehicleForm)
router.post('/:username/vehicles/add', ControllerVehicle.addVehicle)
router.get('/:username/vehicles/:id/delete', ControllerVehicle.deleteVehicle)
router.get("/:username/vehicles/:id/edit", ControllerVehicle.updateVehicleForm)
router.post("/:username/vehicles/:id/edit", ControllerVehicle.updateVehicle)


module.exports = router