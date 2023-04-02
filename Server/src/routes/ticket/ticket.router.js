const express = require("express");

const { getAllTicketsByFridgeID, getAllOpenTicketsByFridgeID, getAllClosedTicketsByFridgeID, getAllTicketsByUserID, getAllOpenTicketsByUserID, getAllClosedTicketsByUserID, createTicket, closeTicket, openTicket } = require("./ticket.controller");


const ticketRouter = express.Router();

ticketRouter.get('/:fridgeId', getAllTicketsByFridgeID);
ticketRouter.get('/:fridgeId/open', getAllOpenTicketsByFridgeID);
ticketRouter.get('/:fridgeId/closed', getAllClosedTicketsByFridgeID);
ticketRouter.get('/:userId', getAllTicketsByUserID);
ticketRouter.get('/:userId/open', getAllOpenTicketsByUserID);
ticketRouter.get('/:userId/closed', getAllClosedTicketsByUserID);
ticketRouter.post('/new_ticket', createTicket);
ticketRouter.post('/:userId/close_tick', closeTicket);
ticketRouter.post('/:userId/open_tick', openTicket);

module.exports = ticketRouter;
