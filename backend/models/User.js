const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'please enter name'],
    },
    department:{
        type: String
    },
    email:{
        type: String,
        required: [true,'Please enter E-mail ID'],
        unique: true,
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    phoneNo:{
        type: String,
        required: [true, 'Please enter phone number'],
    },
    password: {
        type: String,
        required:[true, 'please enter password']
    },
    gender: {
        type: String,
        required: [true,'please mention your gender']
    },
    address: {
        street1:{
            type: String,
            required: [true, 'address street1 is not present.']
        },
        street2: {
            type: String,
            required: [true, 'address street2 is not present.']
        },
        city: {
            type: String,
            required: [true, 'address city is not present.']
        },
        state: {
            type: String,
            required: [true, 'state is entered']
        },
        country: {
            type: String,
            required: [true, 'country is not entered']
        },
    },
});

UserSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

UserSchema.methods.isPasswordMatch = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
}

const User = mongoose.model("User", UserSchema);

module.exports = User;