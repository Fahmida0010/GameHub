import { useContext, useEffect } from "react";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    document.title = "My Profile | Game Portal";
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="max-w-md mx-auto text-center bg-gray-100 p-6 rounded shadow">
      <img
        src={user.photoURL || "https://i.ibb.co/zGCGN1r/avatar.png"}
        alt="User"
        className="w-24 h-24 rounded-full mx-auto mb-3"
      />
      <h2 className="text-xl font-bold">{user.displayName}</h2>
      <p>{user.email}</p>
      <Link
        to="/update"
        className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Update Info
      </Link>
    </div>
  );
};

export default MyProfile;
