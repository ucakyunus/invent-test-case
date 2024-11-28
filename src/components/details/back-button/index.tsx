"use client";

import { useRouter } from "next/navigation";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BackButton = () => {
  const router = useRouter();

  return (
    <IconButton
      color="inherit"
      aria-label="go back"
      size={"large"}
      onClick={() => router.back()}
    >
      <ArrowBackIcon />
    </IconButton>
  );
};

export default BackButton;
