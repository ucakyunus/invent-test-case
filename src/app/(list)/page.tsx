import { getMovies } from "@/actions/movies";
import { MovieList } from "@/components/movies/list";

interface MoviesPageProps {
  searchParams: {
    s?: string;
    page?: string;
    y?: string;
    type?: "movie" | "series" | "episode";
  };
}

export default async function MoviesPage({ searchParams }: MoviesPageProps) {
  // eslint-disable-next-line @typescript-eslint/await-thenable
  const params = await searchParams;

  const searchQuery = params?.s ?? "Pokemon";
  const page = params?.page ?? "1";
  const year = params?.y ?? "";
  const type = params?.type ?? "";

  const movies = await getMovies({
    s: searchQuery,
    page,
    ...(year && { y: year }),
    ...(type && { type }),
  });

  return <MovieList rows={movies.Search} totalCount={+movies.totalResults} />;
}
