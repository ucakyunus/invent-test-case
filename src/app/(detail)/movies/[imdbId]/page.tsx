import type { Metadata } from "next";
import { getMovieDetail } from "@/actions/movies";
import { Detail } from "@/components/details/detail";

type Props = {
  params: { imdbId: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // eslint-disable-next-line @typescript-eslint/await-thenable
  const { imdbId } = await params;

  const movie = await getMovieDetail(imdbId);

  return {
    title: movie.Title,
    description: movie.Plot,
  };
}

export default async function FilmsDetailPage({ params }: Props) {
  // eslint-disable-next-line @typescript-eslint/await-thenable
  const { imdbId } = await params;

  return <Detail imdbId={imdbId} />;
}
