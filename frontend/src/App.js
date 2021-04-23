import React from 'react'
import './App.css';
import NavbarContainer from './Components/Navbar/NavbarContainer';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import ThankYou from './ThankYou';
import { useSelector } from 'react-redux';

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
            <Route path='/thankyou'>
              <ThankYou />
            </Route>
            <Route path='/'>
              <Login />
            </Route>
          </Switch>
        ):(
          <div className="App">
            <NavbarContainer />
              <Switch>
                <Route path='/addPatient' component={ThankYou} />
                <Route path="/" component={Home} />
                
              </Switch>
            </div>
        )
      }
      
    </Router>
  );
}

export default App;
