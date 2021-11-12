import React, { useState } from "react";
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import axios from 'axios';

import Home from './components/Home';
import PizzaForm from './components/PizzaForm';
import pizza from './components/pizza';

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

const App = () => {
  const [pizza, setPizza] = useState()
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState('')

  const updateForm = (inputName, inputValue)=>{
    setFormValues({ ...formValues, [inputName]:inputValue });
  }

  const submitForm = () =>{
    const newPizza ={
      name: formValues.name.trim(),
      size: formValues.size,
      topping1: formValues.topping1,
      topping2: formValues.topping2,
      topping3: formValues.topping3,
      topping4: formValues.topping4,
      topping5: formValues.topping5,
      specialInst: formValues.specialInst.trim(),
    }
    if(newPizza.name.lastIndexOf.length <= 2){
      setFormErrors('name must be at least 2 characters');
      return;
    }
    axios.post('https://reqres.in/api/orders', newPizza)
      .then(esp=>{
        const dbPizza = esp.data;
        console.log(esp);
      })
  }

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
      <Route path='/pizza'>
        <PizzaForm
        submit={submitForm}
        update={updateForm}
        values={formValues}
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
