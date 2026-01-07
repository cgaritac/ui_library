import React from 'react';
import './dropdown.css';

export type DropdownProps = {
    options: string[];
    selectedOption: string;
    onSelect: (option: string) => void;
    placeholder?: string;
    disabled?: boolean;
    size?: 'small' | 'medium' | 'large' | 'full';
    role?: string;
    'aria-label'?: string;
};

export const Dropdown:React.FC<DropdownProps> = ({ 
    options, 
    selectedOption, 
    onSelect, 
    placeholder = 'Select an option',
    disabled = false,
    size = 'medium',
    role,
    'aria-label': ariaLabel,
}) => {
    return (
        <select
            value={selectedOption}
            onChange={(e) => onSelect(e.target.value)}
            role={role}
            disabled={disabled}
            aria-label={ariaLabel}
            aria-placeholder={placeholder}
            className={[`cgc-dropdown`, `cgc-dropdown--${size}`, disabled ? `cgc-dropdown--disabled`: ''].join(' ')}
        >
            {options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
            ))}
        </select>
    );
};