"use strict"

const express = require("express");
const ControllerVehicle = require("../controllers/controllervehicle.js");

const router = express.Router();

router.get('/', ControllerVehicle.showDataVehicle);

router.get('/add', ControllerVehicle.addVehicleForm);

router.post('/add', ControllerVehicle.addVehicle);

// router.get('/:id', ControllerMovie.findMovie);

router.get('/:id/delete', ControllerVehicle.deleteVehicle);

router.get("/:id/edit", ControllerVehicle.updateVehicleForm);

router.post("/:id/edit", ControllerVehicle.updateVehicle);

module.exports = router;