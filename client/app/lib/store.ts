import { configureStore } from '@reduxjs/toolkit'
import PaymentSlice from './features/paymentSlice'
import {exploreSlice} from "../lib/features/exploreslice"
import userSlice from './features/userSlice'
export const makeStore = () => {
  return configureStore({
    reducer: {
        payment: PaymentSlice,
        explore: exploreSlice.reducer,
        user: userSlice,

    }
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
