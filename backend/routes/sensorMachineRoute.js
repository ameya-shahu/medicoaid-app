const expressAsyncHandler = require("express-async-handler");
const express = require("express");
const SensorMachine = require("../models/SensorMachine");


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
        try{
            const {machineCode, authCode, identifyName, userId } = req.body;

            const machine = await SensorMachine.findOne({machineCode:machineCode});

            if(! machine){
                throw new Error(JSON.stringify({"sensorMachine": "Machine not exist with given machine code. contact customer care"}))
            }else{
                if(await machine.isAuthCodeMatch(authCode)){
                    const update = {
                        identifyName: identifyName,
                        allocatedTo: userId
                    }
                    const filter = {machineCode: machineCode};
                    let machine = await SensorMachine.findOneAndUpdate(filter, update,{new: true});
                    res.json(machine);
                }
            }
        }catch (e) {
            res.status(400);
            console.log(e);
            throw new Error(JSON.stringify({"sensorMachine": "Something went wrong"}))
        }

    })
)

module.exports = SensorMachineRoute;