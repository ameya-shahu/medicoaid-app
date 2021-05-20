const expressAsyncHandler = require("express-async-handler");
const express = require("express");

const SensorMachine = require("../models/SensorMachine");
const User = require("../models/User")
const Patient = require("../models/Patient")


let SensorMachineRoute = express.Router()


SensorMachineRoute.post(
    '/newmachine',
    expressAsyncHandler(async (req, res)=>{
        const { machineCode } = req.body
        const existMachine = await SensorMachine.findOne({ machineCode: machineCode })
        if(existMachine){
            throw new Error(JSON.stringify({"sensorMachine": "Machine already exist with given machineCode"}))
        }else{
            const machine = await SensorMachine.create(req.body);
            res.json(machine)
        }
    })
)

SensorMachineRoute.put(
    '/allocateMachine',
    expressAsyncHandler(async (req, res)=>{
        const {machineCode, authCode, identifyName, userId } = req.body;

        const machine = await SensorMachine.findOne({machineCode:machineCode});

        if(! machine){
            throw new Error(JSON.stringify({"sensorMachine": "Machine not exist with given machine code. contact customer care"}))
        }else{
            if(await machine.isAuthCodeMatch(authCode)){
                const user = await User.findOne({_id:userId})
                console.log(user)
                const update = {
                    identifyName: identifyName,
                    allocatedTo: user
                }
                const filter = {machineCode: machineCode};
                let machine = await SensorMachine.findOneAndUpdate(filter, update,{new: true});
                res.json(machine);
            }
        }

    })
)

SensorMachineRoute.get(
    '/listMachine',
    expressAsyncHandler(async (req, res)=>{
        const { userId } = req.body;

        if(!userId){
            throw new Error(JSON.stringify({"sensorMachine": "Not Authorized user. contact customer care"}))
        }else{
            const user = await User.findOne({_id:userId})
            if(user){
                const sensorMachines = await SensorMachine.find({allocatedTo: user._id});
                res.json(sensorMachines)
            }else{
                throw new Error(JSON.stringify({"sensorMachine": "No user found. contact customer care"}))
            }
        }
    })
)


SensorMachineRoute.post(
    '/assignMachine',
    expressAsyncHandler(async (req, res)=>{
        const {patientId, machineId} = req.body;

        const patient =  await Patient.findOneAndUpdate({_id:patientId}, {sensorMachine: machineId},{new:true});

        if(patient){
            const sensorMachine =  await SensorMachine.findOneAndUpdate({_id:machineId}, {inUse: true},{new:true})
            res.json({ sensorMachine, patient })
        }
    })
)

SensorMachineRoute.post(
    '/freeMachine',
    expressAsyncHandler(async (req, res)=>{
        const {patientId, machineId} = req.body;

        const patient =  await Patient.findOneAndUpdate({_id:patientId}, {sensorMachine: null},{new:true});

        if(patient){
            const sensorMachine =  await SensorMachine.findOneAndUpdate({_id:machineId}, {inUse: false},{new:true})
            res.json({ sensorMachine, patient })
        }
    })
)

module.exports = SensorMachineRoute;