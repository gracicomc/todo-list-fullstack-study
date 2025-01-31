import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";
import { addTask } from "@/services/tasks/tasks.service";

interface AddTaskFormProps {
  onAddTask?: (title: string) => void; // Callback opcional
}

export function AddTaskForm({ onAddTask }: AddTaskFormProps) {
  const [title, setTitle] = useState("");
  const queryClient = useQueryClient();

  // const { data: tasks, error, isLoading } = useQuery({
  //   queryKey: ["tasks"],
  //   queryFn: fetchTasks,
  // });

  // Configura a mutação para adicionar tarefas
  const mutation = useMutation({
    mutationFn: addTask,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      mutation.mutate(title.trim()); // Executa a mutação
      if (onAddTask) onAddTask(title.trim()); // Callback opcional
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2">
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task"
        disabled={mutation.isPending} // Desabilita o input enquanto carrega
      />
      <Button type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? "Adding..." : "Add"}
      </Button>
    </form>
  );
}
