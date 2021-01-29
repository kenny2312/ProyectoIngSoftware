import './App.css';
import {BrowserRouter,Route,useLocation,Switch} from 'react-router-dom'
import  Form from './Components/login/formulario.js';
import  User from './Components/User/User';
import  SignInSide from './Components/login/login.js';
import Dashboard from './Components/dashboard/Dashboard'
import { useState } from 'react';
import UserContext from './Components/UserContext';
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
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
      
    </div>
  );
}

export default App;
