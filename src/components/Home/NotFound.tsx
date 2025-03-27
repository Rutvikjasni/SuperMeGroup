import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
            {/* Error Message */}
            <h1 className="text-4xl font-bold text-blue-600">404 - Page Not Found</h1>
            
            {/* Description */}
            <p className="text-gray-600 mt-2">Sorry, the page you are looking for does not exist.</p>
            
            {/* Navigation Link to Home Page */}
            <Link to="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Go Back Home
            </Link>
        </div>
    );
};

export default NotFound;
