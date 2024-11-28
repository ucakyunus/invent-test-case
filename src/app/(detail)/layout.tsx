import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import BackButton from "@/components/details/back-button";

const DetailLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Box sx={{ backgroundColor: "info.main", height: "60px" }}>
        <Container
          sx={{ height: "100%", display: "flex", alignItems: "center" }}
        >
          <BackButton />
        </Container>
      </Box>

      <Container sx={{ mt: 5 }}>{children}</Container>
    </main>
  );
};

export default DetailLayout;
