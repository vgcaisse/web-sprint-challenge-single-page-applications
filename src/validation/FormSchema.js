import * as yup from "yup";

const formSchema = yup.object().shape({
	name: yup
		.string()
		.trim()
		.required("* Should be a valid last name!!")
		.min(2, "* Username must be at least 2 characters long!")
});

export default formSchema;