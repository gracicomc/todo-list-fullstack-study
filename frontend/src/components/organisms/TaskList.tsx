import { TaskItem } from "../molecules/TaskItem";

interface Task {
  id: string;
  description: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TaskList({ tasks, onToggle, onDelete }: TaskListProps) {
  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          description={task.description}
          completed={task.completed}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
