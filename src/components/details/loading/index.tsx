import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import { Card } from "@/components/details/card";

const Loading = () => {
  return (
    <Card title={"Loading..."} sx={{ width: "100%", mb: 5 }}>
      <Stack spacing={4} direction={{ xs: "column", sm: "row" }}>
        <Box position={"relative"} display={"flex"} justifyContent={"center"}>
          <Skeleton
            variant="rectangular"
            width={300}
            height={426}
            sx={{ borderRadius: 4 }}
          />
        </Box>

        <Stack spacing={1} flex={1}>
          {Array.from({ length: 7 }).map((_, index) => (
            <Skeleton
              key={index}
              variant="rectangular"
              height={24}
              sx={{ borderRadius: 1 }}
            />
          ))}
          <Skeleton
            variant="rectangular"
            height={72}
            sx={{ borderRadius: 1 }}
          />
        </Stack>
      </Stack>
    </Card>
  );
};

export default Loading;
