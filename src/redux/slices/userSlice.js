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
export const fetchAuthMe = createAsyncThunk(
    'user/fetchAuthMestatus',
    async () => {
        const auth = getAuth();

        const { user } = await axios.get('/auth/me')
        return user



    }
)
const initialState = {
    user: null,
    status: "loading"
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
       logOut(state) {
            state.user = null;
            state.status = "loading";
        },
        removeUser(state) {
            state.user.email = null;
            state.token = null;
            state.id = null;
        },
    },
    extraReducers: {
        [fetchUser.pending]: (state) => {
            state.status = 'loading';
            state.user = null
        },
        [fetchUser.fulfilled]: (state, action) => {
            state.status = 'succes';
            state.user = action.payload;

        },
        [fetchUser.rejected]: (state) => {
            state.status = 'error';
            state.user = null
        },
        [fetchSingIn.pending]: (state) => {
            state.status = 'loading';
            state.user = null
        },
        [fetchSingIn.fulfilled]: (state, action) => {
            state.status = 'succes';
            state.user = action.payload;

        },
        [fetchSingIn.rejected]: (state) => {
            state.status = 'error';
            state.user = null
        },
    }
});
export const selectIsAuth = (state) => Boolean(state.auth.user);
export const { logOut, removeUser } = userSlice.actions;

export default userSlice.reducer;