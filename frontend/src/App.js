import './App.css';
import NavbarContainer from './Components/Navbar/NavbarContainer';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import ThankYou from './ThankYou';

function App() {
  let user = false;
  return (
    <Router>
      {
        !user ? (
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
                <Route path="/">
                  <Home />
                </Route>
                
              </Switch>
              
            </div>
        )
      }
      
    </Router>
  );
}

export default App;
