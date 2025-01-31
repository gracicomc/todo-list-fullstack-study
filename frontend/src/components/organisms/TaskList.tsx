import { useQuery } from "@tanstack/react-query";
import { fetchTasks } from "@/services/tasks/tasks.service";
import { Tasks } from "@/types/tasks/tasks.types";
import { TaskItem } from "@/components/molecules/TaskItem";

const TaskList = () => {
  const {
    data: tasks,
    error,
    isLoading: isFetching,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: fetchTasks,
  });

  if (isFetching) return <p>Loading tasks...</p>;
  if (error) return <p>Error loading tasks.</p>;

  return (
    <div className="space-y-2">
      {tasks?.map((task: Tasks) => (
        <TaskItem
          key={task.id}
          id={task.id}
          description={task.title}
          completed={task.completed}
        />
      ))}
    </div>
  );
};

export default TaskList;
