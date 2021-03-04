const mongoose = require('mongoose')

const dbConnect = ()=>{
    mongoose.connect(process.env.MONGODB_URL, {
        useFindAndModify:false,
        useUnifiedTopology:true,
        useCreateIndex: true,
        useNewUrlParser:true,
    })
    .then(() => console.log(`${new Date()} -- Database Connected`))
    .catch(err => console.error(err));
}

module.exports = dbConnect;