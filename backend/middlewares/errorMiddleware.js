function isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}


const errorMiddleware = (err, req, res, next) =>{

    if(err.name==="ValidationError"){
        let errors = {
            "errors":{}
        };

      Object.keys(err.errors).forEach((key) => {
        errors.errors[key] = err.errors[key].message;
      });
      
      res.status(400).json(errors);
    }else if(err.name==="Error"){
        const errorStatusCode = res.statusCode === 200 ? 500 : res.statusCode;
        res.status(errorStatusCode);
        res.json({
            "errors": isJson(err.message) ? JSON.parse(err.message) : err.message,
        });
    }
};

module.exports = { errorMiddleware };