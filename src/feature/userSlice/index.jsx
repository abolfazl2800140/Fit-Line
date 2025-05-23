import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    id: null,
  },
  reducers: {
    setUserId: (state, action) => {
      state.id = action.payload;
    },
  },
});

export default userSlice;
