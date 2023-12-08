import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface AuthState {
    authState: boolean;
    authToken: string;
}

// Initial state
const initialState: AuthState = {
    authState: false,
    authToken: "",
};

// Actual Slice
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // Action to set the authentication status
        setAuthState(state, action) {
            state.authState = action.payload;
        },

        // Action to set the authentication token
        setAuthToken(state, action) {
            state.authToken = action.payload;
        },
    },

    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.auth,
            };
        },
    },
});

export const { setAuthState, setAuthToken } = authSlice.actions;

export const selectAuthState = (state: AppState) => state.auth.authState;

export const selectAuthToken = (state: AppState) => state.auth.authToken;

export default authSlice.reducer;