import React, { useState, useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import schema from './validation/FormSchema';
import * as yup from 'yup';

import Home from './components/Home';
import PizzaForm from './components/Form'



const initialFormValues = {
  username: '',
  email: '',
  password: '',
  checked: false,
}

const formErrors = {
  name: 'Your name should be at least 2 characters long',
}

const App = () => {

  const [formValues, setFormValues] = useState(initialFormValues); 
  const [errors, setError] = useState(formErrors);
  const [order, setOrder] = useState([]);

  const submit = (evt) => {
    evt.preventDefault();
    const newPizza = {

    }
  }

  const updateForm = (name, value) => {
    validate(name, value)
    setFormValues({ ...formValues, [name]: value});
  }

  const submitForm = () => {
    axios.post(`https://reqres.in/api/orders`)
    .then(res => {
      setOrder([ res.data, order ])
    })
    .catch(err => console.errors(err))
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => setError({ ...formErrors, [name]: '' }))
    .catch(err => setError({ ...formErrors, [name]: err.errors[0] }))
  }

  return (
    <div>
      <nav>
        <div className='navLinks'>
          <Link to='/'>Home | </Link>
          <Link to='/pizza' id='order-pizza'>Make Your Own Pizza |</Link>
        </div>
      </nav>
      
      <h1>Lambda Eats</h1>
      
       
      <PizzaForm id='pizza-form'
        values={formValues}
        change={updateForm}
        errors={formErrors}
        submit={submitForm}
      />
      
      {
        order.map(order => {
          <div>
            <p>{order.created}</p>
            <p>{order.name}</p>
          </div>
        })
      }

<Switch>

<Route path="/">
  <Home />
</Route>

</Switch>
      {/* <nav>
        <div className='nav-links'>
          <Link to="/">Home</Link>
          <Link to="/order-pizza">Build Your Pizza!</Link>
        </div>
      </nav>

     
       */}
    </div>
  );
};
export default App;
