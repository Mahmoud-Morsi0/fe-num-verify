import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  username: string | undefined;
}

const initialState: InitialState = {
  username: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUsername(state, action) {
      state.username = action.payload;
    },
    logout(state) {
      state.username = undefined;
    },
  },
});

export const { logout, setUsername } = authSlice.actions;
export const authReducer = authSlice.reducer;
