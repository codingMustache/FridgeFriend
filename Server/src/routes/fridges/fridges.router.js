const express = require("express");

const {
  addFridge,
  getAllFridgesGeoCode,
  getFridgeInfoByID
} = require("./fridges.controller");
/*
getFridgeGeoCode
getFridgesImagesB
*/

const fridgesRouter = express.Router();

fridgesRouter
  .route('/')
  .post(addFridge)
  .get(getAllFridgesGeoCode)
//   .put()
//   .delete();

fridgesRouter
  .route('/:id')
  .get(getFridgeInfoByID)

module.exports = fridgesRouter;
