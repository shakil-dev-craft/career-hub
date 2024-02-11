import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full min-h-screen">
            <h1 className="text-red-600">Oops! Something went wrong</h1>
            <Link to={'/'}>
                <button type="button">Go Back</button>
            </Link>
        </div>
    );
};

export default ErrorPage;