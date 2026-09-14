import { Navigate, Route, Routes } from "react-router-dom";
import { services } from "./data/services";
import { stabilityLabels } from "./data/stabilityLabels";
import Main from "./layouts/Main";
import Home from "./pages/Home";
import PlaceholderPage from "./pages/PlaceholderPage";
import ServicePage from "./pages/ServicePage";
import StabilityLabelDetail from "./pages/StabilityLabelDetail";
import StabilityLabels from "./pages/StabilityLabels";

function App() {
  return (
    <Routes>
      <Route element={<Main />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/getting-started/installation"
          element={
            <PlaceholderPage
              title="Installation"
              description="Install a service, point it at a database, and make your first API call."
            />
          }
        />
        <Route
          path="/guides/configuration"
          element={
            <PlaceholderPage
              title="Configuration"
              description="Every option in harvor.yml, with defaults and examples for each service."
            />
          }
        />
        <Route
          path="/guides/self-hosting"
          element={
            <PlaceholderPage
              title="Self-hosting"
              description="Docker, Helm, and Terraform paths for running Harvor in your own environment."
            />
          }
        />
        <Route
          path="/reference/api"
          element={
            <PlaceholderPage
              title="API and events"
              description="REST endpoints, payloads, and the event model shared across every service."
            />
          }
        />
        <Route path="/reference/stability-labels" element={<StabilityLabels />} />
        {stabilityLabels.map((label) => (
          <Route
            key={label.id}
            path={`/reference/stability-labels/${label.id}`}
            element={<StabilityLabelDetail label={label} />}
          />
        ))}

        {services.map((service) => (
          <Route
            key={service.id}
            path={`/services/${service.id}`}
            element={<ServicePage service={service} />}
          />
        ))}
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
