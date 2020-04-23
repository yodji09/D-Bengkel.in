const {User, Role} = require('../models')
const upload = require('../helpers/upload')

class ControllerUser {
    static showRegister(req, res){
        const {message} = req.app.locals
        delete req.app.locals.message
        res.render("./user/register", {message})
    }
    static register(req, res){
        const values = {
            first_name : req.body.first_name,
            last_name : req.body.last_name,
            username : req.body.username,
            birthdate : req.body.birthdate,
            email: req.body.email,
            phone_number: req.body.phone_number,
            password : req.body.password,
        }
        if(req.body.password !== req.body.confirmpassword){
            req.app.locals.message = "password did not match"
            return res.redirect("/user/register")
        }
        User
            .create(values)
            .then(result => {
                req.app.locals.message = 'Succes Create Account'
                res.redirect('/user/login')
            })
            .catch(err => {
                req.app.locals.message = "Email/Username already used"
                res.redirect("/user/register")
            })
    }
    static showLogin(req, res){
        const {message} = req.app.locals
        delete req.app.locals.message
        res.render('./user/login', {message})
    }
    static Login(req, res){
        const options = {
            where : {
                email : req.body.email,
                password : req.body.password
            },
            include: Role
        }
        User
            .findOne(options)
            .then(result => {
                console.log(result)
                if(result === undefined){
                    req.app.locals.message = "wrong email/password"
                    res.redirect("/user/login")
                } else {
                    req.app.locals.isLogin = true
                    if (result.Role.role_name === "User"){
                        res.redirect(`/user/${result.username}`)
                    } else {
                        res.redirect(`/admin/${result.username}`)
                    }
                }
            })
            .catch(err => {
                req.app.locals.message = "Email / Password didnot match"
                res.redirect('/user/login')
            })
    }
    static showUser(req, res){
        const options = {
            where : {
                username : req.params.username
            }
        }
        const {message} = req.app.locals
        delete req.app.locals.message
        if(!req.app.locals.isLogin){
            req.app.locals.message = "Please Login First"
            res.redirect('/user/login')
        }
        User
            .findOne(options)
            .then(result => {
                res.render('./user/userprofile', {result, message})
            })
            .catch(err=> {
                res.send(err)
            })
    }
    static topUpForm(req, res){
        const {message} = req.app.locals
        delete req.app.locals.message
        User
            .findOne({
                where : {
                    username : req.params.username
                }
            })
            .then(result => {
                res.render('./user/topup', {result, message})
            })
            .catch(error => {
                res.send(error)
            })
    }
    static userUpload(req, res){
        const options = {
            where : {
                username : req.params.username
            }
        }
        User
            .findOne(options)
            .then(result => {
                upload(req, res, (err)=>{
                    if(err){
                        req.app.locals.message = err
                    } else {
                        req.app.locals.message = "Your Top Up will be Processed Soon"
                        res.redirect(`/user/${result.username}`)
                    }
                }) 
            })
            .catch(err => {
                req.app.locals.message = err
                res.redirect(`/user/${data.username}/topup`)
            })
    }
    static showEditForm(req, res){
        const options = {
            where : {
                username : req.params.username
            }
        }
        const {message} = req.app.locals
        delete req.app.locals.message
        User
            .findOne(options)
            .then(result => {
                res.render('./user/editprofile', {result, message})
            })
            .catch(err=> {
                res.send(err)
            })
    }
    static editUser(req, res){
        const values = {
            first_name : req.body.first_name,
            last_name : req.body.last_name,
            username : req.body.username,
            birthdate : req.body.birthdate,
            email: req.body.email,
            phone_number: req.body.phone_number,
            password : req.body.password,
        }
        if(req.body.password !== req.body.confirmpassword){
            req.app.locals.message = "password did not match"
            return res.redirect(`/user/${req.body.username}/edit`)
        }
        User
            .update(values, {
                where : {
                    username : req.params.username
                }
            })
            .then(result => {
                req.app.locals.message = 'Succes Update Profile'
                res.redirect(`/user/${result.username}/edit`)
            })
            .catch(err => {
                req.app.locals.message = "Email already used"
                res.redirect("/user/register")
            })
    }
    static logOutUser(req, res){
        req.app.locals.isLogin = false
        res.redirect('/user/login')
    }
}

module.exports = ControllerUser