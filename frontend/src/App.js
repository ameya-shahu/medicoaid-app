import React from 'react'
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AddPatient from './Components/Addpatient/AddPatient';
import { useSelector } from 'react-redux';
import NavbarContainer from './Components/Navbar/NavbarContainer';
import PatientsList from './Components/PatientMonitoring/PatientsList/PatientsList';
import PatientDetails from './Components/PatientMonitoring/PatientDetails/PatientDetails';
import Profile from './Components/DoctorProfile/Profile';
import AllocateMachine from './Components/AllocateMachine/AllocateMachine';
import RegisterMachine from './Components/RegisterMachine/RegisterMachine';
import DiseaseDetection from './Components/DiseaseDetection/DiseaseDetection';


const App = () => {

  const userInfo = useSelector(state => state.userLogin.userInfo);

  return (
    <Router>
      {
        !userInfo ? (
          <Switch>
            <Route path='/newMachine' component={AllocateMachine} />
            <Route path='/register'>
              <Register />
            </Route>
            <Route path='/'>
              <Login />
            </Route>
          </Switch>
        ) : (
          <div className="App">
            <NavbarContainer userInfo={userInfo} />
            <Switch>
              {/* Doctor's Profile */}
              <Route path='/profile' render={() => <Profile userInfo={userInfo} />} />
              {/* Patient details content */}
              <Route path='/patientdetails' component={PatientDetails} />
              {/* Home page content */}
              <Route path='/addPatient' component={AddPatient} />
              <Route path='/diseaseDetection' component={DiseaseDetection} />
              <Route path='/patientslist' component={PatientsList} />
              <Route path='/registerMachine' component={RegisterMachine} />
              {/* Home page */}
              <Route path="/" render={() => <Home userInfo={userInfo} />} />

            </Switch>
          </div>
        )
      }

    </Router>
  );
}

export default App;
