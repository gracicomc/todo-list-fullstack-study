import { Checkbox } from "../atoms/Checkbox";
import { Text } from "../atoms/Text";
import { Button } from "../atoms/Button";

interface TaskItemProps {
  id: string;
  description: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TaskItem({
  id,
  description,
  completed,
  onToggle,
  onDelete,
}: TaskItemProps) {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center space-x-3">
        <Checkbox checked={completed} onChange={() => onToggle(id)} />
        <Text variant={completed ? "normal" : "bold"}>{description}</Text>
      </div>
      <Button variant="secondary" onClick={() => onDelete(id)}>
        Delete
      </Button>
    </div>
  );
}
