import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    email: string | null;
    error: string | null; 
}

const initialState: UserState = {
    email: null,
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{email: string, password: string}>) => {
            console.log(action.payload); 
            state.email = action.payload.email; 
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        }
    },
});

export const { login, setError } = userSlice.actions;

export default userSlice.reducer;
