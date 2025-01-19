import { HTMLAttributes } from "react";

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  variant?: "normal" | "bold";
}

export function Text({ children, variant = "normal", ...props }: TextProps) {
  const variantClasses = variant === "bold" ? "font-semibold" : "font-normal";

  return (
    <p className={`text-gray-800 ${variantClasses}`} {...props}>
      {children}
    </p>
  );
}
