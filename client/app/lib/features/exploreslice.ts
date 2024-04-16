import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { ExploreItem } from './explore/explore';
// Define an interface for the ExploreItem type
interface ExploreItem {
    id: number;
    name: string;
    imgP: string;
    imgB: string;
    description: string;
}

// Define a type for the slice state
interface ExploreState {
    exploreItems: ExploreItem[];
    status: 'idle' | 'loading' | 'failed';
}

// Initial state
const initialState: ExploreState = {
    exploreItems: [],
    status: 'idle',
};

// Define an async thunk to fetch explore data
export const fetchExploreItems = createAsyncThunk('explore/fetchExploreItems', async () => {
    const response = await axios.get<ExploreItem[]>("http://localhost:1128/api/explore/");
    return response.data;
});

// Create the slice
export const exploreSlice = createSlice({
    name: 'explore',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchExploreItems.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchExploreItems.fulfilled, (state, action) => {
                state.status = 'idle';
                state.exploreItems = action.payload;
            })
            .addCase(fetchExploreItems.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

// Export the reducer
