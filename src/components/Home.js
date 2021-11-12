import React from 'react';
import { useHistory } from 'react-router-dom';


export default function Home(){
	const history = useHistory();

	const routeToOrderForm =()=>{
		history.push('/PizzaForm');
	}
	return (
		<div>
		<img src='/Assets/Pizza.jpg' alt='delicious pizza' />
		<button onClick={routeToOrderForm}>Pizza?</button>
		</div>
	)
}