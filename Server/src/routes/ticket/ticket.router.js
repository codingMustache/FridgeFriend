const express = require("express");

const {
    getAllTicketsByFridgeID
} = require("./ticket.controller");
/*
getAllTickets
getAllOpenTicketsByFridgeID
getAllClaimedTicketsByFridgeID
getAllClosedTicketsByFridgeID
getAllTicketsByUserID
getAllOpenTicketsByUserID
getAllClaimedTicketsByUserID
getAllClosedTicketsByUserID
*/

const ticketRouter = express.Router();

ticketRouter.get('/:fridgeId', getAllTicketsByFridgeID);
ticketRouter.get('/:fridgeId/open', getAllOpenTicketsByFridgeID);

module.exports = {ticketRouter};


// ticketRouter
//   .route()
//   .get()
//   .post()
//   .put()
//   .delete();
//   .post()
//   .put()
//   .delete();