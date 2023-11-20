import IFormProps from "../models/FormProps";

const PersonCard: React.FC<IFormProps> = ({ setShowForm, inputs }) => {
	const handleReset = () => {
		setShowForm(true);
	};

	return (
		<section className="flex flex-wrap flex-grow justify-evenly p-2 text-green-700 font-manrope border  border-light-green-500 rounded-2xl w-[85vw] max-w-[600px] self-center text-center my-2 mx-auto">
			<p className="p-2 m-2 w-full border rounded-lg hover:border-light-green-800">
				<strong>First Name: </strong>
				{inputs.firstName}
			</p>
			<p className="p-2 m-2 w-full border rounded-lg hover:border-light-green-800">
				<strong>Last Name: </strong>
				{inputs.lastName}
			</p>
			<p className="p-2 m-2 w-full border rounded-lg hover:border-light-green-800">
				<strong>Date of Birth: </strong>
				{inputs.dateOfBirth.toString()}
			</p>
			<p className="p-2 m-2 w-full border rounded-lg hover:border-light-green-800">
				<strong>Job: </strong>
				{inputs.job}
			</p>
			<p className="p-2 m-2 w-full border rounded-lg hover:border-light-green-800">
				<strong>Bio: </strong>
				{inputs.bio}
			</p>
			<p className="p-2 m-2 w-full border rounded-lg hover:border-light-green-800">
				<strong>Estimated Score: </strong>
				{inputs.estimatedScore}
			</p>
			<p className="p-2 m-2 w-full border rounded-lg hover:border-light-green-800">
				<strong>City: </strong>
				{inputs.location.city}
			</p>
			<p className="p-2 m-2 w-full border rounded-lg hover:border-light-green-800">
				<strong>Country: </strong>
				{inputs.location.country}
			</p>
			<p className="p-2 m-2 w-full border rounded-lg hover:border-light-green-800">
				<strong>Latitude: </strong>
				{inputs.location.lat}
			</p>
			<p className="p-2 m-2 w-full border rounded-lg hover:border-light-green-800">
				<strong>Longitude: </strong>
				{inputs.location.long}
			</p>
			<button
				onClick={handleReset}
				className="m-auto bg-red-400 hover:scale-125 duration-300 text-black font-bold py-2 px-6 rounded focus:shadow-outline"
			>
				Reset
			</button>
		</section>
	);
};

export default PersonCard;
