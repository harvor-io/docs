import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import {
  Alert,
  Box,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import StabilityBadge from "../components/StabilityBadge";
import { serviceStandard } from "../data/serviceStandard";

function ServiceStandard() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        The Harvor Service Standard
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 680, mb: 3 }}>
        Harvor services are open source, production-ready building blocks.
        While each service solves a different problem, every Harvor service
        strives to meet the same core standard.
      </Typography>

      <Alert severity="info" sx={{ mb: 5 }}>
        Only services and features that have reached{" "}
        <Box
          component={RouterLink}
          to="/reference/stability-labels/ga"
          sx={{ color: "inherit", fontWeight: 700 }}
        >
          GA
        </Box>{" "}
        are expected to meet this standard in full. Earlier stages are
        expected to meet a growing subset of it — see each{" "}
        <Box
          component={RouterLink}
          to="/reference/stability-labels"
          sx={{ color: "inherit", fontWeight: 700 }}
        >
          stability label
        </Box>{" "}
        for exactly what's expected at that point.
      </Alert>

      <Stack spacing={5}>
        {serviceStandard.map((category) => (
          <Box key={category.id}>
            <Typography variant="h6" component="h2" gutterBottom>
              {category.title}
            </Typography>
            <List disablePadding>
              {category.items.map((item) => (
                <ListItem
                  key={item.text}
                  disableGutters
                  sx={{
                    py: 0.75,
                    alignItems: "flex-start",
                    gap: 1.5,
                    flexWrap: "wrap",
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 32, mt: 0.5 }}>
                    <CheckBoxOutlineBlankOutlinedIcon fontSize="small" color="disabled" />
                  </ListItemIcon>
                  <ListItemText primary={item.text} sx={{ flex: "1 1 320px", m: 0 }} />
                  <Stack direction="row" spacing={0.75} sx={{ alignItems: "center", mt: 0.25 }}>
                    <Typography variant="caption" color="text.secondary">
                      Expected by
                    </Typography>
                    <Box
                      component={RouterLink}
                      to={`/reference/stability-labels/${item.expectedBy}`}
                      sx={{ textDecoration: "none" }}
                    >
                      <StabilityBadge label={item.expectedBy} />
                    </Box>
                  </Stack>
                </ListItem>
              ))}
            </List>
          </Box>
        ))}
      </Stack>
    </Container>
  );
}

export default ServiceStandard;
