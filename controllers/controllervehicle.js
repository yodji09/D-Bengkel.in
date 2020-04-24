"use strict"

const Model = require("../models/index.js");

const Vehicle = Model.Vehicle;

class ControllerVehicle{
    static showDataVehicle(req, res){

        Vehicle
            .findAll()
            .then(vehicle => {
                const username = req.params.username
                console.log(username)
                res.render('./vehicle/vehicle.ejs', {vehicle, username});
            })
            .catch(error => {
                console.log(error)
                res.send(error.message);
            })
    }
    static addVehicleForm(req, res){
        res.render('./vehicle/addvehicle.ejs');
    }
    static addVehicle(req, res){
        const body = {
            vehicle_brand: req.body.vehicle_brand,
            vehicle_type: req.body.vehicle_type
        }
        Vehicle
            .create(body)
            .then(vehicle => {
                res.redirect('/vehicles');
            })
            .catch(error => {
                res.send(error.message);
            })
    }
    static deleteVehicle(req, res){
        Vehicle
            .destroy({
                where: {
                id: req.params.id
                }
            })
            .then(vehicle => {
                res.redirect('/vehicles');
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
                res.redirect('/vehicles');
            })
            .catch(error => {
                res.send(error.message);
            })
    }
}
module.exports = ControllerVehicle;