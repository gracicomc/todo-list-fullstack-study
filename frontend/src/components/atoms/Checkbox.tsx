import { InputHTMLAttributes } from "react";

export function Checkbox(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type="checkbox"
      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
      {...props}
    />
  );
}
