import React from 'react';

interface DhgoSimpleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const DhgoSimpleButton: React.FC<DhgoSimpleButtonProps> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
}; 