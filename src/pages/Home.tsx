import {
  Alert,
  Box,
  Container,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { services } from "../data/services";

interface NextStep {
  title: string;
  description: string;
  path: string;
}

const nextSteps: NextStep[] = [
  {
    title: "Installation",
    description: "Install a service, point it at a database, and make your first API call.",
    path: "/getting-started/installation",
  },
  {
    title: "Configuration",
    description: "Every option in harvor.yml, with defaults and examples for each service.",
    path: "/guides/configuration",
  },
  {
    title: "Self-hosting",
    description: "Docker, Helm, and Terraform paths for running Harvor in your own environment.",
    path: "/guides/self-hosting",
  },
  {
    title: "API and events",
    description: "REST endpoints, payloads, and the event model shared across every service.",
    path: "/reference/api",
  },
];

function Home() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Introduction
      </Typography>

      <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 680, mb: 2 }}>
        Harvor is a set of open-source, self-hostable services that provide
        the foundational pieces almost every application ends up building:
        authorization, organizations, audit logging, and event delivery.
        Instead of building and maintaining these from scratch for every
        product, you run a Harvor service, configure it, and integrate with
        it over a REST API.
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 680, mb: 4 }}>
        Each service is independent, so you can adopt one or all of them.
        They share the same configuration model, API conventions, and event
        model, so operating one means you already know how to operate the
        rest.
      </Typography>

      <Alert severity="info" sx={{ mb: 5 }}>
        Harvor is under active development. The services and APIs described
        in these docs are still taking shape — see the{" "}
        <Box component="a" href="https://github.com/harvor-io" sx={{ color: "inherit" }}>
          GitHub organization
        </Box>{" "}
        for current status.
      </Alert>

      <Typography variant="h5" component="h2" gutterBottom>
        Where to go next
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        New to Harvor? Start with installation, then read about configuring
        and self-hosting the services you plan to run.
      </Typography>
      <List disablePadding sx={{ mb: 5 }}>
        {nextSteps.map((step) => (
          <ListItemButton
            key={step.path}
            component={RouterLink}
            to={step.path}
            disableGutters
            sx={{ py: 1.25, px: 1.5, borderRadius: 1 }}
          >
            <ListItemText
              primary={step.title}
              secondary={step.description}
              slotProps={{ primary: { sx: { fontWeight: 600 } } }}
            />
          </ListItemButton>
        ))}
      </List>

      <Divider sx={{ mb: 5 }} />

      <Typography variant="h5" component="h2" gutterBottom>
        Services
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        Harvor ships as a set of independent services. Each one has its own
        documentation section covering configuration, the API, and
        operational details.
      </Typography>
      <List disablePadding>
        {services.map((service) => (
          <ListItemButton
            key={service.id}
            component={RouterLink}
            to={`/services/${service.id}`}
            disableGutters
            sx={{ py: 1.25, px: 1.5, borderRadius: 1 }}
          >
            <ListItemText
              primary={`${service.name} — ${service.subtitle}`}
              secondary={service.description}
              slotProps={{ primary: { sx: { fontWeight: 600 } } }}
            />
          </ListItemButton>
        ))}
      </List>
    </Container>
  );
}

export default Home;
