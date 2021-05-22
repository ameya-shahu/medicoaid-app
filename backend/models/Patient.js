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
    },
    sensorMachine: {
        machineId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'SensorMachine'
        },
        machineCode:{
            type:String
        }
    }
});

PatientSchema.virtual('age').get(function () {
    let temp = new Date(this.dateOfBirth)
    let ageDifMs = (Date.now() - temp.getTime());
    let ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
})

// PatientSchema.methods.getAge = function(){
//
// }

const Patient = mongoose.model("Patient",PatientSchema);

module.exports = Patient;