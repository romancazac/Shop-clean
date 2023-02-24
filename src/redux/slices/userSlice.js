import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";


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
    async (params) => {
        const auth = getAuth();
        const { email, password } = params;
        const { user } = await signInWithEmailAndPassword(auth, email, password);
        return user



    }
)
// export const fetchAuthMe = createAsyncThunk(
//     'user/fetchAuthMestatus',
//     async () => {
//         const auth = getAuth();

//         const { user } = await axios.get('/auth/me')
//         return user



//     }
// )

const userSlice = createSlice({
    name: 'auth',
    initialState: {
      user: null,
      token: null,
      loading: false,
      error: null
    },
    reducers: {
      loginStart: (state) => {
        state.loading = true;
        state.error = null;
      },
      loginSuccess: (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.loading = false;
      }, 
      loginFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
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
      registerFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      logout: (state) => {
        state.user = null;
        state.token = null;
        state.loading = false;
        state.error = null;
      }
    }
    
});
export const selectIsAuth = state => Boolean(state.auth.user)

export const { loginStart, loginSuccess, loginFailure, registerStart, registerSuccess, registerFailure, logout } = userSlice.actions;


export default userSlice.reducer;