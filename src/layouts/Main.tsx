import { useState } from "react";
import { Box, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import TopNav from "./TopNav";
import SideNav from "./SideNav";
import Footer from "./Footer";

function Main() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100%" }}>
      <TopNav
        onMenuClick={() => setMobileOpen((open) => !open)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <Box sx={{ display: "flex", flex: 1 }}>
        <SideNav
          mobileOpen={mobileOpen}
          onClose={() => setMobileOpen(false)}
          searchQuery={searchQuery}
        />

        <Box
          component="main"
          sx={{ flex: 1, minWidth: 0, bgcolor: "background.default" }}
        >
          <Toolbar />
          <Outlet />
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}

export default Main;
