import { type RootState } from "@/store/types";

const getLoading = (state: RootState) => state.movieDetail.pending;
const getMovieDetail = (state: RootState) => state.movieDetail.movieDetail;

export { getLoading, getMovieDetail };
