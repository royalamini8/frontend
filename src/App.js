import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import About from './components/pages/About';

function App() {

  return (
    <>
      <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component= {Home} />
        <Route path='/sign-up' component={SignUp}/>
        <Route path='/about' component={About}/>
      </Switch>
      </Router>
  
   
    </>
  );
}

export default App;
