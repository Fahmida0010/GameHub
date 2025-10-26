import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  const { register, updateUser, googleLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    if (!/(?=.*[A-Z])/.test(password))
      return setError("Must contain an uppercase letter.");
    if (!/(?=.*[a-z])/.test(password))
      return setError("Must contain a lowercase letter.");
    if (password.length < 6)
      return setError("Password must be at least 6 characters.");

    register(email, password)
      .then(() => updateUser(name, photoURL))
      .then(() => navigate("/"))
      .catch((err) => setError(err.message));
  };

  return (
    <div className="max-w-md mx-auto bg-gray-100 p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          className="w-full mb-3 p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full mb-3 p-2 border rounded"
        />
        <input
          type="text"
          name="photoURL"
          placeholder="Photo URL"
          className="w-full mb-3 p-2 border rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className="w-full mb-3 p-2 border rounded"
        />
        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Register
        </button>
      </form>
      {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}

      <button
        onClick={googleLogin}
        className="w-full bg-red-500 text-white py-2 mt-3 rounded"
      >
        Continue with Google
      </button>

      <p className="text-sm text-center mt-3">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-600 underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
