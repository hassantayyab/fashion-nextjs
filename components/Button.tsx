import React from 'react';

export default function Button({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <button
      className={`${className} transition-fs rounded-lg bg-gray-950 px-10 py-4 text-xl font-medium text-white ease-in-out hover:scale-105`}
    >
      {children}
    </button>
  );
}
