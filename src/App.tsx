import IPerson from "./models/Person";
import Header from "./components/Header";
import Form from "./components/Form";
function App() {
	const submit = (person: IPerson) => {
		//Mock estimatedScore calcuation
		person.estimatedScore = Math.floor(Math.random() * 10) + 1;

		return person;
	};

	return (
		<>
			<Header />
			<Form />
		</>
	);
}

export default App;
