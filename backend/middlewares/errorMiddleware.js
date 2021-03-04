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
            "errors":JSON.parse(err.message)
        });
    }
};

module.exports = { errorMiddleware };