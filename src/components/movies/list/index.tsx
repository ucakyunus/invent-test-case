import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import { MoviesFooter } from "@/components/movies/footer";
import { type IMovieListItem } from "@/types/movie";
import { MoviesItem } from "@/components/movies/item";

interface MovieListProps {
  rows: IMovieListItem[];
  totalCount: number;
}

export const MovieList = ({ rows = [], totalCount }: MovieListProps) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table aria-label="movies table list">
            <TableHead>
              <TableRow>
                <TableCell align="center">IMDB ID</TableCell>
                <TableCell align="center">Poster</TableCell>
                <TableCell align="center">Title</TableCell>
                <TableCell align="center">Year</TableCell>
                <TableCell align="center">Type</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <MoviesItem key={row.imdbID} item={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {rows.length > 0 && <MoviesFooter totalCount={totalCount} />}
      </Paper>
    </Box>
  );
};
