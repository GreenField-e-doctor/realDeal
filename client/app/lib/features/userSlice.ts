import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { log } from 'console';
interface UserData {
    name: string;
    email: string;
    password: string;
    role?: string;  // Optional role field
    image?: string;  // Optional image field
}
interface ServerError {
    message: string;
    statusCode?: number;
}

interface CustomAxiosResponse extends AxiosResponse {
    data: ServerError;
}

interface AxiosServerError extends AxiosError {
    response?: CustomAxiosResponse;
}

const initialState = {
    user: null,
    isLoading: false,
    error: null as string | null
};
export const registerUser = createAsyncThunk(
    'user/register',
    async (userData: UserData, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:1128/api/user/register', userData);
            console.log(response.data);
             
            
            return response.data;
        } catch (error: unknown) {
            const e = error as AxiosServerError;
            if (e.response && e.response.data) {
                return rejectWithValue(e.response.data.message);
            }
            return rejectWithValue('An unknown error occurred');
        }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        resetUserState: (state) => {
            state.isLoading = false;
            state.error = null;
            state.user = null;
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
                state.error = null;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
                state.user = null;
            });
    }
});

export const { resetUserState, setError } = userSlice.actions;
export default userSlice.reducer;
