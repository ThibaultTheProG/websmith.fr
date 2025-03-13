import { ButtonHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'primaryLight' | 'outlineLight' | 'onColor' | 'onColorLight';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  isFullWidth?: boolean;
}

export default function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  isFullWidth = false,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-colors duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-yellow-dark text-black hover:bg-yellow-light focus:ring-yellow-dark cursor-pointer border-2 border-yellow-dark",
    secondary: "bg-black-light text-white hover:bg-black focus:ring-black-light cursor-pointer",
    outline: "border-2 border-yellow-dark text-yellow-dark hover:bg-yellow-dark hover:text-black focus:ring-yellow-dark cursor-pointer",
    ghost: "text-yellow-dark hover:bg-yellow-dark/10 focus:ring-yellow-dark cursor-pointer",
    primaryLight: "bg-blue-dark text-white hover:bg-blue-light hover:text-black focus:ring-blue-dark cursor-pointer border-2 border-blue-dark",
    outlineLight: "border-2 border-blue-dark text-blue-dark hover:bg-blue-dark hover:text-white focus:ring-blue-dark cursor-pointer",
    onColor: "bg-yellow-dark text-black hover:bg-yellow-light hover:text-black focus:ring-yellow-dark cursor-pointer border-2 border-yellow-dark hover:border-black",
    onColorLight: "bg-blue-dark text-white hover:bg-blue-light hover:text-blue-dark focus:ring-blue-dark cursor-pointer border-2 border-blue-dark"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  };

  const width = isFullWidth ? "w-full" : "";

  return (
    <button
      className={clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        width,
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <div className="flex items-center space-x-2">
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <span>Chargement...</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
}