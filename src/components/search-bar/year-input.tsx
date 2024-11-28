"use client";

import React, { useCallback, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";

import { debounce } from "@/utils";

const debouncedHandleSearchYear = debounce(
  (
    event: { target: { value: string } },
    searchParams: URLSearchParams,
    pathname: string,
    replace: (url: string) => void,
  ) => {
    const year = event.target.value;

    const params = new URLSearchParams(searchParams);

    if (year) {
      params.set("y", year);
    } else {
      params.delete("y");
    }

    params.set("page", "1");

    replace(`${pathname}?${params.toString()}`);
  },
  500,
);

export const YearInput = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const [year, setYear] = useState(searchParams.get("y")?.toString() ?? "");

  const replace = useCallback((url: string) => router.replace(url), [router]);

  const handleSearchYear = useCallback(
    (event: { target: { value: string } }) => {
      setYear(event.target.value);
      debouncedHandleSearchYear(event, searchParams, pathname, replace);
    },
    [pathname, replace, searchParams],
  );
  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <TextField
        fullWidth
        id="fullWidth"
        value={year}
        label="Year"
        onChange={handleSearchYear}
        slotProps={{
          input: {
            endAdornment: year ? (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => {
                    handleSearchYear({ target: { value: "" } });
                  }}
                >
                  <ClearIcon />
                </IconButton>
              </InputAdornment>
            ) : null,
          },
        }}
      />
    </Box>
  );
};
