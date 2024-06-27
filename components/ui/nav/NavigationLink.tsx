import React from "react";
import Link from "next/link";

interface Props{
    to: string;
    children: React.ReactNode;
}

export function NavigationLink({to, children}: Props) {
  return (
    <Link href={to} className="text-primary-200 text-xl font-bold hover:text-primary-300 transition-colors">
        {children}
    </Link>
  )
}

