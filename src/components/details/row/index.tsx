import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface DetailRowProps {
  label: string;
  value: string;
  column?: boolean;
}

export const Row = ({ label, value, column = false }: DetailRowProps) => {
  return (
    <Box display={"flex"} gap={0.5} flexDirection={column ? "column" : "row"}>
      <Typography fontWeight={"bolder"}>{label}:</Typography>
      <Typography>{value}</Typography>
    </Box>
  );
};
