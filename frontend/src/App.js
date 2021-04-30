import React from 'react'
import './App.css';

import Home from './Components/Home/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AddPatient from './Components/Addpatient/AddPatient';
import { useSelector } from 'react-redux';
import NavbarContainer from './Components/Navbar/NavbarContainer';
import PatientsList from './Components/PatientMonitoring/PatientsList/PatientsList';
import PatientDetails from './Components/PatientMonitoring/PatientDetails/PatientDetails'

const App = () => {

  const userInfo = useSelector(state => state.userLogin.userInfo);
  

  return (
    <Router>
      {
        !userInfo ? (
          <Switch>
            <Route path='/register'>
              <Register />
            </Route>
            <Route path='/'>
              <Login />
            </Route>
          </Switch>
        ):(
          <div className="App">
              <NavbarContainer />
              <Switch>
                <Route path='/addPatient' component={AddPatient} />
                <Route path='/patientslist' component={PatientsList} />
                <Route path='/patientdetails' component={PatientDetails} />
                <Route path="/" component={Home} />
                
              </Switch>
            </div>
        )
      }
      
    </Router>
  );
}

export default App;
