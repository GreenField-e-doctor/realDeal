import { configureStore } from '@reduxjs/toolkit'
import PaymentSlice from './features/paymentSlice'
import userSlice from './features/userSlice'
export const makeStore = () => {
  return configureStore({
    reducer: {
        payment: PaymentSlice,
        user: userSlice,

    }
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
