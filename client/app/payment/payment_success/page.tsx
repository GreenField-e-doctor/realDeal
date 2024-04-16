'use client'
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const PaymentSuccessComponent: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      gsap.from(container, {
        opacity: 1,
        y: 50,
        duration: 0.5,
        ease: 'power3.out',
      });
    }
  }, []);

  return (
    <div className="container mx-auto px-4" ref={containerRef} style={{ opacity:0}}>
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full text-center">
          <div className="bg-green-500 text-white py-8 rounded-md shadow-md mb-8">
            <h1 className="text-4xl font-semibold mb-2">Payment Successful!</h1>
            <p className="text-lg">Your payment has been processed successfully.</p>
          </div>
          <p className="text-gray-600">Thank you for your purchase!</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessComponent;
