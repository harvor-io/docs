import { Box, Link as MuiLink, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: "1px solid",
        borderColor: "divider",
        py: 6,
        px: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        textAlign: "center",
      }}
    >
      <Box
        component={Link}
        to="/"
        aria-label="Go to home"
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          textDecoration: "none",
          color: "text.primary",
        }}
      >
        <Box
          component="img"
          src="/favicon.svg"
          alt=""
          sx={{ width: 28, height: 28 }}
        />
        <Typography sx={{ fontWeight: 700 }}>Harvor Docs</Typography>
      </Box>

      <Stack
        direction="row"
        spacing={3}
        sx={{ flexWrap: "wrap", justifyContent: "center" }}
      >
        <MuiLink href="https://harvor.io" underline="hover" color="text.secondary">
          Harvor
        </MuiLink>
        <MuiLink
          href="https://github.com/harvor-io"
          underline="hover"
          color="text.secondary"
        >
          GitHub
        </MuiLink>
      </Stack>

      <Typography variant="body2" color="text.secondary">
        Copyright 2026 Harvor, Inc.
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 480 }}>
        Harvor is open source under Apache 2.0. Contributions are welcome at{" "}
        <MuiLink href="https://github.com/harvor-io" underline="hover">
          github.com/harvor-io
        </MuiLink>
        .
      </Typography>
    </Box>
  );
}

export default Footer;
