import type { ChangeEvent, FormEvent } from "react";
import {
  AppBar,
  Box,
  IconButton,
  InputBase,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
  alpha,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DarkModeIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeIcon from "@mui/icons-material/LightModeOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";
import { useColorMode } from "../ColorModeContext";

interface TopNavProps {
  onMenuClick: () => void;
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

function TopNav({ onMenuClick, searchQuery, onSearchChange }: TopNavProps) {
  const { mode, toggleColorMode } = useColorMode();

  return (
    <AppBar
      position="fixed"
      color="transparent"
      sx={{
        bgcolor: "background.paper",
        borderBottom: "1px solid",
        borderColor: "divider",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar sx={{ gap: 1, px: { xs: 1.5, sm: 3 } }}>
        <IconButton
          color="inherit"
          edge="start"
          aria-label="Toggle navigation"
          onClick={onMenuClick}
          sx={{ display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>

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
            flexShrink: 0,
          }}
        >
          <Box
            component="img"
            src="/favicon.svg"
            alt=""
            sx={{ width: 28, height: 28 }}
          />
          <Typography
            variant="h6"
            component="span"
            sx={{ fontWeight: 700, display: { xs: "none", sm: "block" } }}
          >
            Harvor Docs
          </Typography>
        </Box>

        <Box
          component="form"
          role="search"
          onSubmit={(event: FormEvent) => event.preventDefault()}
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            flex: 1,
            minWidth: 0,
            maxWidth: 480,
            ml: { xs: 1, sm: 3 },
            borderRadius: 2,
            bgcolor: (theme) =>
              alpha(
                theme.palette.text.primary,
                theme.palette.mode === "light" ? 0.04 : 0.08,
              ),
            "&:hover": {
              bgcolor: (theme) =>
                alpha(
                  theme.palette.text.primary,
                  theme.palette.mode === "light" ? 0.06 : 0.12,
                ),
            },
          }}
        >
          <SearchIcon
            sx={{
              position: "absolute",
              left: 10,
              color: "text.disabled",
              fontSize: 20,
            }}
          />
          <InputBase
            value={searchQuery}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              onSearchChange(event.target.value)
            }
            placeholder="Search docs…"
            inputProps={{ "aria-label": "Search documentation" }}
            sx={{
              width: "100%",
              pl: 4.5,
              pr: 1.5,
              py: 0.75,
              fontSize: 14,
            }}
          />
        </Box>

        <Stack direction="row" spacing={0.5} sx={{ ml: "auto", flexShrink: 0 }}>
          <Tooltip
            title={mode === "light" ? "Switch to dark mode" : "Switch to light mode"}
          >
            <IconButton
              color="inherit"
              onClick={toggleColorMode}
              aria-label="Toggle color mode"
            >
              {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
            </IconButton>
          </Tooltip>

          <IconButton
            color="inherit"
            component="a"
            href="https://github.com/harvor-io"
            aria-label="Harvor on GitHub"
          >
            <GitHubIcon />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default TopNav;
