"use server";

import {
  type IMovieDetailResponse,
  type IMovieListResponse,
  type IMovieParameter,
} from "@/types/movie";
import { fetchData } from "@/utils/api";

export const getMovies = async (data: IMovieParameter) => {
  try {
    const response = await fetchData<IMovieListResponse>(data);

    return response;
  } catch (err) {
    console.log(err);
    return {
      Search: [],
      totalResults: "0",
      Response: "False",
    };
  }
};

export const getMovieDetail = async (imdbId: string) => {
  try {
    const response = await fetchData<IMovieDetailResponse>({
      i: imdbId,
      plot: "full",
    });

    return response;
  } catch (err) {
    console.log(err);
    return {} as IMovieDetailResponse;
  }
};
