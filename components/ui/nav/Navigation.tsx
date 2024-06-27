"use client"
import { useState, useEffect } from 'react';
import { NavigationLink } from './NavigationLink';
import { Logo } from '../Logo';

export function Navigation() {
  const [isTransparent, setIsTransparent] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > 60) {
        setIsTransparent(false);
      } else {
        setIsTransparent(true);
      }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`row fixed top-0 z-10  items-center justify-between py-5 px-20 duration-300 transition-all  w-full ${
        isTransparent ? 'bg-transparent text-white py-2' : 'bg-bg-100'
      }`}
    >
      <div>
        <Logo />
      </div>
      <div className="row gap-10">
        <NavigationLink to="/">Home</NavigationLink>
        <NavigationLink to="/products">Products</NavigationLink>
      </div>
    </nav>
  );
}