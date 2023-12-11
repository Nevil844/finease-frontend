import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "./store";
import User from "@/models/User";

export interface UserState {
    userData: User | null;
};

const initialState: UserState = {
    userData: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // Action to set the authentication status
        setUserData(state, action) {
            state.userData = action.payload;
        },
    },
    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.user,
            };
        },
    },
});

export const { setUserData } = userSlice.actions;

export const selectUserData = (state: AppState) => state.user.userData;

export default userSlice.reducer;