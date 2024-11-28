"use client";

import React, { useCallback, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";

export const TypeOptions = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const [type, setType] = useState(searchParams.get("type")?.toString() ?? "");

  const replace = useCallback((url: string) => router.replace(url), [router]);

  const handleChange = useCallback(
    (event: { target: { value: string } }) => {
      const type = event.target.value;

      const params = new URLSearchParams(searchParams);

      if (type) {
        params.set("type", type);
      } else {
        params.delete("type");
      }

      params.set("page", "1");

      setType(type);

      replace(`${pathname}?${params.toString()}`);
    },
    [searchParams, pathname, replace],
  );

  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <TextField
        fullWidth
        select
        value={type}
        label="Type"
        onChange={handleChange}
        slotProps={{
          input: {
            endAdornment: type ? (
              <InputAdornment position="end">
                <IconButton
                  sx={{ mr: 2 }}
                  onClick={() => {
                    handleChange({ target: { value: "" } });
                  }}
                >
                  <ClearIcon />
                </IconButton>
              </InputAdornment>
            ) : null,
          },
        }}
      >
        <MenuItem value={"movie"}>Movie</MenuItem>
        <MenuItem value={"series"}>Series</MenuItem>
        <MenuItem value={"episode"}>Episode</MenuItem>
      </TextField>
    </Box>
  );
};
