const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')


const SensorMachineSchema = new mongoose.Schema({
    identifyName: {
        type: String
    },
    allocatedTo:{
     type: mongoose.Schema.Types.ObjectId,
     ref: 'User'
    },
    machineCode: {
        type: String,
        required: [true, 'Machine code is not entered']
    },
    parameterType: {
        type: [String]
    },
    authCode: {
      type: String,
        required: [true, 'Authcode is not entered']
    },
    inUse: {
        type: Boolean
    }
});

SensorMachineSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt();
    this.authCode = await bcrypt.hash(this.authCode, salt);
    next();
})

SensorMachineSchema.methods.isAuthCodeMatch = async function(enteredAuthCode){
    return await bcrypt.compare(enteredAuthCode, this.authCode);
}

const SensorMachine = new mongoose.model('SensorMachine', SensorMachineSchema);

module.exports = SensorMachine;