"use strict"

const Model = require("../models/index.js");

const Vehicle = Model.Vehicle;
const User = Model.User

class ControllerVehicle{
    static showDataVehicle(req, res){
        const username = req.params.username
        Vehicle
            .findAll({
                include : User
            })
            .then(vehicle => {
                res.render('./vehicle/vehicle.ejs', {vehicle, username});
            })
            .catch(error => {
                res.send(error.message);
            })
    }
    static addVehicleForm(req, res){
        const username = req.params.username
        res.render('./vehicle/addvehicle.ejs', {username});
    }
    static addVehicle(req, res){
        const username = req.params.username
        const body = {
            vehicle_brand: req.body.vehicle_brand,
            vehicle_type: req.body.vehicle_type
        }
        let data;
        User
            .findOne({
                where : {
                    username : req.params.username
                }
            })
            .then(result => {
                data = result
                body.UserId = data.id
                return Vehicle.create(body)
            })            
            .then(vehicle => {
                res.redirect(`/user/${username}/vehicles`);
            })
            .catch(error => {
                res.send(error.message);
            })
    }
    static deleteVehicle(req, res){
        const username = req.params.username
        Vehicle
            .destroy({
                where: {
                id: req.params.id
                }
            })
            .then(vehicle => {
                res.redirect(`/user/${username}/vehicles`);
            })
            .catch(error => {
                res.send(error.message);
            })
    }
    static findVehicle(req, res){
        Vehicle
            .findOne({
                where: {
                id: req.params.id
                }
            })
            .then(vehicle => {
                res.render('./vehicle/findvehicle.ejs', {vehicle});
            })
            .catch(error => {
                res.send(error.message);
            })
    }
    static updateVehicleForm(req, res){
        Vehicle
            .findOne({
                where: {
                id: req.params.id
                }
            })
            .then(vehicle => {
                res.render('./vehicle/editvehicle.ejs', {vehicle});
            })
            .catch(error => {
                res.send(error.message);
            })
    }
    static updateVehicle(req, res){
        const username = req.params.username
        Vehicle
            .update({
                vehicle_brand: req.body.vehicle_brand,
                vehicle_type: req.body.vehicle_type
            }, 
            {
                where: {
                id: req.params.id
                }
            })
            .then(vehicle => {
                res.redirect(`/user/${username}/vehicles`);
            })
            .catch(error => {
                res.send(error.message);
            })
    }
}
module.exports = ControllerVehicle;