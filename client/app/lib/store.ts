import { configureStore } from '@reduxjs/toolkit'
import PaymentSlice from './features/paymentSlice'
import {exploreSlice} from "../lib/features/exploreslice"
import userSlice from './features/userSlice'
import { allnftsSlice } from "./features/allnftSlice";
import commentsReducer from './features/commentsSlice';
export const makeStore = () => {
  return configureStore({
    reducer: {
        payment: PaymentSlice,
        explore: exploreSlice.reducer,
        user: userSlice,
        allnft: allnftsSlice.reducer,  
        comments: commentsReducer,


    }
  })
}



export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
