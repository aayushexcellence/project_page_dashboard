import { MessageCircle } from 'lucide-react';
import avatar2 from "../../../assets/avatar2.jpg";
import group from "../../../assets/group avatar.png";

const NoteCard = ({ title, author, role, company, content }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.15)] p-6 max-w-2xl">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <h2 className="text-l font-semibold text-gray-900">{title}</h2>
      </div>

      {/* Author Info */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          {/* Replace with your actual avatar image */}
          <div className="w-9 h-9 rounded-full border-2 border-orange-600 overflow-hidden bg-gray-200 flex-shrink-0">
            <img src={avatar2} alt="Avatar" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500">{author}</p>
            <p className="text-xs text-gray-500">{role}</p>
          </div>
        </div>
        <span className="text-base text-l font-medium text-gray-700">{company}</span>
      </div>        

      {/* Greeting */}
      <p className="text-sm text-gray-900 font-medium mb-1">Dear,</p>

      {/* Content */}
      <p className="text-xs font-sans Text text-gray-700 leading-relaxed mb-6">
        {content}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-gray-600">
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm">8</span>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium rounded-md transition-colors">
            <MessageCircle className="w-4 h-4" />
            Add Response
          </button>
        </div>
        
        {/* Avatar at bottom right */}
        <div className="w-10 h-10 overflow-hidden bg-transparent flex-shrink-0">
          <img src={group} alt="Group Avatar" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;