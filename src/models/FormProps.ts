import IPerson from "./Person";

export default interface IFormProps {
	showForm: boolean;
	setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
	inputs: IPerson;
	setInputs: React.Dispatch<React.SetStateAction<IPerson>>;
	initialState: IPerson;
}
