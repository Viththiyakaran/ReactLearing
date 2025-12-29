import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-white text-xl font-bold">ReactApp</h1>

        {/* Menu */}
        <div className="space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 font-semibold"
                : "text-gray-300 hover:text-white"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/TodoApp"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 font-semibold"
                : "text-gray-300 hover:text-white"
            }
          >
            TodoApp
          </NavLink>

          <NavLink
            to="/WorkWithAPI"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 font-semibold"
                : "text-gray-300 hover:text-white"
            }
          >
            WorkWithAPI
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
