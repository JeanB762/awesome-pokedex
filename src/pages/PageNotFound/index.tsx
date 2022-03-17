import { Box, Paper, Typography } from "@mui/material";
import React from "react";

const NotFound: React.FC = () => {
  return (
    <>
      <Box
        component={Paper}
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h2">
            <strong>404</strong>
          </Typography>
          <Typography variant="h2">Page Not Found</Typography>
        </Box>
      </Box>
    </>
  );
};

export default NotFound;
