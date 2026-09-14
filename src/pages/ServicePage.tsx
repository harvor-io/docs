import {
  Alert,
  Box,
  Container,
  Divider,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import StabilityBadge from "../components/StabilityBadge";
import type { ServiceDoc } from "../data/services";

interface ServicePageProps {
  service: ServiceDoc;
}

function ServicePage({ service }: ServicePageProps) {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="overline" color="text.secondary">
        {service.subtitle}
      </Typography>
      <Stack direction="row" spacing={1.5} sx={{ mb: 1, alignItems: "center" }}>
        <Typography variant="h3" component="h1">
          {service.name}
        </Typography>
        <StabilityBadge label={service.stabilityLabel} size="medium" />
      </Stack>
      <Typography variant="body2" sx={{ mb: 3 }}>
        <Box
          component={RouterLink}
          to={`/reference/stability-labels/${service.stabilityLabel}`}
          sx={{ color: "text.secondary" }}
        >
          What does this label mean?
        </Box>
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 640, mb: 4 }}>
        {service.description}
      </Typography>

      <Alert severity="info" sx={{ mb: 5 }}>
        {service.name} hasn't shipped yet, so this section is a placeholder.
        It will fill in as the service is built — track progress at{" "}
        <Box component="a" href="https://github.com/harvor-io" sx={{ color: "inherit" }}>
          github.com/harvor-io
        </Box>
        .
      </Alert>

      <Divider sx={{ mb: 4 }} />

      <Typography variant="h6" component="h2" gutterBottom>
        In this section
      </Typography>
      <List disablePadding>
        {service.topics.map((topic) => (
          <ListItem key={topic.title} disableGutters sx={{ py: 1.25, alignItems: "flex-start" }}>
            <ListItemText
              primary={topic.title}
              secondary={topic.description}
              slotProps={{ primary: { sx: { fontWeight: 600 } } }}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default ServicePage;
