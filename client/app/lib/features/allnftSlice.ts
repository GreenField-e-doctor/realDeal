import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface Nft {
  id: number;
  imgUrl: string;
  status: string;
  UncommenRare: string;
  price: string;
  genre: string;
}
export interface AllnftState {
  allnft: Nft[];
  status: string;
  genre: string;
  loading: boolean;
  error: string | null;
}

export const fetchAllnfts = createAsyncThunk<Nft[], Partial<AllnftState>>('http://localhost:1128/api/allnfts/fetchAllnfts', async (params) => {
  try {
    let queryParams: Partial<AllnftState> = {};
    if (params?.status !== 'all') {
      queryParams.status = params.status;
    }
    if (params?.genre !== 'all') {
      queryParams.genre = params.genre;
    }

    const response = await axios.get<Nft[]>(`http://localhost:1128/api/allnft/`, { params: queryParams });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch allnfts');
  }
});

export const allnftsSlice = createSlice({
  name: 'allnfts',
  initialState: {
    allnft: [],
    status: 'all',
    genre: 'all',
    loading: false,
    error: null,
  } as AllnftState,
  reducers: {
    setStatusFilter: (state, action) => {
      state.status = action.payload;
    },
    setGenreFilter: (state, action) => {
      state.genre = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllnfts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllnfts.fulfilled, (state, action) => {
        state.loading = false;
        state.allnft = action.payload;
      })
      .addCase(fetchAllnfts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      });
  },
});

export const { setStatusFilter, setGenreFilter } = allnftsSlice.actions;
