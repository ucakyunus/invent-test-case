import Stack from "@mui/material/Stack";
import { SearchInput } from "@/components/search-bar/search-input";
import { YearInput } from "@/components/search-bar/year-input";
import { TypeOptions } from "@/components/search-bar/type-options";

export const SearchBar = () => {
  return (
    <Stack
      direction={{
        xs: "column",
        md: "row",
      }}
      spacing={2}
      px={{ xs: 0, md: 5 }}
    >
      <Stack flex={2}>
        <SearchInput />
      </Stack>
      <Stack flex={1}>
        <YearInput />
      </Stack>
      <Stack flex={1}>
        <TypeOptions />
      </Stack>
    </Stack>
  );
};
