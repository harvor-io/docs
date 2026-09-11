import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import { navSections } from "../navigation";
import { DRAWER_WIDTH } from "./layoutConstants";

interface SideNavProps {
  mobileOpen: boolean;
  onClose: () => void;
  searchQuery: string;
}

function SideNav({ mobileOpen, onClose, searchQuery }: SideNavProps) {
  const location = useLocation();
  const query = searchQuery.trim().toLowerCase();

  const filteredSections = query
    ? navSections
        .map((section) => ({
          ...section,
          items: section.items.filter((item) =>
            item.label.toLowerCase().includes(query),
          ),
        }))
        .filter((section) => section.items.length > 0)
    : navSections;

  const content = (
    <Box sx={{ overflowY: "auto" }}>
      <Toolbar />
      <List sx={{ px: 1 }}>
        {filteredSections.map((section) => (
          <Box key={section.label} sx={{ mb: 1 }}>
            <ListSubheader
              disableSticky
              sx={{
                bgcolor: "transparent",
                lineHeight: "32px",
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: 0.4,
                textTransform: "uppercase",
                color: "text.disabled",
              }}
            >
              {section.label}
            </ListSubheader>
            {section.items.map((item) => (
              <ListItemButton
                key={item.path}
                component={NavLink}
                to={item.path}
                end={item.path === "/"}
                selected={location.pathname === item.path}
                onClick={onClose}
                sx={{
                  borderRadius: 1.5,
                  mx: 0.5,
                  "&.Mui-selected, &.Mui-selected:hover": {
                    bgcolor: (theme) =>
                      theme.palette.mode === "light"
                        ? "rgba(53, 102, 245, 0.08)"
                        : "rgba(110, 149, 255, 0.14)",
                    color: "primary.main",
                  },
                }}
              >
                <ListItemText
                  slotProps={{
                    primary: {
                      sx: {
                        fontSize: 14,
                        fontWeight:
                          location.pathname === item.path ? 600 : 400,
                      },
                    },
                  }}
                >
                  {item.label}
                </ListItemText>
              </ListItemButton>
            ))}
          </Box>
        ))}

        {filteredSections.length === 0 && (
          <Typography sx={{ px: 2, py: 1 }} variant="body2" color="text.disabled">
            No results
          </Typography>
        )}
      </List>
    </Box>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: DRAWER_WIDTH }, flexShrink: { sm: 0 } }}
      aria-label="Documentation sections"
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onClose}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            width: DRAWER_WIDTH,
            bgcolor: "background.paper",
          },
        }}
      >
        {content}
      </Drawer>
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            width: DRAWER_WIDTH,
            boxSizing: "border-box",
            borderRight: "1px solid",
            borderColor: "divider",
            bgcolor: "background.paper",
          },
        }}
      >
        {content}
      </Drawer>
    </Box>
  );
}

export default SideNav;
