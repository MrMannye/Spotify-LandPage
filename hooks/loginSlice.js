import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    _id: null,
    user: null,
    admin: null
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        signIn: (state,action) => {
            state.user = action.payload.name,
            state.admin = action.payload.admin,
            state._id = action.payload.id
        },
        signOut: (state) => {
            state.user = null,
            state.admin = 0,
            state._id = null
        }
    }
})

export const {signIn, signOut} = loginSlice.actions;
export default loginSlice.reducer;