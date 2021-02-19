import './App.css';
import {BrowserRouter,Route,useLocation,Switch} from 'react-router-dom'
import  Form from './Components/login/formulario.js';
import  User from './Components/User/User';
import  SignInSide from './Components/login/login.js';
import Dashboard from './Components/dashboard/Dashboard'
import { useState } from 'react';
import UserContext from './Components/UserContext';
import Landing from './Components/LandingPage/User';
import Emterprice from './Components/Emp/User';
import "bootstrap/dist/css/bootstrap.min.css";
import  TransitionAlerts from './Components/cdist/alert'
import Emterpricecli from './Components/Empcli/User';

function App() {
  const [user,setUser]=useState({});
  return (
    <UserContext.Provider value={{user,setUser}}>
    <div className="App">
       <BrowserRouter>
       <Switch>
       <Route  path='/login' exact  component={SignInSide} ></Route>
        <Route path='/User' exact component={User} ></Route>
        <Route path='/dash' exact component={Dashboard} ></Route>
        <Route path='/Emp' exact component={Emterprice} ></Route>
        <Route path='/EmpCli' exact component={Emterpricecli} ></Route>
        <Route path='/' exact component={Landing } ></Route>
       <Route exact path="*">
            <NoMatch />
          </Route>
          </Switch>
       </BrowserRouter>
       
    </div>
    </UserContext.Provider>
  );
}
function NoMatch() {
  let location = useLocation();

  return (
    <div className="container mt-5 ">
    <div className="alert alert-danger" role="alert">
    <h4 className="alert-heading">UPSS!!!</h4>
    <p>Parece que se perdio esta. ruta no existe : <code>{location.pathname}</code></p>
    <hr></hr>
    <p className="mb-0">Por favor si tiene problemas comuniquese con el administrador.</p>
    </div>
    <TransitionAlerts message="ahhhh"></TransitionAlerts>
   
    </div>
  );
}

export default App;
