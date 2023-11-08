import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Principal from './components/Principal';
import Menu from './components/Menu';
import Gestion from './components/Gestion';
import Ventas from './components/Ventas';

class App extends Component {  
  render() {  
    return (  
    <div className='App'>
      <header className='App-header'>
        <Menu/>
      </header>
      <main className="App-main">
        <Principal/>
      </main>
    <Router>
      <div>
        <Routes>
        <Route exact path='/Gestion' element={< Gestion />}></Route> 
        <Route exact path='/Ventas' element={< Ventas />}></Route>
        </Routes>
      </div>
    </Router>
    </div>
   );  
  }  
}  

export default App;
