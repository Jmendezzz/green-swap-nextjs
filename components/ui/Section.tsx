import React from 'react'
interface Props{
    children: React.ReactNode;
    className?: string;
}
export function Section({children,className}: Props) {
  return (
    <section className={`section ${className}`}>
        <div className='container h-full mx-auto'>
            {children}
        </div>
    </section>
  )
}

