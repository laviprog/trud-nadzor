import { ComponentPropsWithoutRef } from 'react';

export default function Button({
  children,
  className = '',
  ...props
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}> & ComponentPropsWithoutRef<'button'>) {
  return (
    <button 
      className={`text-[var(--black)] py-3 px-5 max-sm:px-3 rounded-xl cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}