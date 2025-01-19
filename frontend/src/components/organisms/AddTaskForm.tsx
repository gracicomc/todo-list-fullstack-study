import { useState } from "react";
import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";

interface AddTaskFormProps {
  onAddTask: (description: string) => void;
}

export function AddTaskForm({ onAddTask }: AddTaskFormProps) {
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (description.trim()) {
      onAddTask(description.trim());
      setDescription("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2">
      <Input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Add a new task"
      />
      <Button type="submit">Add</Button>
    </form>
  );
}
