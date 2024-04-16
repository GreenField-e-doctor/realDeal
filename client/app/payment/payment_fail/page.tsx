'use client'
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const PaymentFailedComponent: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      gsap.from(container, {
        opacity: 1,
        y: 50,
        duration: 1,
        ease: 'power3.out'
      });
    }
  }, []);

  return (
    <div className="container mx-auto px-4" style={{ opacity: 0}} ref={containerRef}>
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full text-center">
          <div className="bg-red-500 text-white py-8 rounded-md shadow-md mb-8">
            <h1 className="text-4xl font-semibold mb-2">Payment Failed!</h1>
            <p className="text-lg">We're sorry, but your payment was unsuccessful.</p>
          </div>
          <p>Please try again or contact support.</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailedComponent;
