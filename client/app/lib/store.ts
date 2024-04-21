import { configureStore } from '@reduxjs/toolkit'
import PaymentSlice from './features/paymentSlice'
import {exploreSlice} from "../lib/features/exploreslice"
import userSlice from './features/userSlice'
import userProfileReducer from './features/UserProfileSlice.reducer';
import postSlice from './features/postSlice'
import commentReducer from './features/commentSlice';
import { allnftsSlice } from "./features/allnftSlice";
import commentsReducer from './features/commentsSlice';
export const makeStore = () => {
  return configureStore({
    reducer: {
        payment: PaymentSlice,
        explore: exploreSlice.reducer,
        user: userSlice,
        userProfile: userProfileReducer,
        post: postSlice,
        comment: commentReducer,
        allnft: allnftsSlice.reducer,  
        comments: commentsReducer,


    }
  })
}






import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    userProfile: userProfileReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof makeStore>
export const useAppDispatch = () => useDispatch<AppDispatch>();