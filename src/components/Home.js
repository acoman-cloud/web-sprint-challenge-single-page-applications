import React from 'react';
import { useHistory } from 'react-router-dom';


export default function Home(){
	const history = useHistory();

	const routeToOrderForm =()=>{
		history.push('/pizza');
	}
	return (
		<div>
		<img src='../Assets/Pizza.jpg' alt='delicious pizza' /> {/*pathing sucks */}
		<button id='pizza?' onClick={routeToOrderForm}>Pizza?</button>
		</div>
	)
	
}