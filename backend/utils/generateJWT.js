const jwt =  require('jsonwebtoken')

module.exports = generateJWT= (id)=>{
    return jwt.sign({id: id}, process.env.JWT_SECRET_KEY,{
        expiresIn: '30d',
    });
};