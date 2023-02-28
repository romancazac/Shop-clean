import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { BASE_URL } from '../../constants';


// create user
export const fetchUser = createAsyncThunk(
    'user/fetchUserstatus',
    async (params) => {
        const auth = getAuth();
        const { email, password } = params;
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        // const {user} = await signInWithEmailAndPassword(auth, email, password);
        return user



    }
)
// sing in
export const fetchSingIn = createAsyncThunk(
    'user/fetchSingInstatus',
    async ({username, password}) => {
      const { data } = await axios.post(`${BASE_URL}/login`, {
        username,
        password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
     
      return data;
    }

    
)
export const fetchAuthMe = createAsyncThunk(
    'user/fetchAuthMestatus',
    async (token) => {
        const { data} = await axios.get(`${BASE_URL}/users`,{        
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
       
        return data


    }
)

const userSlice = createSlice({
    name: 'auth',
    initialState: {
      user: null,
      token: null,
      loading: false,
      error: null
    },
    reducers: {
      loginSuccess: (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.loading = false;
      }, 
      registerStart: (state) => {
        state.loading = true;
        state.error = null;
      },
      registerSuccess: (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.loading = false;
      },

      logout: (state) => {
        state.user = null;
        state.token = null;
        state.loading = false;
        state.error = null;
      }
    },
    extraReducers: {
      [fetchAuthMe.pending]: (state) => {
        state.user = ''
        state.token = ''
        state.loading = true;
      },
      [fetchAuthMe.fulfilled]: (state, action) => {     
        state.user = action.payload;
        state.loading = false;
      },
      [fetchAuthMe.rejected]: (state) => {
        state.loading = false;
        state.error = true;
        window.localStorage.removeItem('token');
      },
// ----------
      [fetchSingIn.pending]: (state) => {
        state.user = ''
        state.token = ''
        state.loading = true;
      },
      [fetchSingIn.fulfilled]: (state, action) => {
        state.user = action.payload;
        state.token = action.payload.token;
        state.loading = false;
      },
      [fetchSingIn.rejected]: (state) => {
        state.loading = false;
        state.error = true;
    
      },
   }
});
export const selectIsAuth = state => Boolean(state.auth.user)

export const { loginStart, loginSuccess, loginFailure, registerStart, registerSuccess, registerFailure, logout } = userSlice.actions;


export default userSlice.reducer;