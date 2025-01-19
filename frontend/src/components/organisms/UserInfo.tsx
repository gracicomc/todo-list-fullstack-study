import { UserAvatar } from "../molecules/UserAvatar";
import { Text } from "../atoms/Text";

interface UserInfoProps {
  name: string;
  imageUrl: string;
  taskCount: number;
}

export function UserInfo({ name, imageUrl, taskCount }: UserInfoProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
      <UserAvatar name={name} imageUrl={imageUrl} />
      <Text>Tasks: {taskCount}</Text>
    </div>
  );
}
