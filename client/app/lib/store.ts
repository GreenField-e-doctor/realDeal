import { configureStore } from '@reduxjs/toolkit'
import PaymentSlice from './features/paymentSlice'
import {exploreSlice} from "../lib/features/exploreslice"
import userSlice from './features/userSlice'
import postSlice from './features/postSlice'
import commentReducer from './features/commentSlice';
export const makeStore = () => {
  return configureStore({
    reducer: {
        payment: PaymentSlice,
        explore: exploreSlice.reducer,
        user: userSlice,
        post: postSlice,
        comment: commentReducer,

    }
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
