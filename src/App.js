
import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navigation';
import Home from './components/Navbar/pages/Home';
import Contact from './components/Navbar/pages/Contact';
import About from './components/Navbar/pages/About';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route path="/" exact component={Home}/>
        <Route path="/contact" exact component={Contact}/>
        <Route path="/about" exact component={About}/>
      </Router>
    </div>
  );
}

export default App;
