const mongoose = require('mongoose');
// const { v4: uuidv4 } = require('uuid');

// Create new UserSchema
// Define the User schema
const userSchema = new mongoose.Schema({
    uID: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['Admin', 'SalesManager', 'Labour', 'HR'],
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    area: {
        type: String,
        enum: ['Noida', 'Greater Noida', 'Delhi']
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
