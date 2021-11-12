import React from 'react';
import { Link } from 'react-router-dom';

export default function PizzaForm({ submit, update, values, disabled, errors }){
	
	const onChange = evt=>{
		const {name, value, checked, type} = evt.target;
		const realValue = type === 'checkbox' ? checked : value;
		update(name, realValue)
	}

	const onSubmit =evt=>{
		evt.preventDefault();
		submit();
	}

	return (
		<form id='pizza-form' onSubmit={onSubmit}>
			<div className='errors'>
          		<div>{errors.name}</div>
          		<div>{errors.size}</div>
        	</div>
			<label><h2>Name of order</h2>
				<input
					type='text'
					name='name'
					id='name-input'
					value={values.name}
					onChange={onChange}
					maxLength='25'
				/>
			</label><br />
			<label><h2>size</h2>
				<select
					value={values.size}
					name='size'
					onChange={onChange}
					id='size-dropdown'
				>
				<option value='' >-- Select a Size --</option>
				<option value='5 inch' >5 inch</option>
				<option value='7 inch' >7 inch</option>
				<option value='10 inch' >10 inch</option>
				<option value='15 inch' >15 ich</option>
				</select>
			</label><br />
			<label><div className='wrapper'><h2>Toppings</h2><p>1.25 each</p></div>
				<div className='checkbox'>
					<label>Pepperoni
						<input
							type='checkbox'
							name='topping1'
							onChange={onChange}
							checked={values.topping1}
						/>
					</label>
					<label>Sausage
						<input
							type='checkbox'
							name='topping2'
							onChange={onChange}
							checked={values.topping2}
						/>
					</label>
					<label>Pineapple
						<input
							type='checkbox'
							name='topping3'
							onChange={onChange}
							checked={values.topping3}
						/>
					</label>
					<label>Bacon
						<input
							type='checkbox'
							name='topping4'
							onChange={onChange}
							checked={values.topping4}
						/>
					</label>
					<label>Hot stuff
						<input
							type='checkbox'
							name='topping5'
							onChange={onChange}
							checked={values.topping5}
						/>
					</label>
				</div>
			</label>
			<label><h3>Special Instructions</h3>
				<textarea
					name='specialInst'
					id='special-text'
				/>
			</label>
			<div className='submit'>
          		<Link to='/pizza/order'><button id='order-button' disabled={!values.name || !values.size}>submit</button></Link>
       		</div>
		</form>
	);
}