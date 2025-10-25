import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";

const ForgetPassword = () => {
  const location = useLocation();
  const [email, setEmail] = useState(location.state?.email || "");

  useEffect(() => {
    document.title = "Forget Password | Game Portal";
  }, []);

  const handleReset = () => {
    window.open("https://mail.google.com/", "_blank");
  };

  return (
    <div className="max-w-md mx-auto bg-gray-100 p-8 rounded-lg shadow">
      <h2 className="text-2xl font-semibold text-center mb-4">
        Reset Password
      </h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="w-full border p-2 mb-3 rounded"
      />
      <button
        onClick={handleReset}
        className="w-full bg-blue-600 text-white py-2 rounded"
      >
        Reset via Gmail
      </button>
      <p className="text-center text-sm mt-3">
        Back to{" "}
        <Link to="/login" className="text-blue-600 underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default ForgetPassword;
