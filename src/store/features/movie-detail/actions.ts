import { createAsyncThunk } from "@reduxjs/toolkit";

import { getMovieDetail } from "@/actions/movies";
import { type IMovieDetailResponse } from "@/types/movie";

export const fetchMovieDetail = createAsyncThunk(
  "movie/detail",
  async (imdbId: string) => {
    try {
      const response = await getMovieDetail(imdbId);

      return response;
    } catch (err) {
      console.error(err);
      return {} as IMovieDetailResponse;
    }
  },
);
