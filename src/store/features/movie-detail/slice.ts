import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchMovieDetail } from "@/store/features/movie-detail/actions";
import { type IMovieDetailResponse } from "@/types/movie.d";

interface IMoviesState {
  movieDetail: IMovieDetailResponse;
  pending: boolean;
  error: boolean;
}

const initialState: IMoviesState = {
  movieDetail: {} as IMovieDetailResponse,
  pending: true,
  error: false,
};

// NOTE: I used Redux on the movie detail page since it was required(considered a plus) in the test case.
export const movieDetailSlice = createSlice({
  name: "movieDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieDetail.pending, (state) => {
        state.pending = true;
        state.error = false;
      })
      .addCase(
        fetchMovieDetail.fulfilled,
        (state, action: PayloadAction<IMovieDetailResponse>) => {
          state.pending = false;
          state.error = false;
          state.movieDetail = action.payload;
        },
      )
      .addCase(fetchMovieDetail.rejected, (state) => {
        state.error = true;
        state.pending = false;
      });
  },
});

export const movieDetailReducer = movieDetailSlice.reducer;
