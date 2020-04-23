const express = require('express')
const router = express.Router()
const ControllerUser = require('../controller/ControllerUser')

router.get('/register', ControllerUser.showRegister)
router.post('/register', ControllerUser.register)
router.get('/login', ControllerUser.showLogin)
router.post('/login', ControllerUser.Login)
router.get('/:username', (req, res, next)=>{
    if(req.app.locals.isLogin){
        next()
    } else {
        req.app.locals.message = "Please login first"
        res.redirect('/user/login')
    }
},ControllerUser.showUser)
router.get('/:username/topup', ControllerUser.topUpForm)
router.post('/:username/topup', ControllerUser.userUpload)
router.get('/:username/edit', ControllerUser.showEditForm)
router.post('/:username/edit', ControllerUser.editUser)
router.get('/:username/logout', ControllerUser.logOutUser)

module.exports = router