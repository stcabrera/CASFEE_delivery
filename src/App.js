import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom';
import Home from './Pages/Home';
import Orders from './Pages/Orders';
import Drivers from './Pages/Drivers';
import Header from './Components/Header'

function App() {
  return (
    <Router>
    
        <Header/>
     
      <Route path="/" exact component={ Home }/>
      <Route path="/orders"  component={ Orders }/>
      <Route path="/drivers"  component={ Drivers }/>
    </Router>
  );
}

export default App;



