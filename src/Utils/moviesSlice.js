import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    PlayingMovies: null,
    MovieTrailor: null,
    TVList: null,
    TVSeries: null,
    AllTrending: null,
  },
  reducers: {
    addPlayingMovies: (state, action) => {
      state.PlayingMovies = action.payload;
    },
    addMovieTrailor: (state, action) => {
      state.MovieTrailor = action.payload;
    },
    addTVList: (state, action) => {
      state.TVList = action.payload;
    },
    addTVSeries: (state, action) => {
      state.TVSeries = action.payload;
    },
    addAllTrending: (state, action) => {
      state.AllTrending = action.payload;
    },
  },
});

export const {
  addPlayingMovies,
  addMovieTrailor,
  addTVList,
  addTVSeries,
  addAllTrending,
} = moviesSlice.actions;

export default moviesSlice.reducer;
