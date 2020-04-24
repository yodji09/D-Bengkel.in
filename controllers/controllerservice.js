"use strict"

const Model = require("../models/index.js");

const Service = Model.Service;

class ControllerService{
    static showDataService(req, res){

        Service
            .findAll()
            .then(service => {
                res.render('./service/service.ejs', {service});
            })
            .catch(error => {
                res.send(error.message);
            })
    }
    static addServiceForm(req, res){
        res.render('./service/addservice.ejs');
    }
    static addService(req, res){
        const body = {
            service_name: req.body.service_name,
            price: req.body.price
        }
        Service
            .create(body)
            .then(service => {
                res.redirect('/services');
            })
            .catch(error => {
                res.send(error.message);
            })
    }
    static deleteService(req, res){
        Service
            .destroy({
                where: {
                id: req.params.id
                }
            })
            .then(service => {
                res.redirect('/services');
            })
            .catch(error => {
                res.send(error.message);
            })
    }
    static findService(req, res){
        Service
            .findOne({
                where: {
                id: req.params.id
                }
            })
            .then(service => {
                res.render('./service/findservice.ejs', {service});
            })
            .catch(error => {
                res.send(error.message);
            })
    }
    static updateServiceForm(req, res){
        Service
            .findOne({
                where: {
                id: req.params.id
                }
            })
            .then(service => {
                res.render('./service/editservice.ejs', {service});
            })
            .catch(error => {
                res.send(error.message);
            })
    }
    static updateService(req, res){
        Service
            .update({
                service_name: req.body.service_name,
                price: req.body.price
            }, 
            {
                where: {
                id: req.params.id
                }
            })
            .then(service => {
                res.redirect('/services');
            })
            .catch(error => {
                res.send(error.message);
            })
    }
}
module.exports = ControllerService