import React, { type CSSProperties, type PropsWithChildren } from 'react';
import './stack.css';

type StackProps = PropsWithChildren<{
  orientation: 'horizontal' | 'vertical';
  gap?: '1' | '2' | '3' | '4' | '5';
  backgroundColor?: string;
  height?: string;
  width?: string;
  borderRadius?: string;
  padding?: string;
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
}) => {
    const style: CSSProperties = {
        backgroundColor: backgroundColor,
        height: height,
        width: width,
        borderRadius: borderRadius,
        padding: padding,
    };
  return (
    <div 
        className={['cgc-stack', `cgc-stack--${orientation}`, `cgc-stack--gap-${gap}`].join(' ')}
        style={style}
    >
        {children}
    </div>);
};