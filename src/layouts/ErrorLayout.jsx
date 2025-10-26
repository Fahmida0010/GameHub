
import { Link, useRouteError } from "react-router-dom";

const ErrorLayout = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center px-4">
      <h1 className="text-8xl font-extrabold text-red-500 mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-2">Oops! Page Not Found</h2>
      <p className="text-gray-400 mb-6">
        {error?.statusText || "The page you requested does not exist."}
      </p>
      <Link
        to="/"
        className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-all"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorLayout;
