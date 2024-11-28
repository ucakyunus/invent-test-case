import type { Metadata } from "next";
import { getMovieDetail } from "@/actions/movies";
import { Detail } from "@/components/details/detail";

interface MovieDetailProps {
  params: Promise<{ imdbId: string }>;
}

export async function generateMetadata({
  params,
}: MovieDetailProps): Promise<Metadata> {
  const { imdbId } = await params;

  const movie = await getMovieDetail(imdbId);

  return {
    title: movie.Title,
    description: movie.Plot,
  };
}

export default async function FilmsDetailPage({ params }: MovieDetailProps) {
  const { imdbId } = await params;

  return <Detail imdbId={imdbId} />;
}
