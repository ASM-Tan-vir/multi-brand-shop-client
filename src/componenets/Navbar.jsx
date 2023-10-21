import { Link, NavLink } from "react-router-dom";
import userImage from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout().then().catch();
  };
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/added">My Cart</NavLink>
      </li>

      <li>
        <NavLink to="/addProduct">Add Product</NavLink>
      </li>
      <li>
        <NavLink to="/updateProduct">Update</NavLink>
      </li>
      <li>
        <NavLink to="/sign-up">SignUp</NavLink>
      </li>
      <li>
        <NavLink to="/sign-in">SignIn</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-80"
          >
            {navLinks}
          </ul>
        </div>
        <div className="flex">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src="logo.jpg" />
            </div>
          </div>
          <a className="btn btn-ghost normal-case text-lg md:text-xl">
            Hyper-Tec
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user?.uid ? (
          <>
            <button tabIndex={0} className="btn btn-ghost">
              <img
                className="w-8 h-8 rounded-full me-1"
                src={user.photoURL ? user.photoURL : userImage}
                alt={user.displayName}
              />
              <p className="text-xs">{user.displayName}</p>
            </button>
            <btn onClick={handleLogout} className="btn btn-error">
              Log out
            </btn>
          </>
        ) : (
          <Link to="/sign-in">
            <btn className="btn">Login</btn>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
