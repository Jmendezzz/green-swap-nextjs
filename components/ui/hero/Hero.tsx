import Image from 'next/image';
import React from 'react';
import { Section } from '../Section';

export function Hero() {
  return (
    <Section className="bg-gradient-to-t from-green-900 to-gray-900 h-screen relative pt-20">
      <div className="full col md:flex-row">
        <div className="col-center pt-20 flex-1 gap-10 md:items-start">
          <h1 className="font-bold text-6xl">Welcome to GreenSwap</h1>
          <p className="text-lg">
            The best place to buy and sell eco-friendly products
          </p>
          <div className="pt-20">
            <button className="bg-primary-100 text-white font-bold py-2 px-4 rounded-lg mt-4">
              Get Started
            </button>
          </div>
        </div>
        <div className="col w-[50%] h-screen justify-end">
          <div className="relative w-full h-full ">
            <Image
              alt="Hero Image"
              className="object-contain mask-image"
              priority
              fill
              src="/hero-image.png"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
