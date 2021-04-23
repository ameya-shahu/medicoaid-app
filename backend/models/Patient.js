const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Enter name of patient's name"],
    },
    dateOfBirth:{
        type: Date,
        required: [true,"Enter patient's Date of Birth"]
    },
    phoneNo:{
        type: String,
        required: [true, 'Please enter phone number of patient'],
        match: [/^\d{10}$/, 'Please enter valid phoneNo']
    },
    email:{
        type: String,
        required: [true,'Please enter E-mail ID of patient'],
        unique: true,
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    gender: {
        type: String,
        required: [true,'please mention gender of patient']
    },
    treatment: {
        type: Array,
    }
});

PatientSchema.methods.getAge = function(){
    let ageDifMs = (Date.now() - this.dateOfBirth.getTime());
    let ageDate = new Date(ageDifMs);
    let age = Math.abs(ageDate.getUTCFullYear() - 1970);
    return age;
}

const Patient = mongoose.model("Patient",PatientSchema);

module.exports = Patient;