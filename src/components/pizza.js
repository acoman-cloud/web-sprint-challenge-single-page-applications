import React from 'react';

function Pizza({ details }){
	if(!details){
		return <h3>Fetching the truth...</h3>
	}

	return (
		<div>
			<h2>Name of Order: {details.name}</h2>
			<p>Size of Pizza: {details.size}</p>
			<h3>Toppings:</h3>
			{details.topping1 ? <p>Pepperoni</p> : <p> </p>}
			{details.topping2 ? <p>Sausage</p> : <p> </p>}
			{details.topping3 ? <p>Pineapple</p> : <p> </p>}
			{details.topping4 ? <p>Bacon</p> : <p> </p>}
			{details.topping5 ? <p>Hot Stuff</p> : <p> </p>}
			
			<h4>Special Instructions</h4><p>{details.specialInst ? details.specialInst : 'none'}</p>
		</div>
	);
}

export default Pizza;
