import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, type = "button", disabled, ...props }, ref) => {
    return (
      <button
        type={type}
        className={twMerge(
          `
          rounded-full 
          w-full
          border
          border-transparent
         bg-green-500
          p-3
          disabled:cursor-not-allowed
          disabled:opacity-50
         text-black
          font-bold
          hover:opacity-75
          transition
      `,
          className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
