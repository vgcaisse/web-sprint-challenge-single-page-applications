import React, { useState, useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import PizzaForm from './components/Form'




const App = () => {

  const submit = (evt) => {
    evt.preventDefault();
    const newPizza = {

    }
  }




  return (
    <div>
      <nav>
        <div className='navLinks'>
          <Link to='/'>Home  |  </Link>
          <Link to='/order-pizza' id='order-pizza'>Make Your Own Pizza</Link>
        </div>
      </nav>
      
      <h1>Lambda Eats</h1>
      
       
      <PizzaForm id='order-pizza'/>
      
      {/* <nav>
        <div className='nav-links'>
          <Link to="/">Home</Link>
          <Link to="/order-pizza">Build Your Pizza!</Link>
        </div>
      </nav>

      <Switch>

        <Route path="/">
          <Home />
        </Route>

      </Switch>
       */}
    </div>
  );
};
export default App;
