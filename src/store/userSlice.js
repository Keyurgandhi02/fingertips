import { createSlice } from "@reduxjs/toolkit";

const initState = {
  name: "",
};

export const userSlice = createSlice({
  name: "User",
  initialState: initState,
  reducers: {
    createuser: (state, action) => {
      state.name = action.payload;
    },
    
  },
});

export const { createuser } = userSlice.actions;

export default userSlice.reducer;
