import React from 'react';
import './button.css';

interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  size?: 'small' | 'medium' | 'large' | 'full';
  backgroundColor?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ 
    children,
    primary = true,
    size = 'medium',
    backgroundColor,
    disabled = false,
    type = 'button',
    onClick 
}) => {
  const mode = primary ? 'cgc-button--primary' : 'cgc-button--secondary';
  
  return (
    <button
      onClick={onClick}
      className={['cgc-button', `cgc-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      disabled={disabled}
      type={type}
    >
        {children}
    </button>
  );
};