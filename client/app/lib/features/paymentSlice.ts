import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Dispatch } from 'redux';

interface PaymentState {
  selectedMethod: string | null;
  paymentLink: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: PaymentState = {
  selectedMethod: null,
  paymentLink: null,
  loading: false,
  error: null,
};

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    selectPaymentMethod(state, action: PayloadAction<string>) {
      state.selectedMethod = action.payload;
    },
    makePaymentRequest(state) {
      state.loading = true;
      state.error = null;
    },
    makePaymentSuccess(state, action: PayloadAction<string>) {
      state.loading = false;
      state.paymentLink = action.payload;
    },
    makePaymentFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { selectPaymentMethod, makePaymentRequest, makePaymentSuccess, makePaymentFailure } = paymentSlice.actions;

type BuyNowAction = ReturnType<typeof makePaymentRequest | typeof makePaymentSuccess | typeof makePaymentFailure>;

export const buyNow = (amount: number) => async (dispatch: Dispatch<BuyNowAction>) => {
  try {
    dispatch(makePaymentRequest());
    const res = await axios.post<{ result: { link: string } }>("http://localhost:3000/api/payment", { amount });
    const { link } = res.data.result;
    dispatch(makePaymentSuccess(link));
    window.location.href = link;
  } catch (error) {
    dispatch(makePaymentFailure('error occurred'));
    console.error(error);
  }
};

export default paymentSlice.reducer;
