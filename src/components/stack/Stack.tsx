import React, { type CSSProperties, type ElementType, type PropsWithChildren } from 'react';
import './stack.css';

type StackProps = PropsWithChildren<{
  orientation: 'horizontal' | 'vertical';
  gap?: '1' | '2' | '3' | '4' | '5';
  backgroundColor?: string;
  height?: string;
  width?: string;
  borderRadius?: string;
  padding?: string;
  as?: ElementType;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  role?: string;
}>;

export const Stack: React.FC<StackProps> = ({ 
    children,
    orientation = 'horizontal',
    backgroundColor,
    height,
    width,
    borderRadius,
    padding,
    gap = '1',
    as: Component = 'div',
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    'aria-describedby': ariaDescribedBy,
    role,
}) => {
    const style: CSSProperties = {
        backgroundColor: backgroundColor,
        height: height,
        width: width,
        borderRadius: borderRadius,
        padding: padding,
    };

    const className = ['cgc-stack', `cgc-stack--${orientation}`, `cgc-stack--gap-${gap}`].join(' ');

    const ariaProps = {
        ...(ariaLabel && { 'aria-label': ariaLabel }),
        ...(ariaLabelledBy && { 'aria-labelledby': ariaLabelledBy }),
        ...(ariaDescribedBy && { 'aria-describedby': ariaDescribedBy }),
        ...(role && { role }),
    };

  return (
        <Component
            className={className}
            style={style}
            {...ariaProps}
        >
            {children}
        </Component>
    );
};