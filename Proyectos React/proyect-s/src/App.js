import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Main from './components/main';
import Pagina2 from './components/Pagina2';
import LoadingPage from './LoadingPage';

class App extends Component {  
  render() {  
    return (  
    <div>
    <Router>
      <div>
        <Routes>
        <Route exact path='/' element={< LoadingPage />}></Route>
        <Route exact path='/components/main' element={< Main />}></Route> 
        </Routes>
      </div>
    </Router>
    </div>
   );  
  }  
}  

export default App;
