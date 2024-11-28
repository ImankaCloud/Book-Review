import { Link, useLocation } from "react-router-dom";
import { FaBook, FaPlus } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  const linkClass = (path) => `
    flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200
    ${
      isActiveRoute(path)
        ? "text-white bg-slate-700"
        : "text-slate-300 hover:text-white hover:bg-slate-700"
    }
  `;

  return (
    <nav className="bg-slate-800 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center space-x-3 text-white hover:opacity-90 transition-opacity"
          >
            <FaBook className="text-2xl" />
            <span className="text-xl font-bold tracking-tight">
              BookReviews
            </span>
          </Link>

          <div className="flex items-center space-x-2">
            <Link to="/" className={linkClass("/")}>
              <span>Home</span>
            </Link>

            <Link
              to="/add"
              className={`
              flex items-center space-x-2 px-4 py-2 rounded-lg
              bg-blue-600 text-white hover:bg-blue-700
              transition-colors duration-200
            `}
            >
              <FaPlus className="text-sm" />
              <span>Add Review</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="h-[1px] bg-gradient-to-r from-transparent via-slate-600 to-transparent opacity-50" />
    </nav>
  );
};

export default Navbar;
