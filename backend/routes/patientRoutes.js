const expressAsyncHandler  = require("express-async-handler");
const Patient  = require( "../models/Patient");

const express = require("express");



let PatientRoute = express.Router();

// Patient routes

// Register New Patients
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

// List all the Patients
/* This is paginated endpoint */
PatientRoute.get(
    '/',
    expressAsyncHandler(async (req, res)=>{
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);

        const skipIndex = (page - 1) * limit;

        const patientList = await Patient.find({})
            .sort({name:1})
            .limit(limit)
            .skip(skipIndex)
            .select(['name', 'gender']);

        if (patientList.length>0){
            res.status(200);
            res.json(patientList);
        }else{
            res.status(404);
            throw new Error(JSON.stringify({"patientsList": "No patient record found on this page"}))
        }
    })
)
module.exports = PatientRoute;
