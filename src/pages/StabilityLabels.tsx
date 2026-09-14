import {
  Box,
  Container,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import StabilityBadge from "../components/StabilityBadge";
import { services } from "../data/services";
import { stabilityLabels } from "../data/stabilityLabels";

function StabilityLabels() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Stability labels
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 680, mb: 2 }}>
        Every Harvor service, and every notable feature within a service,
        carries one of four stability labels: Not started, Alpha, Beta, or
        GA. A label is a declaration of quality and stability — how much the
        interface is still expected to move — not a support commitment.
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 680, mb: 5 }}>
        Each label also carries a growing set of expectations from the{" "}
        <Box component={RouterLink} to="/reference/service-standard" sx={{ color: "text.secondary" }}>
          Harvor Service Standard
        </Box>{" "}
        — see a label's page for exactly what's expected at that stage, and
        the full standard for what's expected in full at GA.
      </Typography>

      <List disablePadding sx={{ mb: 6 }}>
        {stabilityLabels.map((item) => (
          <ListItemButton
            key={item.id}
            component={RouterLink}
            to={`/reference/stability-labels/${item.id}`}
            disableGutters
            sx={{ py: 1.75, px: 2, borderRadius: 2, alignItems: "flex-start" }}
          >
            <Stack spacing={0.75} sx={{ width: "100%", alignItems: "flex-start" }}>
              <StabilityBadge label={item.id} size="medium" />
              <ListItemText
                secondary={item.summary}
                sx={{ m: 0, width: "100%" }}
              />
            </Stack>
          </ListItemButton>
        ))}
      </List>

      <Divider sx={{ mb: 4 }} />

      <Typography variant="h5" component="h2" gutterBottom>
        How a label is assigned
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        A service or feature moves through these labels in order, and only
        earns the next one once it meets that label's expectations checklist
        — see each label's page for the specific bar. A new feature inside an
        already-GA service starts back at Not started or Alpha; it doesn't
        inherit the service's label automatically.
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 5 }}>
        Label changes, including downgrades, are called out in that
        service's release notes.
      </Typography>

      <Divider sx={{ mb: 4 }} />

      <Typography variant="h5" component="h2" gutterBottom>
        Current service labels
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        This reflects the label of each service as a whole. See a service's
        own page for the label of individual features inside it.
      </Typography>
      <Table size="small" sx={{ mb: 2 }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 700 }}>Service</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>Label</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {services.map((service) => (
            <TableRow key={service.id}>
              <TableCell>
                <Box
                  component={RouterLink}
                  to={`/services/${service.id}`}
                  sx={{ color: "text.primary" }}
                >
                  {service.name} — {service.subtitle}
                </Box>
              </TableCell>
              <TableCell>
                <StabilityBadge label={service.stabilityLabel} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}

export default StabilityLabels;
