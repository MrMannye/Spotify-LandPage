import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: "",
    user: null,
    admin: null,
    email: ""
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        signIn: (state,action) => {
            state.user = action.payload.name,
            state.admin = action.payload.admin,
            state.email = action.payload.email
            state.id = action.payload.id
        },
        signOut: (state) => {
            state.user = null,
            state.admin = 0,
            state._id = "",
            state.email = ""
        }
    }
})

export const {signIn, signOut} = loginSlice.actions;
export default loginSlice.reducer;