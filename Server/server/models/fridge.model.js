const { Schema, model } = require('mongoose');

const fridgeSchema = new Schema({
    location: {
        lat: Number, 
        lon: Number,
        address: {
            neighborhood: String,
            streetAddress: String,
            zipcode: String
        }
    },
    profileImages: [{
        url: String,
        caption: String,
        createdAt: {
            type: Date,
            default: new Date()
        }
    }],
    insideImages: [{
        url: String,
        caption: String,
        createdAt: {
            type: Date,
            default: new Date()
        }
    }],
    tickets: {
        type: Schema.Types.ObjectId,
        ref: "Ticket"
    },
    subscriptions: {
        classes: {
            foodAdded: {
                type: Boolean,
                default: false,
            },
            fridgeStatus: {
                type: Boolean,
                default: true,
           },
            newTicket: {
                maintenance: {
                    type: Boolean,
                    default: false,
                },
                cleaning: {
                    type: Boolean,
                    default: false,
                },
                food: {
                    type: Boolean,
                    default: false,
                },
                transportation: {
                    type: Boolean,
                    default: false,
                },
                misc: {
                    type: Boolean,
                    default: false
                }
            }
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User", 
        },
    }
}, { timestamps: true });

module.exports = model("Fridge", fridgeSchema);
