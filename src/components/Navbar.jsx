import React, { useState, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { FaBars, FaTimes } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useContext(AuthContext); 
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout(); 
      navigate("/login");
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  const navLinks = (
    <>
      <NavLink to="/" className="hover:text-indigo-700">
        Home
      </NavLink>

      <NavLink to="/allgames" className="hover:text-indigo-700">
        Games
      </NavLink>

      <NavLink to="/about" className="hover:text-indigo-700">
        About
      </NavLink>

      {!user ? (
        <>
          <NavLink to="/login" className="hover:text-indigo-700 text-purple-600">
            Login
          </NavLink>
          
        </>
      ) : (
       
        <div className="flex items-center gap-3">
          <button
            onClick={handleLogout}
            className="bg-red-600 px-3 py-1 rounded hover:bg-red-700 transition"
          >
            Logout
          </button>

          <Link to="/my-profile" className="block">
            <img
              src={user.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
              alt={user.displayName || "User"}
              className="w-10 h-10 rounded-full border-2 border-white object-cover cursor-pointer hover:scale-105 transition"
              title={user.displayName || "My Profile"}
            />
          </Link>
        </div>
      )}
    </>
  );

  return (
    <header className="bg-gradient-to-r from-yellow-300 to-sky-400 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="text-2xl font-bold text-green-500">
          🎮 GameHub
        </Link>
        <div className="hidden md:flex items-center gap-6">{navLinks}</div>
        <button
          onClick={() => setMenuOpen((p) => !p)}
          className="text-2xl md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-yellow-200 text-black py-4 px-6 flex flex-col gap-3">
          {navLinks}
        </div>
      )}
    </header>
  );
};

export default Navbar;
