import {
  Alert,
  Box,
  Container,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
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
      <Typography variant="h3" component="h1" gutterBottom>
        {service.name}
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
