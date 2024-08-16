// components/Button.tsx
import React from 'react';

type ButtonProps = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
};

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false, variant = 'primary' }) => {
  const baseClasses = 'px-4 py-2 font-semibold rounded';
  const variantClasses =
    variant === 'primary'
      ? 'bg-blue-500 text-white hover:bg-blue-700'
      : 'bg-gray-500 text-white hover:bg-gray-700';

  return (
    <button
      className={`${baseClasses} ${variantClasses}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
