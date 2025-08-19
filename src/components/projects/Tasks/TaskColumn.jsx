import TaskCard from "./TaskCard";

const TaskColumn = ({ title, count, color, tasks }) => {
  return (
    <div>
      {/* Column Header */}
      <div className="p-2">
        <div className="flex justify-between items-center mb-1">
          <h2 className="font-semibold text-gray-800">{title}</h2>
          <span
            className={`text-xs font-medium text-white px-2 py-0.5 border bg-transparent rounded-full`}
            style={{
              borderColor: color,
              color: color,
              backgroundColor: "transparent",
            }}
          >
            {count}
          </span>
        </div>
        <div className="pt-3 pb-1">
        <div className="h-[1px] rounded" style={{ backgroundColor: color }}></div>
        </div>
      </div>

      {/* Cards */}
      <div className="mt-2">
        {tasks.map((task, index) => (
          <TaskCard key={index} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskColumn;
