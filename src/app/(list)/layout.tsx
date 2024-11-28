import React, { Suspense } from "react";
import { type Metadata } from "next";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { SearchBar } from "@/components/search-bar";

export const metadata: Metadata = {
  title: "Movies",
};

const ListLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Container sx={{ mb: 5 }}>
        <Suspense>
          <Box sx={{ my: { xs: 3, md: 5 } }}>
            <SearchBar />
          </Box>
        </Suspense>

        {children}
      </Container>
    </main>
  );
};

export default ListLayout;
