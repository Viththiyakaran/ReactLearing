import { NavLink } from "react-router-dom";
import { useState } from "react";

const MENU_ITEMS = [
  { name: "Home", path: "/" },
  { name: "TodoApp", path: "/TodoApp" },
  { name: "WorkWithAPI", path: "/WorkWithAPI" },
  { name: "Axios Practice", path: "/Axios" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `block px-3 py-2 rounded-md transition-colors duration-200 ${
      isActive
        ? "text-blue-400 font-semibold"
        : "text-gray-300 hover:text-white"
    }`;

  return (
    <nav className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold tracking-wide">
          <NavLink
            to="/"
            className="text-white hover:text-blue-400 transition-colors"
            aria-label="Go to homepage"
          >
            ReactApp
          </NavLink>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {MENU_ITEMS.map((item) => (
            <NavLink key={item.path} to={item.path} className={linkClass}>
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-gray-300 text-2xl transition-transform duration-200"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu with Animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-4 space-y-2">
          {MENU_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={linkClass}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
