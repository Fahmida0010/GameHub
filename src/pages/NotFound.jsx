import { useEffect } from "react";
import { Link } from "react-router";

const NotFound = () => {
  useEffect(() => {
    document.title = "404 | Page Not Found";
  }, []);

  return (
    <div className="text-center py-20">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-gray-600 mb-6">Page Not Found</p>
      <Link to="/" className="bg-blue-600 text-white px-4 py-2 rounded">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
