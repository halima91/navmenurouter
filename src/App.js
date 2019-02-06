import React, { Component } from 'react';
import './App.css';
import Navmenu  from './navmenu'
import {BrowserRouter} from 'react-router-dom' ;

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
       <Navmenu/>
    
       </BrowserRouter>
      </div>
      
    );
  }
}

export default App;
