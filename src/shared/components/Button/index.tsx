import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}: ButtonProps) => {
  const baseClasses = "px-4 py-2 rounded font-semibold transition duration-300";
  
  const variantClasses = {
    primary: "bg-primary text-white hover:bg-accent hover:text-primary",
    secondary: "bg-white text-primary border border-primary hover:bg-accent hover:text-primary"
  };

  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;