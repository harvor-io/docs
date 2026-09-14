import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  Box,
  Container,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import StabilityBadge from "../components/StabilityBadge";
import { serviceStandardExpectedThrough } from "../data/serviceStandard";
import type { StabilityLabel } from "../data/stabilityLabels";
import { stabilityLabels } from "../data/stabilityLabels";

interface StabilityLabelDetailProps {
  label: StabilityLabel;
}

function StabilityLabelDetail({ label }: StabilityLabelDetailProps) {
  const index = stabilityLabels.findIndex((item) => item.id === label.id);
  const previous = stabilityLabels[index - 1];
  const next = stabilityLabels[index + 1];

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="body2" sx={{ mb: 2 }}>
        <Box
          component={RouterLink}
          to="/reference/stability-labels"
          sx={{ color: "text.secondary" }}
        >
          ← All stability labels
        </Box>
      </Typography>

      <Box sx={{ mb: 3 }}>
        <StabilityBadge label={label.id} size="medium" />
      </Box>
      <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 640, mb: 4 }}>
        {label.summary}
      </Typography>

      <Stack spacing={2.5} sx={{ mb: 5 }}>
        <Box>
          <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.5 }}>
            Interface stability
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {label.stability}
          </Typography>
        </Box>
        <Box>
          <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.5 }}>
            Recommended for
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {label.recommendedFor}
          </Typography>
        </Box>
      </Stack>

      <Divider sx={{ mb: 4 }} />

      <Typography variant="h6" component="h2" gutterBottom>
        Expectations checklist
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        What has to be true of a service or feature for it to carry the{" "}
        {label.label} label.
      </Typography>
      <List disablePadding sx={{ mb: 5 }}>
        {label.checklist.map((item) => (
          <ListItem key={item} disableGutters sx={{ py: 0.75, alignItems: "flex-start" }}>
            <ListItemIcon sx={{ minWidth: 32, mt: 0.5 }}>
              <CheckBoxOutlineBlankOutlinedIcon fontSize="small" color="disabled" />
            </ListItemIcon>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>

      <Divider sx={{ mb: 4 }} />

      <Typography variant="h6" component="h2" gutterBottom>
        Harvor Service Standard expectations
      </Typography>
      {(() => {
        const categories = serviceStandardExpectedThrough(label.id);
        if (categories.length === 0) {
          return (
            <Typography variant="body2" color="text.secondary" sx={{ mb: 5 }}>
              Nothing yet — there's no interface to hold to the standard
              until the service reaches Alpha. See the{" "}
              <Box component={RouterLink} to="/reference/service-standard" sx={{ color: "inherit" }}>
                Harvor Service Standard
              </Box>{" "}
              for what's expected at each later stage.
            </Typography>
          );
        }
        return (
          <>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {label.id === "ga"
                ? "By GA, a service or feature is expected to meet the Harvor Service Standard in full:"
                : `By ${label.label}, a service or feature is expected to meet the following (cumulative with earlier stages):`}
            </Typography>
            <Stack spacing={2} sx={{ mb: 2 }}>
              {categories.map((category) => (
                <Box key={category.id}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.5 }}>
                    {category.title}
                  </Typography>
                  <List disablePadding>
                    {category.items.map((item) => (
                      <ListItem key={item.text} disableGutters sx={{ py: 0.25, alignItems: "flex-start" }}>
                        <ListItemIcon sx={{ minWidth: 32, mt: 0.5 }}>
                          <CheckBoxOutlineBlankOutlinedIcon fontSize="small" color="disabled" />
                        </ListItemIcon>
                        <ListItemText primary={item.text} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              ))}
            </Stack>
            <Typography variant="body2" sx={{ mb: 5 }}>
              <Box component={RouterLink} to="/reference/service-standard" sx={{ color: "text.secondary" }}>
                See the full Harvor Service Standard →
              </Box>
            </Typography>
          </>
        );
      })()}

      <Divider sx={{ mb: 3 }} />

      <Stack direction="row" sx={{ justifyContent: "space-between" }}>
        <Box>
          {previous && (
            <Box
              component={RouterLink}
              to={`/reference/stability-labels/${previous.id}`}
              sx={{
                color: "text.secondary",
                display: "flex",
                alignItems: "center",
              }}
            >
              <ChevronLeftIcon fontSize="small" />
              {previous.label}
            </Box>
          )}
        </Box>
        <Box>
          {next && (
            <Box
              component={RouterLink}
              to={`/reference/stability-labels/${next.id}`}
              sx={{
                color: "text.secondary",
                display: "flex",
                alignItems: "center",
              }}
            >
              {next.label}
              <ChevronRightIcon fontSize="small" />
            </Box>
          )}
        </Box>
      </Stack>
    </Container>
  );
}

export default StabilityLabelDetail;
