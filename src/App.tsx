import logo from "./logo.png";
import IPerson from "./models/Person";
import Form from "./components/Form";
function App() {
	const submit = (person: IPerson) => {
		//Mock estimatedScore calcuation
		person.estimatedScore = Math.floor(Math.random() * 10) + 1;

		return person;
	};

	return (
		<div>
			<div className="bg-light-green flex h-24">
				<img src={logo} alt="Verticode logo" className="m-auto h-16" />
			</div>
			<div>
				<Form />
			</div>
		</div>
	);
}

export default App;
