const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
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

// Function to store password in the form of hash
userSchema.pre('save', async function(next){
    const user = this; // for ech user

    // Hash the function only if it has been modified
    if(!user.isModified('password')) return next();

    try{
        // hash password generation
        const salt = await bcrypt.genSalt(10);

        // hash password
        const hashedPassword = await bcrypt.hash(user.password, salt);

        // override the plain password with the hash password
        user.password = hashedPassword;
        next();  // hashing the password is completed now proceed to save in DB
    }catch(err){
        return next(err);
    }
});

// comapre the password
userSchema.methods.comparePassword = async function(candidatePassword){
    try{
        // Use bcrypt to compare the provided password with the hashed password
        const isMatch = await bcrypt.compare(candidatePassword, this.password);
        return isMatch;
    }catch(err){
        throw err;
    }
}

const User = mongoose.model('User', userSchema);
module.exports = User;
