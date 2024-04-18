// commentsSlice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

interface Comment {
  id: number;
  content: string;
  imageUrl?: string;
}

export const fetchComments = createAsyncThunk<Comment[]>('comments/fetchComments', async () => {
  const response = await axios.get<Comment[]>('http://localhost:1128/api/comment');
  return response.data;
});

export const addComment = createAsyncThunk<Comment, string>('comments/addComment', async (commentText) => {
  const response = await axios.post<Comment>('http://localhost:1128/api/comment/addComment', { content: commentText });
  return response.data;
});

const commentsSlice = createSlice({
  name: 'comments',
  initialState: [] as Comment[],
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchComments.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.push(action.payload);
      });
  },
});

export default commentsSlice.reducer;
