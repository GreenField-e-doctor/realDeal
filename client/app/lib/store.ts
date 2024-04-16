import { configureStore } from '@reduxjs/toolkit'
import PaymentSlice from './features/paymentSlice'
import {exploreSlice} from "../lib/features/exploreslice"
export const makeStore = () => {
  return configureStore({
    reducer: {
        payment: PaymentSlice,
        explore: exploreSlice.reducer,
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
