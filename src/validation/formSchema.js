import * as yup from 'yup';

const formSchema = yup.object().shape({
	name: yup
		.string()
		.trim()
		.required('Name for order is required')
		.min(2, 'name must be at least 2 characters'),
	size: yup
		.string()
		.required('Choose the size of Pizza you desire.'),
	topping1: yup.boolean(),
	topping2: yup.boolean(),
	topping3: yup.boolean(),
	topping4: yup.boolean(),
	topping5: yup.boolean(),
	specialInst: yup
		.string()
		.trim()
})

export default formSchema;