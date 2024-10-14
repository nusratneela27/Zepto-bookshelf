import { NavLink } from "react-router-dom";

const NavRoutes = () => {
  return (
    <div>
      {/* Routes Items */}
      <div className="flex items-center space-x-6">
        {["/", "/wishlist"].map((path, index) => {
          const names = ["Home", "Wishlist"];
          return (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                isActive
                  ? "text-sky-600 border-b-4 border-sky-500"
                  : "text-gray-800 hover:text-sky-600"
              }
            >
              {names[index]}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default NavRoutes;
