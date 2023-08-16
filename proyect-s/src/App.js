import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Pagina1 from './components/Pagina1';
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
        <Route exact path='/Component/pagina1' element={< Pagina1 />}></Route> 
        </Routes>
      </div>
    </Router>
    </div>
   );  
  }  
}  

export default App;
