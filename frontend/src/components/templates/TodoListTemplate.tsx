import { UserInfo } from "../organisms/UserInfo";
import { AddTaskForm } from "../organisms/AddTaskForm";
import { TaskList } from "../organisms/TaskList";

interface Task {
  id: string;
  description: string;
  completed: boolean;
}

interface User {
  name: string;
  imageUrl: string;
}

interface TodoListTemplateProps {
  user: User;
  tasks: Task[];
  onAddTask: (description: string) => void;
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function TodoListTemplate({
  user,
  tasks,
  onAddTask,
  onToggleTask,
  onDeleteTask,
}: TodoListTemplateProps) {
  return (
    <div className="max-w-2xl mx-auto mt-8 space-y-6">
      <UserInfo
        name={user.name}
        imageUrl={user.imageUrl}
        taskCount={tasks.length}
      />
      <AddTaskForm onAddTask={onAddTask} />
      <TaskList tasks={tasks} onToggle={onToggleTask} onDelete={onDeleteTask} />
    </div>
  );
}
