const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const userschema = new mongoose.Schema({
 username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  },
  roles:{
    type:String,
    enum: ['user', 'admin'], // Define roles here
        default: 'user' // Default role is 'user'
  }
});

userschema.pre('save', async function(next){
    const user = this;

    // Hash the password only if it has been modified (or is new)
    if(!user.isModified('password')) return next();
    try{
        // hash password generation
        const salt = await bcrypt.genSalt(10);

        // hash password
        const hashedPassword = await bcrypt.hash(user.password, salt);
        
        // Override the plain password with the hashed one
        user.password = hashedPassword;
        next();
    }catch(err){
        return next(err);
    }
})

userschema.methods.comparePassword = async function(candidatePassword){
    try{
        // Use bcrypt to compare the provided password with the hashed password
        const isMatch = await bcrypt.compare(candidatePassword, this.password);
        return isMatch;
    }catch(err){
        throw err;
    }
}
const User = mongoose.model('user', userschema);

module.exports = User;