const express = require("express");

const { getAllTicketsByFridgeID, getAllOpenTicketsByFridgeID, getAllClosedTicketsByFridgeID, getAllTicketsByUserID, getAllOpenTicketsByUserID } = require("./ticket.controller");
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
ticketRouter.get('/:fridgeId/closed', getAllClosedTicketsByFridgeID);
ticketRouter.get('/:userId', getAllTicketsByUserID);
ticketRouter.get('/:userId/open', getAllOpenTicketsByUserID);
module.exports = ticketRouter;


// ticketRouter
//   .route()
//   .get()
//   .post()
//   .put()
//   .delete();
//   .post()
//   .put()
//   .delete();