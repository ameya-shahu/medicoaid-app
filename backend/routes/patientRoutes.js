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

/* update patient details */

PatientRoute.put(
    '/:id',
    expressAsyncHandler(async (req, res) => {
        //console.log("route hit")
        /** check incase of email updation that if another patient already exist with same email id or not */

        const { email } = req.body;
        const patient = await Patient.findOne({ email: email }) // find user by email id

        /**if there is no patient with same email or id in request is same as that of found patient then update else throw error */
        if (!patient || patient._id === req.params.id) {
            const updatedPatient = await Patient.findByIdAndUpdate(
                req.params.id,
                req.body,
                {
                    new: true,
                    runValidators: true,
                }
            );
            console.log(updatedPatient)
            res.json({
                "id": updatedPatient._id,
                "name": updatedPatient.name,
                "email": updatedPatient.email,
                "phoneNo": updatedPatient.phoneNo,
                "gender": updatedPatient.gender,
            })
        } else {
            throw new Error(JSON.stringify({ "email": "Cannot update email as patient already exist with same email." }))
        }
    })
)

module.exports = PatientRoute;
