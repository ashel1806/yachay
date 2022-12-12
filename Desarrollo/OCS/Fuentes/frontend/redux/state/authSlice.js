import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authService from '../../lib/auth';

let userToken = ''
if (typeof window !== 'undefined') {
  userToken = JSON.parse(localStorage.getItem('token'));
}

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue, dispatch }) => {
    try {
      const data = await authService.login(credentials);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue, dispatch }) => {
    try {
      const res = await authService.register(credentials);

      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async () => {
  await authService.logout();
});

const initialState = userToken
  ? { isLogged: true, userToken }
  : { isLogged: false, userToken: null };

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.isLogged = true;
      state.userToken = action.payload.data;
    },
    [login.rejected]: (state, action) => {
      state.isLogged = false;
      state.userToken = null;
    },
    [register.fulfilled]: (state, action) => {
      state.isLogged = true;
      state.userToken = action.payload.userToken;
    },
    [register.rejected]: (state, action) => {
      state.isLogged = false;
    },
    [logout.fulfilled]: (state, action) => {
      state.isLogged = false;
      state.userToken = null;
    },
  },
});

export default authSlice.reducer;
