const express = require('express')
const User = require('../models/User');
const asyncHandler = require('express-async-handler')
const genJWT = require('../utils/generateJWT')

// middleware
const authMiddleware = require('../middlewares/authMiddleware')

UserRoute = express.Router();


// user routes

/** User registration endpoint */
UserRoute.post(
    '/register',
    asyncHandler(async (req, res) => {

        // check if email present in request json or not

        const { email } = req.body;
        console.log(req.body);
        const userExists = await User.findOne({ email: email })
    
        if (userExists) {
            res.status(400);
            throw new Error(JSON.stringify({ "email": "User already exists with same email id" }));
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

/** User Login endpoint */
UserRoute.post(
    '/login',
    asyncHandler(async (req, res) => {
        const { email, password } = req.body;

        const user = await User.findOne({ email: email });


        if (user) {
            /** If user exists match password */
            if (user.isPasswordMatch) {
                res.status(200)
                    .json({
                        "id": user._id,
                        "name": user.name,
                        "email": user.email,
                        "phoneNo": user.phoneNo,
                        "gender": user.gender,
                        "token": genJWT(user._id)
                    })
            } else {
                res.status(401);
                throw new Error(JSON.stringify({ "password": "invalid password" }))
            }
        } else {
            /**if user not exists return error */
            res.status(401);
            throw new Error(JSON.stringify({ "email": "no user exist with entered email" }))
        }
    })
);

/** User update */
UserRoute.put(
    '/:id',
    authMiddleware,
    asyncHandler(async (req, res) => {
        console.log("route hit")
        /** check incase of email updation that if another already exist with same email id or not */

        const { email } = req.body;
        const user = await User.findOne({ email: email }) // find user by email id

        /**if there is no user with same email or id in request is same as that of found user then update else throw error */
        if (!user || user._id === req.params.id) {
            const updatedUser = await User.findByIdAndUpdate(
                req.params.id,
                req.body,
                {
                    new: true,
                    runValidators: true,
                }
            );
            console.log(updatedUser)
            res.json({
                "id": updatedUser._id,
                "name": updatedUser.name,
                "email": updatedUser.email,
                "phoneNo": updatedUser.phoneNo,
                "gender": updatedUser.gender,
                "token": genJWT(updatedUser._id)
            })
        } else {
            throw new Error(JSON.stringify({ "email": "Cannot update email as user already exist with same email." }))
        }



    })
)


/** Fetech user details */
UserRoute.get(
    '/',
    authMiddleware,
    asyncHandler(async (req, res) => {
        let token = req.headers.authorization
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = await User.findById(decoded.id);
        res.json({
            "id": user._id,
            "name": user.name,
            "email": user.email,
            "phoneNo": user.phoneNo,
            "gender": user.gender,
            "token": genJWT(user._id)
        })
    })
);





module.exports = UserRoute;