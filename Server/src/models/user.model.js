const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    tickets: [{
        type: Schema.Types.ObjectId,
        ref: "Ticket"
    }],
    subscribedFridges: [{
        type: Schema.Types.ObjectId,
        ref: "Fridge"
    }],

}, { timestamps: true });

module.exports = model("User", userSchema);