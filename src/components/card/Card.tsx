import React from "react";

type CardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
} & React.HTMLAttributes<HTMLDivElement>;

export default function Card({ icon, title, description, ...rest }: CardProps) {
  return (
    <div
      {...rest}
      className="m-4 p-4 max-xl:p-3 max-xl:m-3 max-lg:m-2 max-lg:p-2 bg-[var(--white)] rounded-2xl shadow-md text-center hover:shadow-lg transition-shadow text-[var(--black)] border-5 border-[var(--green)] max-sm:mx-10"
    >
      <div className="xl:text-4xl lg:text-3xl text-[26px]">{icon}</div>
      <h3 className="text-xl max-xl:text-lg max-md:text-base font-semibold mb-1">
        {title}
      </h3>
      <p className="max-lg:text-sm">{description}</p>
    </div>
  );
}
