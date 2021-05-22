const express = require('express')
const dotenv = require('dotenv')

//Middlewares
const error = require('./middlewares/errorMiddleware');
const authMiddleware = require('./middlewares/authMiddleware');

// router imports
const UserRoute = require('./routes/userRoutes');
const PatientRoute = require('./routes/patientRoutes');
const SensorMachineRoute = require('./routes/sensorMachineRoute')


dotenv.config();

const app = express();

// database connection
require('./config/dbConnect')();

app.use(express.json());



// Routes
app.use('/api/users', UserRoute);
app.use('/api/patients',PatientRoute);
app.use('/api/sensormachine',SensorMachineRoute)

// Public files
app.use('/', express.static(__dirname + '/public'));

// errorhandler
app.use(error.errorMiddleware)

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`${new Date()} --  Backend server is running on port no ${PORT}`)
});

