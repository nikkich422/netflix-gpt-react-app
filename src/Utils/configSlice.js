import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    pageLanguage: "en",
  },
  reducers: {
    setDefaultLanguage: (state, action) => {
      state.pageLanguage = action.payload;
    },
  },
});

export const { setDefaultLanguage } = configSlice.actions;

export default configSlice.reducer;
