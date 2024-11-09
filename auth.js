// Setup passport with a local authentication stretegy
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/User');

passport.use(new LocalStrategy(async (username, password, done)=>{
    try{
        // console.log('Received Credentials: ', username, password);
        // Fetch the user data from the database
        const user = await User.findOne({email:username});
        // If user not found
        if(!user){
            console.log("User not found");
            return done(null, false, {message: 'Incorrect email'});
        }
        const isPasswordMatch = user.password === password ? true : false;

        // If password match
        if(isPasswordMatch){
            console.log("Authentication successfull");
            return done(null, user);
        }
        else{
            console.log("Incorrect Credentials");
            return done(null, false, { message: "Incorrect password"});
        }
    }
    catch(err){
        console.log("Something went wrong during Authentication");
        return done(err);
    }
}));

// Export configured passport
module.exports = passport;