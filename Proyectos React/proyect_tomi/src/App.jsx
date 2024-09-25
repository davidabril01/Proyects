import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Principal from './components/Principal';
import Gestion from './components/Gestion';
import Ventas from './components/Ventas';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <header className='App-header'>
          </header>
          <main className="App-main">
            <Routes>
              <Route exact path='/Gestion' element={<Gestion />} />
              <Route exact path='/Ventas' element={<Ventas />} />
              <Route exact path='/' element={<Principal />} />
            </Routes>
          </main>
        </Router>
      </div>
    );
  }
}

export default App;