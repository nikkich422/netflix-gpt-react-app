import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
  name: "gpt",
  initialState: {
    togglerGpt: false,
    searchMovieName: null,
    searchMovie: null,
  },
  reducers: {
    changeGptState: (state) => {
      state.togglerGpt = !state.togglerGpt;
    },
    setSearchMovieName: (state, action) => {
      state.searchMovieName = action.payload;
    },
    setSearchMovie: (state, action) => {
      state.searchMovie = action.payload;
    },
  },
});

export const { changeGptState, setSearchMovieName, setSearchMovie } =
  GptSlice.actions;

export default GptSlice.reducer;
