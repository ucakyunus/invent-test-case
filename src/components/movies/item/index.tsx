"use client";

import * as React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { type IMovieListItem } from "@/types/movie";

interface MoviesItemProps {
  item: IMovieListItem;
}

export const MoviesItem = ({ item }: MoviesItemProps) => {
  const router = useRouter();

  const handleRowClick = () => {
    router.push(`/movies/${item.imdbID}`);
  };

  return (
    <TableRow
      sx={{
        "&:last-child td, &:last-child th": { border: 0 },
        cursor: "pointer",
      }}
      hover
      onClick={handleRowClick}
    >
      <TableCell align="center" sx={{ fontWeight: "bold" }}>
        {item.imdbID}
      </TableCell>
      <TableCell align="center">
        {item.Poster !== "N/A" ? (
          <Image
            src={item.Poster}
            alt={item.Title}
            width={100 * 0.704}
            height={100}
            quality={100}
            priority={true}
            style={{ borderRadius: 3 }}
          />
        ) : (
          <div
            style={{
              height: 80,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            -
          </div>
        )}
      </TableCell>
      <TableCell align="center">{item.Title}</TableCell>
      <TableCell align="center">{item.Year}</TableCell>
      <TableCell align="center">
        {item.Type.charAt(0).toUpperCase() + item.Type.slice(1)}
      </TableCell>
    </TableRow>
  );
};
