"use client";

import React, { useCallback, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";

import { debounce } from "@/utils";

const debouncedHandleSearch = debounce(
  (
    event: React.ChangeEvent<HTMLInputElement>,
    searchParams: URLSearchParams,
    pathname: string,
    replace: (url: string) => void,
  ) => {
    const term = event.target.value;

    if (!term) return;

    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("s", term);
      params.set("page", "1");
    }

    replace(`${pathname}?${params.toString()}`);
  },
  500,
);

export const SearchInput = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const [search, setSearch] = useState(
    searchParams.get("s")?.toString() ?? "Pokemon",
  );

  const replace = useCallback((url: string) => router.replace(url), [router]);

  const handleSearch = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value);
      debouncedHandleSearch(event, searchParams, pathname, replace);
    },
    [pathname, replace, searchParams],
  );

  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <TextField
        fullWidth
        id="fullWidth"
        label="Search"
        value={search}
        onChange={handleSearch}
        error={!search}
        helperText={!search ? "Please enter a search term" : ""}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: search ? (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => {
                    setSearch("");
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
