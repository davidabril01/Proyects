import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container } from "react-bootstrap";
import "./App.css";
import HeaderNoUser from "./components/PaginaNoUser/header";
import HeaderUser from "./components/PaginaUser/header";
import LogIn from './components/PaginaLogIn/LogIn';
import SignIn from './components/PaginaLogIn/SingIn';

class App extends Component {  
  render() {  
    return (  
    <div>

    
    <Router>
      <div>
        <Routes>
        <Route exact path='/' element={< HeaderNoUser />}></Route>
        <Route exact path='/LogIn' element={< LogIn />}></Route> 
        <Route exact path='/SignIn' element={< SignIn />}></Route>
        </Routes>
      </div>
    </Router>
    </div>
   );  
  }  
}  

export default App;
