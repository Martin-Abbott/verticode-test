import { useState } from "react";
import Form from "./Form";
import PersonCard from "./PersonCard";
// import IFormProps from "../models/FormProps";
import IPerson from "../models/Person";

const FlipCard = () => {
	const [showForm, setShowForm] = useState<boolean>(true);

	const initialState = {
		firstName: "",
		lastName: "",
		dateOfBirth: new Date(1000, 0, 1),
		job: "",
		bio: "",
		location: {
			city: "",
			country: "",
			long: "",
			lat: "",
		},
		estimatedScore: 0,
	};

	const [inputs, setInputs] = useState<IPerson>(initialState);

	return showForm ? (
		<Form
			showForm={showForm}
			setShowForm={setShowForm}
			inputs={inputs}
			setInputs={setInputs}
			initialState={initialState}
		/>
	) : (
		<PersonCard
			showForm={showForm}
			setShowForm={setShowForm}
			inputs={inputs}
			setInputs={setInputs}
			initialState={initialState}
		/>
	);
};

export default FlipCard;
