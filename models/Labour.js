const mongoose = require('mongoose');

// Create new Labout Schema
const labourSchema = new mongoose.Schema(
    {

        uID: {
            type: Number,
            required: true,
            unique: true
        },
        name: {
            type: String,
            required: true
        },
        assignedSalesManager: {
            type: String, // this has to be changed
            required: true
        },
        area: {
            type: String,
            enum: ['Noida', 'Delhi', 'Greater Noida'],
            required: true
        },
        inTime: {
            type: Date,
            default: null
        },
        outTime: {
            type: Date,
            default: null
        }

    }
);

// export the schema
const Labour = mongoose.model('Labour', labourSchema);
module.exports = Labour;