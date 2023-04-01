const express = require("express");

const {
  addFridge
} = require("./fridges.controller");
/*
getAllFridgesGeoCode
getFridgeAddress
getFridgeGeoCode
getFridgesImagesB
*/

const fridgesRouter = express.Router();

console.log('hello')
fridgesRouter()
  .route()
  .post(addFridge)
//   .get()
//   .put()
//   .delete();

module.exports = fridgesRouter;
