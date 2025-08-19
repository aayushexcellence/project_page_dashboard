import { Bell, Search as SearchIcon } from "lucide-react";
import logoImg from "../../assets/diepa logo.png";
import avatar from "../../assets/avatar.jpg";

const Navbar = () => {
  return (
    <div className="bg-transparent pb-3">
      <header className="w-full bg-transparent shadow-none px-4 py-3 pt-4 pb-6 flex items-center justify-between border-b-[1.5px] border-blue-900">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logoImg}
            alt="Logo"
            className="h-8 w-auto object-contain"
          />
        </div>

        {/* Search Pill */}
        <div className="relative w-full max-w-md mx-4">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
          <input
            type="text"
            placeholder="Search everything..."
            className="text-sm w-full border rounded-full pl-9 pr-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Search"
          />
        </div>

        {/* Right: Bell + Avatar */}
        <div className="flex items-center gap-2">
          <div className="relative rounded-full border border-white bg-white">
            <button
              type="button"
              className="relative inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100"
              aria-label="Notifications"
            >
              <Bell className="h-5 w-5 text-gray-700" />
            </button>
          </div>

          <img
            src={avatar}
            alt="user"
            className="rounded-full w-10 h-10 object-cover"
          />
        </div>
      </header>
    </div>
  );
};

export default Navbar;
