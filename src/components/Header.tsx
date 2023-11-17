import logo from "../logo.png";

const Header = () => {
	return (
		<header className="bg-light-green flex h-24">
			<img src={logo} alt="Verticode logo" className="m-auto h-16" />
		</header>
	);
};

export default Header;
