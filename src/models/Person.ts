export default interface IPerson {
	firstName: string;
	lastName: string;
	dateOfBirth: Date;
	job: string;
	bio: string;
	location: ILocation;

	//Calculated during the submit function - do not include in the form but do include in the output
	estimatedScore: number;
}

interface ILocation {
	city: string;
	country: string;
	long: string;
	lat: string;
}
