import { useState } from "react";
import Form from "./Form";
import FormHeading from "./FormHeading";
import PersonCard from "./PersonCard";
import PersonHeading from "./PersonHeading";
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
		<>
			<FormHeading />
			<Form
				showForm={showForm}
				setShowForm={setShowForm}
				inputs={inputs}
				setInputs={setInputs}
				initialState={initialState}
			/>
		</>
	) : (
		<>
			<PersonHeading />
			<PersonCard
				showForm={showForm}
				setShowForm={setShowForm}
				inputs={inputs}
				setInputs={setInputs}
				initialState={initialState}
			/>
		</>
	);
};

export default FlipCard;
