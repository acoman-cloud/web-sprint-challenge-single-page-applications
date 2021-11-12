import React from 'react';

function Pizza({ details }){
	if(!details){
		return <h3>Fetching the trash...</h3>
	}

	return (
		<div>
			<h2>Name of Order: {details.name}</h2>
			<p>Size of Pizza: {details.size}</p>
			<h3>Toppings:</h3>
			{
				details.topping1 ? <p>Pepperoni</p> : null
			}
			{
				details.topping2 ? <p>Sausage</p> : null
			}
			{
				details.topping3 ? <p>Pineapple</p> : null
			}
			{
				details.topping4 ? <p>Bacon</p> : null
			}
			{
				details.topping5 ? <p>Hot Stuff</p> : null
			}
			{
				!details.topping1&&!details.topping2&&!details.topping3&&!details.topping4&&!details.topping5 ? <p>NONE</p> : null
			}
		</div>
	);
}

export default Pizza;
