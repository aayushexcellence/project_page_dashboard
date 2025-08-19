import { MoreHorizontal, MessageSquare, Paperclip } from "lucide-react";
import BottomIcons from "../../../assets/Bottom card.png";

const TaskCard = ({ task }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border mb-4">
      {/* Title + Menu */}
      <div className="flex justify-between items-start">
        <h3 className="font-semibold text-gray-800">{task.title}</h3>
        <MoreHorizontal className="text-gray-400 w-5 h-5" />
      </div>

      {/* Details */}
      <p className="text-xs text-gray-500 mt-1">
        Project: {task.project}
        <br /> Created: {task.created}
        <br /> Due: {task.due}
        <br /> Assigned To: {task.assignedTo}
      </p>

      {/* Priority + Avatars */}
      <div className="flex justify-between items-center mt-2 pt-3 pb-2">
        {/* Priority */}
        <span className="inline-block px-2 py-1 text-xs font-semibold text-orange-500 bg-orange-100 rounded">
          {task.priority}
        </span>

        {/* Avatars */}
        <div className="flex -space-x-4">
          {task.avatars.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt="avatar"
              className="w-8 h-8 rounded-full border-2 border-orange-500"
            />
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t mt-3" />

      {/* Footer: Comments + Attachments + Client */}
      <div className="flex items-center justify-between mt-3 text-gray-500 text-sm">
         <img src={BottomIcons} alt="card-icons" className="h-5 w-auto" />
        <span className="text-xs text-gray-400">Client: {task.client}</span>
      </div>
    </div>
  );
};

export default TaskCard;
