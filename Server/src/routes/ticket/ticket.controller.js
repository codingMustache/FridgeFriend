
 const getAllTicketsByFridgeID = async (req, res) => {
    // use the fridges ID to query all the tickets that exist on the tickets array from the db
    const { fridgeId } = req.params;
    try {
        const ticks = await Tickets.findById(fridgeId);
        res.status(300).send(ticks);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
    
}

//  const getAllOpenTicketsByFridgeID = async (req, res) => {
//     // find all tickets with if open status is true by fridge ID
//     const {  }
//     try {
//         const ticks = await Tickets.findById(fridgeId);
//         if (ticks.isOpen) {
//             res.status(300).send(ticks);
//         } else {
//             res.sendStatus(400);
//         }
//     } catch (err) {
//         console.error(err);
//         res.sendStatus(500);
//     }
// }

// export const getAllClaimedTicketsByFridgeID = () => {}

// export const getAllClosedTicketsByFridgeID = () => {}

// export const getAllTicketsByUserID = () => {}

// export const getAllOpenTicketsByUserID = () => {}

// export const getAllClaimedTicketsByUserID = () => {}

// export const getAllClosedTicketsByUserID = () => {}

module.exports = {getAllTicketsByFridgeID}