import IPerson from "../models/Person";

const submit = (person: IPerson) => {
	//Mock estimatedScore calcuation
	person.estimatedScore = Math.floor(Math.random() * 10) + 1;

	return person;
};

export default submit;
