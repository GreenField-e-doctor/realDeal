import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

interface Post {
  id: number;
  title: string;
  content: string;
  image: string;
  liked: boolean;
}

interface User {
  id: number;
  email: string;
  password: string;
  name: string;
  image: string;
}

interface UserProfileState {
  posts: Post[];
  user: User;
}

interface AddPostPayload {
  post: Omit<Post, 'id'>;
}

const initialState: UserProfileState = {
  posts: [],
  user: { id: 0, email: '', password: '', name: '', image: '' },
};

export const fetchPosts = createAsyncThunk(
  'userProfile/fetchPosts',
  async () => {
    try {
      const response = await axios.get<Post[]>('http://localhost:1128/api/post');
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
);

export const addPost = createAsyncThunk(
  'userProfile/addPost',
  async (payload: AddPostPayload) => {
    try {
      const response = await axios.post<Post>('http://localhost:1128/api/post', payload.post);
      return response.data;
    } catch (error) {
      console.error('Error adding post:', error);
      throw error;
    }
  }
);

export const deletePost = createAsyncThunk(
  'userProfile/deletePost',
  async (postId: number) => {
    try {
      await axios.delete(`http://localhost:1128/api/post/${postId}`);
      return postId;
    } catch (error) {
      console.error('Error deleting post:', error);
      throw error;
    }
  }
);
export const fetchUserById = createAsyncThunk(
  'userProfile/fetchUserById',
  async (userId: number) => {
    try {
      const response = await axios.get<User>(`http://localhost:1128/api/user/users/2`);
      return response.data;
    } catch (error) {
      console.error('Error fetching user:', error);
      throw error;
    }
  }
);

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    deletePost(state, action: PayloadAction<number>) {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    updateProfile(state, action: PayloadAction<Partial<User>>) {
      state.user = { ...state.user, ...action.payload };
    },
    updatePosts(state, action: PayloadAction<Post[]>) {
      state.posts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
    builder.addCase(addPost.fulfilled, (state, action) => {
      state.posts.push(action.payload);
    });
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(deletePost.fulfilled, (state, action) => {
      state.posts = state.posts.filter(post => post.id !== action.payload);
    });
  },
});



export const { setUser, updateProfile, updatePosts } = userProfileSlice.actions;

export default userProfileSlice.reducer;
