const jwt = require('jsonwebtoken')
const user = require('../models/User')
const asyncHandler = require('express-async-handler')


module.exports = authMiddleware = asyncHandler(async (req, res,next)=>{

    if(req.headers.authorization){
        try {
            let token = req.headers.authorization
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
            req.user=await User.findById(decoded.id);
            next();
        } catch (error) {
            res.status(401);
            throw new Error('Not authorised, invalid token');
        }
    }else{
        res.status(401);
        throw new Error('Authorization failed');
    }  
});