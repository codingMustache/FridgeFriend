const { Ticket, User } = require('../../models');

const createTicket = async (req, res) => {
    const { fridgeId, openedBy, serviceType, details, imageUrl } = req.body;
    try {
        const newTicket = await Ticket.create({
            fridgeId,
            openedBy,
            serviceType,
            details,
            imageUrl,
        });
        const updatedUser = await User.findById(openedBy)
        updatedUser.tickets.push(newTicket._id);
        updatedUser.save();
        res.status(200).send(newTicket);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
};

const getAllTicketsByFridgeID = async (req, res) => {
    // use the fridges ID to query all the tickets that exist on the tickets array from the db
    const { fridgeId } = req.params;
    console.log(fridgeId, 'fridgeID');
    try {
        const ticks = await Ticket.findById(fridgeId);
        console.log(ticks);
        res.status(200).send(ticks);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }

};

const getAllOpenTicketsByFridgeID = async (req, res) => {
    // find all tickets with if open status is true by fridge ID
    const { fridgeId } = req.params;
    const { isOpen } = req.body;
    try {
        const ticks = await Ticket.findById(fridgeId);
        if (ticks.isOpen) {
            res.status(200).send(ticks);
        } else {
            res.sendStatus(400);
        }
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
};

const getAllClosedTicketsByFridgeID = async (req, res) => {
    const { fridgeId } = req.params;
    const { isOpen } = req.body;
    try {
        const closedTicks = await Ticket.findById(fridgeId);
        if (!isOpen) {
            res.status(200).send(closedTicks);
        }
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
};

const getAllTicketsByUserID = async (req, res) => {
    const { userId } = req.params;
    try {
        const ticks = await Ticket.findById(userId);
        res.status(200).send(ticks);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
};

const getAllOpenTicketsByUserID = async (req, res) => {
    const { userId } = req.params;
    const { isOpen } = req.body;
    try {
        const openTicks = await Ticket.findById(userId);
        if (isOpen) {
            res.status(200).send(openTicks);
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
};


const getAllClosedTicketsByUserID = async (req, res) => {
    const { userId } = req.params;
    const { isOpen } = req.body;
    try {
        const closedTicks = await Ticket.findById(userId);
        if (!isOpen) {
            res.status(200).send(closedTicks);
        } else {
            res.sendStatus(404);
        }
        } catch (err) {
            console.error(err);
            res.sendStatus(500);
        }
    };

module.exports = {
    getAllTicketsByFridgeID,
    getAllOpenTicketsByFridgeID,
    getAllClosedTicketsByFridgeID,
    getAllTicketsByUserID,
    getAllOpenTicketsByUserID,
    getAllClosedTicketsByUserID,
    createTicket
};