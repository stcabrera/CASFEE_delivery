import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router} from 'react-router-dom';
import Home from './Pages/Home';
import Orders from './Pages/Orders';
import Drivers from './Pages/Drivers';

function App() {
  return (
    <Router>
      <div className="container"></div>
      <Route path="/" exact component={ Home }/>
      <Route path="/orders"  component={ Orders }/>
      <Route path="/drivers"  component={ Drivers }/>
    </Router>
  );
}

export default App;



