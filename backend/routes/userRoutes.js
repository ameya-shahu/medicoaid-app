const express = require('express')
const User = require('../models/User');
const asyncHandler = require('express-async-handler')
const genJWT = require('../utils/generateJWT')

UserRoute = express.Router();


// user routes
UserRoute.post(
    '/register',
    asyncHandler(async (req, res)=>{

        // check if email present in request json or not
        
        const {email} = req.body;
        const userExists = await User.findOne({email:email})
        
        if(userExists){
            res.status(400);
            throw new Error(JSON.stringify({"email":"User already exists with same email id"}));
        }

        const user = await User.create(req.body);
        res.json({
            id: user._id,
            name: user.name,
             email: user.email,
            phoneNo: user.phoneNo,
            gender: user.gender,
            token: genJWT(user._id)
        })
        
        

        
    })
);






module.exports = UserRoute;