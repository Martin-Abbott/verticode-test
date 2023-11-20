import IFormProps from "../models/FormProps";

const Form: React.FC<IFormProps> = ({
	setShowForm,
	setInputs,
	initialState,
}) => {
	const handleChange = (
		event:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLTextAreaElement>
	) => {
		const { name, value } = event.target;
		setInputs((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleNestedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setInputs((prevData) => ({
			...prevData,
			location: {
				...prevData.location,
				[name]: value,
			},
		}));
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setShowForm(false);
	};

	const handleReset = () => {
		setInputs(initialState);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-wrap flex-grow justify-evenly p-2 text-black border  border-light-green-500 rounded-2xl w-[85vw] max-w-[600px] self-center my-2 mx-auto"
		>
			<section className="p-2 w-full group">
				<label htmlFor="firstName">First Name:</label>
				<input
					type="text"
					id="firstName"
					name="firstName"
					placeholder="First name"
					onChange={handleChange}
					required
					className="p-2 m-auto w-full border rounded-lg group-hover:border group-hover:border-light-green-800"
				/>
			</section>
			<section className="p-2 w-full group">
				<label htmlFor="lastName">Last Name:</label>
				<input
					type="text"
					id="lastName"
					name="lastName"
					placeholder="Last name"
					onChange={handleChange}
					required
					className="p-2 m-auto w-full border rounded-lg group-hover:border-light-green-800"
				/>
			</section>
			<section className="p-2 w-full group">
				<label htmlFor="dateOfBirth">Date of Birth:</label>
				<input
					type="date"
					id="dateOfBirth"
					name="dateOfBirth"
					onChange={handleChange}
					required
					className="p-2 m-auto w-full border rounded-lg group-hover:border group-hover:border-light-green-800"
				/>
			</section>
			<section className="p-2 w-full group">
				<label htmlFor="job">Job:</label>
				<input
					type="text"
					id="job"
					name="job"
					placeholder="Job"
					onChange={handleChange}
					required
					className="p-2 m-auto w-full border rounded-lg group-hover:border group-hover:border-light-green-800"
				/>
			</section>
			<section className="p-2 w-full flex-grow group">
				<label htmlFor="bio">Bio:</label>
				<textarea
					name="bio"
					id="bio"
					placeholder="Bio"
					onChange={handleChange}
					required
					className="p-2 border w-full h-4/5 rounded-lg group-hover:border-light-green-800"
				/>
			</section>
			<section className="p-2 w-full group">
				<label htmlFor="city">City:</label>
				<input
					type="text"
					id="city"
					name="city"
					placeholder="City"
					onChange={handleNestedChange}
					required
					className="p-2 m-auto w-full border rounded-lg group-hover:border group-hover:border-light-green-800"
				/>
			</section>
			<section className="p-2 w-full group">
				<label htmlFor="country">Country:</label>
				<input
					type="text"
					id="country"
					name="country"
					placeholder="Country"
					onChange={handleNestedChange}
					required
					className="p-2 m-auto w-full border rounded-lg group-hover:border group-hover:border-light-green-800"
				/>
			</section>
			<section className="p-2 w-full group">
				<label htmlFor="lat">Latitude:</label>
				<input
					type="text"
					id="lat"
					name="lat"
					placeholder="Latitude"
					onChange={handleNestedChange}
					required
					className="p-2 m-auto w-full border rounded-lg group-hover:border group-hover:border-light-green-800"
				/>
			</section>
			<section className="p-2 w-full group">
				<label htmlFor="long">Longitude:</label>
				<input
					type="text"
					id="long"
					name="long"
					placeholder="Longitude"
					onChange={handleNestedChange}
					required
					className="p-2 m-auto w-full border rounded-lg group-hover:border group-hover:border-light-green-800"
				/>
			</section>
			<section className="p-2 w-full flex group">
				<input
					type="submit"
					value="Submit"
					className="m-auto bg-light-green-800 hover:scale-125 duration-300 text-black font-bold py-2 px-6 rounded focus:shadow-outline"
				/>
				<input
					type="reset"
					value="Reset"
					onClick={handleReset}
					className="m-auto bg-red-400 hover:scale-125 duration-300 text-black font-bold py-2 px-6 rounded focus:shadow-outline"
				/>
			</section>
		</form>
	);
};

export default Form;
