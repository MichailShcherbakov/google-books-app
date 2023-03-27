import { Stack } from "@mui/material";
import React from "react";
import { GoogleBookApi } from "~/api";
import { AppBar } from "~/components/AppBar";

export function HomePage() {
  React.useEffect(() => {
    GoogleBookApi.getBooks({
      pattern: "flowers",
    });
  }, []);

  return (
    <Stack
      direction="column"
      sx={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <AppBar />
    </Stack>
  );
}
