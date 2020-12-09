import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Orders from './Pages/Orders';
import Drivers from './Pages/Drivers';
import Header from './Components/Layout/Header'
import Dashboard from './Pages/Dashboard';

function App() {
  return (
       
    <Router>
      <Header />
      <Route path="/" exact component={Dashboard} />
      <Route path="/orders" component={Orders} />
      <Route path="/drivers" component={Drivers} />
    </Router>
  );
}

export default App;



