const app = require("express");

const userRouter = require("./user/user.router");
const ticketRouter = require("./ticket/ticket.router");
const fridgeRouter = require("./fridges/fridges.router");

const api = app.Router();

api.use("/user", userRouter);
api.use("/fridge", fridgeRouter);
api.use("/ticket", ticketRouter);

module.exports = api;
