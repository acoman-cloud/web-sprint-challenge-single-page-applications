describe('App', ()=>{
	beforeEach(()=>{
		cy.visit('http://localhost:3000/');
	})

	const nameInput =()=>cy.get('input[name=name]');
	const sizeInput=()=>cy.get('select[name=size]');
	const toppingInput=()=>cy.get('[type="checkbox"]');
	const pizzaBtn = ()=>cy.get('button[id="pizza?"]');
	const orderBtn =()=>cy.get('button[id="order-button"]');

	it('sanity check to make sure tests work', ()=>{
		// it is a test
		//'expect' is assertion
		//there can be multiple assertions
		// buyt they must all relate to tjhe 'one thing' we're testsing
		expect(1 + 2).to.equal(3);
		expect(2+2).not.to.equal(5);
		expect({}).not.to.equal({}); //===
		expect({}).to.eql({}); // ==
	})

	it('types into input fields', ()=>{
		pizzaBtn().click();
		nameInput()
			.should('have.value', '')
			.type('Anthony')
			.should('have.value', 'Anthony')
	})

	it('select multiple toppings', ()=>{
		pizzaBtn().click();
		toppingInput().check()
	})

	it('checking submit', ()=>{
		pizzaBtn().click();
		nameInput().type('crayolla');
		sizeInput().select('5 inch');
		orderBtn().click();
		cy.contains('crayolla').should('exist');
	})
})