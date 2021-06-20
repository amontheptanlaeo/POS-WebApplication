
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import ResetPass from './pages/ResetPass'
/* import DashBoard from './pages/Dashboard' */
import Nav from './components/Navbar'
import Blank from './components/Blank'

import AdminLayout from "./components/Dashboard/layouts/Admin/Admin.js";
//import "./components/Dashboard/assets/scss/black-dashboard-react.scss";
import "./components/Dashboard/assets/demo/demo.css";
import "./components/Dashboard/assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import ThemeContextWrapper from "./components/Dashboard/components/ThemeWrapper/ThemeWrapper";
import BackgroundColorWrapper from "./components/Dashboard/components/BackgroundColorWrapper/BackgroundColorWrapper";


function App() {
  return (
    <ThemeContextWrapper>
    <BackgroundColorWrapper>
      <Router>
        <Nav/>
        <Blank/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Login"   component={Login} />
          <Route path="/Register"  component={Register} />
          <Route path="/ResetPassword"  component={ResetPass} />
          <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
        </Switch>
    </Router>
    
    </BackgroundColorWrapper>
    </ThemeContextWrapper>
  );
}

export default App;
