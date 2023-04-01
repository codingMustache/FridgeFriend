const { Schema, model } = require("mongoose");

const ticketSchema = new Schema({
    fridgeId: {
        type: Schema.Types.ObjectId,
        ref: "Fridge"
    },
    openedBy: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    closedBy: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    claimedBy: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    serviceType: String,
    details: String,
    imageUrl: String
}, { timestamps: true });

module.exports = model("Ticket", ticketSchema);