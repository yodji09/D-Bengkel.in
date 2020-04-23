"use strict"

const express = require("express");
const ControllerService = require("../controllers/controllerservice.js");

const router = express.Router();

router.get('/', ControllerService.showDataService);

router.get('/add', ControllerService.addServiceForm);

router.post('/add', ControllerService.addService);

// router.get('/:id', ControllerMovie.findMovie);

router.get('/:id/delete', ControllerService.deleteService);

router.get("/:id/edit", ControllerService.updateServiceForm);

router.post("/:id/edit", ControllerService.updateService);

module.exports = router;