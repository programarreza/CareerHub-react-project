import { Link } from "react-router-dom";

const ErrorPage = () => {
	return (
		<div className="text-2xl my-auto text-center mt-24">
			<h2 >Opss !!</h2>
			<Link to="/">
				<button className="btn mt-6">Go Back </button>
			</Link>
		</div>
	);
};

export default ErrorPage;