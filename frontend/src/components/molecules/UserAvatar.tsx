import { Text } from "../atoms/Text";

interface UserAvatarProps {
  name: string;
  imageUrl: string;
}

export function UserAvatar({ name, imageUrl }: UserAvatarProps) {
  return (
    <div className="flex items-center space-x-3">
      <img
        src={imageUrl || "/placeholder.svg"}
        alt={name}
        className="w-10 h-10 rounded-full"
      />
      <Text variant="bold">{name}</Text>
    </div>
  );
}
