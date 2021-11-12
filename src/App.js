import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import schema from './validation/formSchema'
import * as yup from 'yup';

import Home from './components/Home';
import PizzaForm from './components/PizzaForm';
import Pizza from './components/Pizza'

const initialFormValues = {
  name: '',
  size: '',
  topping1: false,
  topping2: false,
  topping3: false,
  topping4: false,
  topping5: false,
  specialInst: '',
}
const initialFormErrors = {
  name: '',
  size: '',
}
const initialPizza = []
const initialDisabled = true


const App = () => {
  const [pizzas, setPizzas] = useState(initialPizza)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const updateForm = (inputName, inputValue)=>{
    validate(inputName, inputValue);
    setFormValues({ ...formValues, [inputName]:inputValue });
  }

  const submitForm = () =>{
    const newPizzas ={
      name: formValues.name.trim(),
      size: formValues.size,
      topping1: formValues.topping1,
      topping2: formValues.topping2,
      topping3: formValues.topping3,
      topping4: formValues.topping4,
      topping5: formValues.topping5,
      specialInst: formValues.specialInst.trim(),
    }
    axios.post('https://reqres.in/api/orders', newPizzas)
      .then(esp=>{
        setPizzas([esp.data, ...pizzas])
      })
      .catch(err=>console.error(err))
      .finally(()=>setFormValues(initialFormValues));
  }

  const validate = (name, value) => {
    yup.reach(schema, name).validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

  useEffect(() => {
    // 🔥 STEP 9- ADJUST THE STATUS OF `disabled` EVERY TIME `formValues` CHANGES
    schema.isValid(formValues).then(valid => setDisabled(!valid));
  }, [formValues])

  return (
    <div className='App'>
      <nav>
        <h1 className='store-header'>Lambda Eats</h1>
        <div className='nav-links'>
          <Link to="/">Home </Link>
          <Link id='order-pizza' to="/pizza">Pizza?</Link>
        </div>
      </nav>

      <Switch>
      <Route path='/pizza/order'>
        {
        pizzas.map(pizza=>{
          return (
            <Pizza details={pizza} />
          )
        })
      }
      </Route>
      <Route path='/pizza'>
        <PizzaForm
        submit={submitForm}
        update={updateForm}
        values={formValues}
        disabled={disabled}
        errors={formErrors}
      />
      </Route>
      <Route path='/'>
        <Home />
      </Route>
      </Switch>
    </div>
  );
};
export default App;
