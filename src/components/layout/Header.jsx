import { useNavigate } from "react-router-dom";
import { Phone, Mail, Search as SearchIcon } from "lucide-react";
import Icons from "../../assets/3 icons.png";

const Header = ({ tabs, activeTab }) => {
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    if (tab === "Notes") {
      navigate("/projects/notes");
    } else if (tab === "Task") {
      navigate("/projects/tasks");
    } else {
      console.log(`${tab} clicked - no page yet`);
    }
  };

  return (
    <div className="bg-transparent px-4 py-4">
      {/* Top Row: Title + Phone/Mail */}
      <div className="flex items-center justify-between mb-2">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">Projects</h1>
          <p className="text-xs text-gray-500">
            See through your projects and the progress
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="w-8 h-8 flex items-center justify-center rounded-full text-black hover:text-white bg-white/50 hover:bg-black">
            <Phone className="h-4 w-4" />
          </button> 
          <button className="w-8 h-8 flex items-center justify-center rounded-full text-black hover:text-white bg-white/50 hover:hover:bg-black">
            <Mail className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Breadcrumb + Search */}
      <div className="flex items-center justify-between mb-4 pt-4 pb-3">
        {/* Breadcrumb */}
        <div className="text-xs text-gray-500">
          <span className="text-gray-800">App</span>
          <span className="mx-1 text-orange-500 text-xs font-bold">{">"}</span>
          <span className="text-gray-400">Projects</span>
        </div>

        {/* Search & Icons */}
        <div className="flex items-center gap-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-60 pl-8 pr-3 py-2 text-sm outline-none bg-white focus:ring-2 focus:ring-blue-500"
            />
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
          </div>
          <img src={Icons} alt="icons" className="h-8 w-auto" />
        </div>
      </div>

      {/* Pills */}
      <div className="flex flex-wrap items-center gap-3">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`text-sm px-10 py-2 rounded-full ${
              activeTab === tab
                ? "bg-blue-900 text-white"
                : "bg-white text-gray-700 border border-gray-200"
            }`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Header;
