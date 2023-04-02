const express = require("express");

const userRouter = require("./user/user.router");
const ticketRouter = require("./ticket/ticket.router");
const fridgesRouter = require("./fridges/fridges.router");


const api = express.Router();
//api.use("/user", userRouter);
api.use("/fridges", fridgesRouter);
api.use("/ticket", ticketRouter);

module.exports = api;
