import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTask, deleteTask } from "@/services/tasks/tasks.service";
import { Checkbox } from "../atoms/Checkbox";
import { Button } from "../atoms/Button";

interface TaskItemProps {
  id: number;
  description: string;
  completed: boolean;
}

export function TaskItem({ id, description, completed }: TaskItemProps) {
  const queryClient = useQueryClient();

  const toggleMutation = useMutation({
    mutationFn: () => updateTask(id, !completed),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: () => deleteTask(id),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center space-x-3">
        <Checkbox
          checked={completed}
          onChange={() => toggleMutation.mutate()}
        />
        <span>{description}</span>
      </div>
      <Button onClick={() => deleteMutation.mutate()}>Delete</Button>
    </div>
  );
}
