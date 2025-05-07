import React, { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';

export default function Button({
  children,
  className = '',
  ...props
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}> &
  ComponentPropsWithoutRef<'button'>) {
  return (
    <button
      className={clsx(
        'rounded-xl hover:scale-[1.04] cursor-pointer hover:brightness-110',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
