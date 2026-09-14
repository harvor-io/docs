import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import { stabilityLabelIcon } from "../components/stabilityIcons";
import type { NavItem } from "../navigation";
import { navSections } from "../navigation";
import { DRAWER_WIDTH } from "./layoutConstants";

interface SideNavProps {
  mobileOpen: boolean;
  onClose: () => void;
  searchQuery: string;
}

function filterItems(items: NavItem[], query: string): NavItem[] {
  return items
    .map((item) => {
      const matches = item.label.toLowerCase().includes(query);
      const children = item.children ? filterItems(item.children, query) : undefined;
      if (matches) return item;
      if (children && children.length > 0) return { ...item, children };
      return null;
    })
    .filter((item): item is NavItem => item !== null);
}

function SideNav({ mobileOpen, onClose, searchQuery }: SideNavProps) {
  const location = useLocation();
  const query = searchQuery.trim().toLowerCase();

  const filteredSections = query
    ? navSections
        .map((section) => ({ ...section, items: filterItems(section.items, query) }))
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
              <Box key={item.path}>
                <ListItemButton
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

                {item.children && item.children.length > 0 && (
                  <Box
                    sx={{
                      ml: 2.25,
                      pl: 1.25,
                      borderLeft: "1px solid",
                      borderColor: "divider",
                    }}
                  >
                    {item.children.map((child) => (
                      <ListItemButton
                        key={child.path}
                        component={NavLink}
                        to={child.path}
                        selected={location.pathname === child.path}
                        onClick={onClose}
                        sx={{
                          borderRadius: 1.5,
                          mx: 0.5,
                          py: 0.5,
                          "&.Mui-selected, &.Mui-selected:hover": {
                            bgcolor: (theme) =>
                              theme.palette.mode === "light"
                                ? "rgba(53, 102, 245, 0.08)"
                                : "rgba(110, 149, 255, 0.14)",
                            color: "primary.main",
                          },
                        }}
                      >
                        {child.iconId && (
                          <ListItemIcon
                            sx={{
                              minWidth: 28,
                              color: "inherit",
                              "& svg": { fontSize: 18 },
                            }}
                          >
                            {stabilityLabelIcon[child.iconId]}
                          </ListItemIcon>
                        )}
                        <ListItemText
                          slotProps={{
                            primary: {
                              sx: {
                                fontSize: 13.5,
                                fontWeight:
                                  location.pathname === child.path ? 600 : 400,
                              },
                            },
                          }}
                        >
                          {child.label}
                        </ListItemText>
                      </ListItemButton>
                    ))}
                  </Box>
                )}
              </Box>
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
