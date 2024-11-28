import * as React from "react";
import MuiCard, { type CardProps as MuiCardProps } from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";

interface CardProps extends MuiCardProps {
  title: string;
  children: React.ReactNode;
}

export const Card = ({ title, children, ...rest }: CardProps) => {
  return (
    <MuiCard {...rest}>
      <CardHeader
        title={title.toUpperCase()}
        sx={{ color: "info.main", textAlign: "center" }}
      />

      <CardContent>{children}</CardContent>
    </MuiCard>
  );
};
