"use client";

import { useEffect, useMemo } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import { Card } from "@/components/details/card";
import { Row } from "@/components/details/row";
import Loading from "@/components/details/loading";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  fetchMovieDetail,
  getLoading,
  getMovieDetail,
} from "@/store/features/movie-detail";

interface DetailProps {
  imdbId: string;
}

export const Detail = ({ imdbId }: DetailProps) => {
  const dispatch = useAppDispatch();
  const movie = useAppSelector(getMovieDetail);
  const isLoading = useAppSelector(getLoading);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    dispatch(fetchMovieDetail(imdbId));
  }, [dispatch, imdbId]);

  const movieDetails = useMemo(
    () => [
      { label: "Genre", value: movie.Genre ?? "-" },
      { label: "Writer", value: movie.Writer ?? "-" },
      { label: "Director", value: movie.Director ?? "-" },
      { label: "Released Date", value: movie.Released ?? "-" },
      { label: "Year", value: movie.Year ?? "-" },
      { label: "Total Season", value: movie.totalSeasons ?? "-" },
      { label: "IMDB RATING", value: movie.imdbRating ?? "-" },
      { label: "Plot", value: movie.Plot ?? "-", column: true },
    ],
    [movie],
  );

  if (isLoading || !imdbId) {
    return <Loading />;
  }

  return (
    <Card title={movie.Title} sx={{ width: "100%", mb: 5 }}>
      <Stack spacing={4} direction={{ xs: "column", sm: "row" }}>
        <Box display={"flex"} justifyContent={"center"}>
          <Image
            src={movie.Poster}
            alt={movie.Title}
            height={426}
            width={300}
            priority
            style={{ borderRadius: 4 }}
          />
        </Box>

        <Stack spacing={1} flex={1}>
          {movieDetails.map((detail, index) => (
            <Row
              key={index}
              label={detail.label}
              value={detail.value}
              column={detail.column}
            />
          ))}
        </Stack>
      </Stack>
    </Card>
  );
};
