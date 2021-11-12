import React from 'react';


export default function PizzaForm({ submit, update, values }){
	
	const onChange = evt=>{
		console.log(evt.target)
		const name = evt.target.name;
		const { value } = evt.target;
		update(name, value)
	}

	const onSubmit =evt=>{
		evt.preventDefault();
		submit();
	}

	return (
		<form id='pizza-form'>
			<label><h2>Name of order</h2>
				<input
					type='text'
					name='name'
					id='name-input'
					value={values.name}
					oneChange={onChange}
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
							name='pepperoni'
						/>
					</label>
					<label>Sausage
						<input
							type='checkbox'
							name='sausage'
						/>
					</label>
					<label>Pineapple
						<input
							type='checkbox'
							name='pineapple'
						/>
					</label>
					<label>Bacon
						<input
							type='checkbox'
							name='bacon'
						/>
					</label>
					<label>Hot stuff
						<input
							type='checkbox'
							name='hotstuff'
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
          		<button disabled={!values.name || !values.size}>submit</button>
       		</div>
		</form>
	);
}