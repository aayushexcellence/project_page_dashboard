import TaskColumn from "../components/projects/Tasks/TaskColumn";
import PageContainer from "../components/layout/PageContainer";
import avatar from "../assets/avatar.jpg";
import avatar1 from "../assets/avatar1.jpg";
import avatar2 from "../assets/avatar2.jpg";

const columns = [
  { title: "New", color: "#67757C", count: 3 },
  { title: "InProgress", color: "#3B82F6", count: 2 },
  { title: "Awaiting feedback", color: "#F97316", count: 3 },
  { title: "Completed", color: "#10B981", count: 4 },
];

const baseTask = {
  title: "Get project",
  project: "Web Development and Digital Marketing",
  created: "11.05.2024",
  due: "11.08.2024",
  assignedTo: "Kalim Hussain",
  priority: "High",
  client: "John Company",
  comments: 8,
  attachments: 3,
  avatars: [avatar, avatar1, avatar2],
};

// Function to generate an array with same task repeated `n` times
const generateTasks = (n) => Array.from({ length: n }, () => ({ ...baseTask }));

export default function TasksPage() {
  return (
    <PageContainer>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {columns.map((col) => (
          <TaskColumn
            key={col.title}
            title={col.title}
            count={col.count}
            color={col.color}
            tasks={generateTasks(col.count)}
          />
        ))}
      </div>
    </PageContainer>
  );
}
