import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export function Button({
  children,
  variant = "primary",
  ...props
}: ButtonProps) {
  const baseClasses = "px-4 py-2 rounded-md font-semibold text-sm";
  const variantClasses =
    variant === "primary"
      ? "bg-blue-500 text-white hover:bg-blue-600"
      : "bg-gray-200 text-gray-800 hover:bg-gray-300";

  return (
    <button className={`${baseClasses} ${variantClasses}`} {...props}>
      {children}
    </button>
  );
}
