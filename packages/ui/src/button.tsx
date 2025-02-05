"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName?: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
  return (
    <button
      className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
    >
      {children}
    </button>
  );
};
