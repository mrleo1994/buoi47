import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  user: null,
};

let userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setInfoUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export default userSlice.reducer;
export let { setInfoUser } = userSlice.actions;
