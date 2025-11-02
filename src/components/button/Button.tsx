import React, { type CSSProperties, type PropsWithChildren } from 'react';
import './button.css';

type ButtonProps = PropsWithChildren<{
  primary?: boolean;
  size?: 'small' | 'medium' | 'large' | 'full';
  backgroundColor?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}>;

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
  const style: CSSProperties = {
    backgroundColor: backgroundColor,
  };

  return (
    <button
      onClick={onClick}
      className={['cgc-button', `cgc-button--${size}`, mode, disabled ? 'cgc-button--disabled' : ''].join(' ')}
      style={style}
      disabled={disabled}
      type={type}
    >
        {children}
    </button>
  );
};