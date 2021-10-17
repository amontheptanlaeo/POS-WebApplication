
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//Page OnLogout
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import ResetPass from './pages/ResetPass'

//Component
import Nav from './components/Navbar'
import NavAdmin from './components/NavbarAdmin'
import Blank from './components/Blank'

//Page OnLogIn
import Product from './pages/Product'
import NotFound from './pages/NotFound'
import Dashboard from './pages/Dashboard';
import Withdraw from './pages/Withdraw';
import Profit from './components/Dashboard/views/Profit';
import TableList from './components/Dashboard/views/TableList';
import SellPage from './pages/SellPage';
import ManageBranch from './pages/ManageBranch';
import Recieve from './pages/Recieve';
import AddGoods from './pages/AddGoods';
import AddEmp from './pages/AddEmp';
import AddCategory from './pages/AddCategory';
import AddRecieve from './pages/AddRecieve';
import OverAll from './pages/OverAll';
import BillList from './pages/BillList';
import SellGoods from './pages/SellGoods';
import SetWithdraw from './pages/SetWithdraw';
import HistoryRecieve from './pages/HistoryRecieve';
import HistorySell from './pages/HistorySell';

// import AdminLayout from "./components/Dashboard/layouts/Admin/Admin.js";
// //import "./components/Dashboard/assets/scss/black-dashboard-react.scss";
// import "./components/Dashboard/assets/demo/demo.css";
// import "./components/Dashboard/assets/css/nucleo-icons.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";

// import ThemeContextWrapper from "./components/Dashboard/components/ThemeWrapper/ThemeWrapper";
// import BackgroundColorWrapper from "./components/Dashboard/components/BackgroundColorWrapper/BackgroundColorWrapper";


function App() {


  if (localStorage.getItem('user')) {

    return (
      <Router>
      
        <NavAdmin />

        <Switch>

          <Route path="/" exact component={Dashboard} />
          <Route path="/Conclude" component={Profit} />
          <Route path="/Profit" component={OverAll} />
          <Route path="/Product" component={Product} />
          <Route path="/Withdraw" component={Withdraw} />
          <Route path="/Sell" component={SellPage} />
          <Route path="/Branch" component={ManageBranch} />
          <Route path="/Recieve" component={Recieve} />
          <Route path="/AddProduct" component={AddGoods} />
          <Route path="/AddEmployee" component={AddEmp} />
          <Route path="/AddCategory" component={AddCategory} />
          <Route path="/AddRecieve" component={AddRecieve} />
          <Route path="/ListBill" component={BillList} />
          <Route path="/SellGoods" component={SellGoods} />
          <Route path="/SetWithdraw" component={SetWithdraw} />
          <Route path="/history/recieve/:bill" component={HistoryRecieve} />
          <Route path="/history/sell/:bill" component={HistorySell} />

          <Route path="" component={NotFound} />
        </Switch>
      </Router>
    )

  }

  return (
    <Router>
      <Nav />
      <Blank />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Login" component={Login} />
        <Route path="/Register" component={Register} />
        <Route path="/ResetPassword" component={ResetPass} />
        <Route path="" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
