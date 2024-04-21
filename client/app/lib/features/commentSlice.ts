import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface CommentState {
  comments: any[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: CommentState = {
  comments: [],
  status: 'idle',
  error: null
};

export const fetchCommentsByPost = createAsyncThunk('comments/fetchByPost', async (postId: number) => {
  const response = await axios.get(`http://localhost:1128/api/comment/${postId}`);
  return response.data;
});

export const addComment = createAsyncThunk('comments/addComment', async (comment: { content: string; postId: number; userId: number }) => {
  const response = await axios.post('http://localhost:1128/api/comment', comment);
  return response.data;
});

export const deleteComment = createAsyncThunk('comments/deleteComment', async (id: number) => {
  await axios.delete(`http://localhost:1128/api/comment/${id}`);
  return id;
});

const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCommentsByPost.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCommentsByPost.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.comments = action.payload;
      })
      .addCase(fetchCommentsByPost.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.comments.push(action.payload);
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        state.comments = state.comments.filter(comment => comment.id !== action.payload);
      });
  }
});

export default commentSlice.reducer;