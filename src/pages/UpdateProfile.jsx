import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

const UpdateProfile = () => {
  const { user, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Update Info | Game Portal";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;

    updateUser(name, photoURL).then(() => navigate("/profile"));
  };

  return (
    <div className="max-w-md mx-auto bg-gray-100 p-8 rounded-lg shadow">
      <h2 className="text-2xl font-semibold text-center mb-4">
        Update Information
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          defaultValue={user?.displayName}
          placeholder="Name"
          className="w-full border p-2 mb-3 rounded"
        />
        <input
          type="text"
          name="photoURL"
          defaultValue={user?.photoURL}
          placeholder="Photo URL"
          className="w-full border p-2 mb-3 rounded"
        />
        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
