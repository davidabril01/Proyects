import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container } from "react-bootstrap";
import "./App.css";
import HeaderNoUser from "./components/PaginaNoUser/header";
import HeaderUser from "./components/PaginaUser/header";
import UserIn from './components/PaginaLogIn/UserIn';
import SingIn_layout from './components/PaginaLogIn/SignIn_layout';

class App extends Component {  
  render() {  
    return (  
    <div>

    
    <Router>
      <div>
        <Routes>
        <Route exact path='/' element={< HeaderNoUser />}></Route>
        <Route exact path='/UserIn' element={< UserIn />}></Route> 
        <Route exact path='/SingIn_layout' element={< SingIn_layout />}></Route>
        </Routes>
      </div>
    </Router>
    </div>
   );  
  }  
}  

export default App;
