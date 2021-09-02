import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.css"
import Home from './components/Pages/Home/Home';
import Services from './components/Pages/Services/Services';
import Products from './components/Pages/Products/Products';
import SignUp from './components/Pages/SignUp/SignUp';
function App() {
  return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/TRVL-App" exact component={Home}/>
          <Route path="/TRVL-App/services" exact component={Services}/>
          <Route path="/TRVL-App/products" exact component={Products}/>
          <Route path="/TRVL-App/sign-up" exact component={SignUp}/>
        </Switch>
      </Router>
     

  )
}

export default App
