'use client'
import React from 'react';
import { useAppSelector, useAppDispatch, useAppStore } from '../lib/hook'
import { PaymentComponentProps} from '../types/types'
import {buyNow,selectPaymentMethod } from '../lib/features/paymentSlice'
const Payment: React.FC<PaymentComponentProps> = ({ styles }) => {
  const dispatch = useAppDispatch();

  const handlePaymentClick = (paymentMethod: string) => {
    console.log(`Payment method selected: ${paymentMethod}`);
    dispatch(selectPaymentMethod(paymentMethod));

    // const buttons = document.querySelectorAll('.' + styles.option);
    // buttons.forEach((button: Element) => {
    //   button.classList.remove(styles.purple);
    // });

    if (paymentMethod === 'flouci') {
        dispatch(buyNow(100))
    }
  };

  return (
  
    <div>
      <button onClick={()=>{
        handlePaymentClick('flouci')
      }}>
        test
      </button>
    </div>
  );
};

export default Payment;
