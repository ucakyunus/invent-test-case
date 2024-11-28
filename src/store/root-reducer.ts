import { combineReducers } from "redux";

import { movieDetailReducer } from "@/store/features/movie-detail";

const rootReducer = combineReducers({
  movieDetail: movieDetailReducer,
});

export default rootReducer;
