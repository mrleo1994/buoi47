import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  user: JSON.parse(localStorage.getItem("USER_INFO")),
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
