const express = require("express");
const { saveUser } = require("./user.controller");

/*
const {
getUserByID
} = require("./user.controller");
*/

const userRouter = express.Router();

userRouter
  .route('/')
  .post(saveUser)
//   .get()
//   .put()
//   .delete();

module.exports = userRouter;
