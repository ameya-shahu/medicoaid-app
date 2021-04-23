const expressAsyncHandler  = require("express-async-handler");
const Patient  = require( "../models/Patient");

const express = require("express");



let PatientRoute = express.Router();

// Patient routes

PatientRoute.post(
    '/register',
    expressAsyncHandler( async (req,res)=>{
        const { email } = req.body;
        const patientExist = await Patient.findOne({email:email})
        if(patientExist){
            res.status(400);
            throw new Error(JSON.stringify({"email":"Patient with same email already exists."}))
        }
        req.body.dateOfBirth = new Date(req.body.dateOfBirth);
        const patient = await Patient.create(req.body)
        res.json({
            id: patient._id,
            name: patient.name,
            email: patient.email,
            phoneNo: patient.phoneNo,
            gender: patient.gender,
            age: patient.getAge()
        })
    })
);

module.exports = PatientRoute;
