import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface User {
  id: number;
  name: string;
  image?: string;
}

interface Comment {
  id: number;
  content: string;
  postId: number;
  userId: number;
  user: User;  // Include user information in the comment
}

interface CommentState {
  commentsByPostId: { [key: number]: Comment[] };
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null;
}

const initialState: CommentState = {
  commentsByPostId: {},
  status: 'idle',
  error: null
};

export const fetchCommentsByPost = createAsyncThunk('comments/fetchByPost', async (postId: number) => {
  const response = await axios.get<Comment[]>(`http://localhost:1128/api/comment/${postId}`);
  return { postId, comments: response.data };  // Assumes that the response data includes user details
});

export const addComment = createAsyncThunk('comments/addComment', async ({ content, postId, userId }: { content: string; postId: number; userId: number }) => {
  const response = await axios.post<Comment>('http://localhost:1128/api/comment', { content, postId, userId });
  console.log('Add Comment Response:', response.data);
 return { comment: response.data, postId };  // Return the new comment and postId
});

const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByPost.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCommentsByPost.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Ensure that there is an array to hold the comments for the postId
        state.commentsByPostId[action.payload.postId] = action.payload.comments;
      })
      .addCase(fetchCommentsByPost.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        const { postId, comment } = action.payload;
        if (!state.commentsByPostId[postId]) {
          state.commentsByPostId[postId] = [];
        }
        state.commentsByPostId[postId].push(comment);
      });
  }
});

export default commentSlice.reducer;
