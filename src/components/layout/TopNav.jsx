import { NavLink, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const TopNav = () => {
  const menu = ["Dashboard", "Time Tracker", "Projects", "Calendar", "Benefits", "Teams"];
  const location = useLocation();

  return (
    <nav className="w-full bg-transparent">
      <div className="flex items-center justify-between px-4 py-2">
        {/* Left Menu */}
        <div className="flex items-center gap-4 overflow-x-auto">
          {menu.map((item) => {
            const isProjectsActive = item === "Projects" && location.pathname.startsWith("/projects");

            return item === "Dashboard" ? (
              <NavLink
                key={item}
                to="#"
                className="px-4 py-2 text-gray-700 font-medium"
              >
                {item}
              </NavLink>
            ) : (
              <NavLink
                key={item}
                to={item === "Projects" ? "/projects/notes" : "#"}
                className={() =>
                  `px-4 py-2 rounded-full text-sm transition ${
                    isProjectsActive
                      ? "bg-blue-900 text-white"
                      : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
                  }`
                }
              >
                {item}
              </NavLink>
            );
          })}
        </div>

       {/* Right Filters */}
<div className="flex items-center gap-3 relative text-sm font-semibold">
  <div className="relative">
    <select
      className="border rounded px-3 py-2 pr-8 appearance-none"
    >
      <option>Department</option>
    </select>
    <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
  </div>

  <div className="relative">
    <select
      className="border rounded px-3 py-2 pr-16 appearance-none"
    >
      <option>Role</option>
    </select>
    <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
  </div>

  <button className="bg-orange-500 hover:bg-orange-600 text-white px-9 py-2 rounded">
    Apply
  </button>
</div>
      </div>
    </nav>
  );
};

export default TopNav;
