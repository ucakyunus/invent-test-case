interface IRating {
  Source: string;
  Value: string;
}

export interface IMovieListItem {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface IMovieListResponse {
  Search: IMovieListItem[];
  totalResults: string;
  Response: string;
}

export interface IMovieDetailResponse {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: IRating[];
  Metascore: string | null;
  imdbRating: string | null;
  imdbVotes: string | null;
  imdbID: string;
  Type: string;
  DVD: string | null;
  BoxOffice: string | null;
  Production: string | null;
  Website: string | null;
  Response: string;
  totalSeasons?: string | null;
}

export interface IMovieParameter {
  s?: string;
  i?: string;
  t?: string;
  type?: "movie" | "series" | "episode";
  y?: string;
  plot?: string;
  r?: string;
  page?: string;
  callback?: string;
  v?: string;
  h?: string;
}
