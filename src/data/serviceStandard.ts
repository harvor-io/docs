import type { StabilityLabelId } from "./stabilityLabels";

export interface ServiceStandardItem {
  text: string;
  /**
   * The earliest stability label by which a service or feature is expected
   * to satisfy this item on its way to GA. Requirements are cumulative —
   * everything expected at Alpha is still expected at Beta and GA.
   */
  expectedBy: StabilityLabelId;
}

export interface ServiceStandardCategory {
  id: string;
  title: string;
  items: ServiceStandardItem[];
}

export const serviceStandard: ServiceStandardCategory[] = [
  {
    id: "observable",
    title: "Observable",
    items: [
      { text: "Supports OpenTelemetry traces, metrics, and structured logs", expectedBy: "beta" },
      { text: "Preserves trace and request context across service boundaries", expectedBy: "beta" },
      { text: "Exposes the health and performance signals needed to operate it confidently", expectedBy: "ga" },
    ],
  },
  {
    id: "consistent-apis",
    title: "Consistent APIs",
    items: [
      { text: "Follows predictable REST conventions and correct HTTP semantics", expectedBy: "alpha" },
      { text: "Supports idempotent requests and safe retries where appropriate", expectedBy: "beta" },
      { text: "Returns clear, consistent validation and error responses", expectedBy: "beta" },
      { text: "Provides versioned API documentation and an OpenAPI specification", expectedBy: "ga" },
    ],
  },
  {
    id: "configuration-as-code",
    title: "Configuration as Code",
    items: [
      { text: "Allows resources and configuration to be defined declaratively", expectedBy: "alpha" },
      { text: "Fits naturally into version-control and GitOps workflows", expectedBy: "beta" },
      { text: "Applies configuration safely and idempotently", expectedBy: "beta" },
      { text: "Validates configuration before changes are applied", expectedBy: "ga" },
    ],
  },
  {
    id: "secure-by-default",
    title: "Secure by Default",
    items: [
      { text: "Supports authentication and least-privilege authorization", expectedBy: "alpha" },
      { text: "Supports TLS and external secret management", expectedBy: "beta" },
      { text: "Validates untrusted input and protects against common abuse", expectedBy: "beta" },
      { text: "Provides audit records for security-sensitive operations", expectedBy: "ga" },
    ],
  },
  {
    id: "reliable-and-scalable",
    title: "Reliable and Scalable",
    items: [
      { text: "Can scale horizontally across instances or vertically with additional resources", expectedBy: "beta" },
      { text: "Handles startup, shutdown, failures, and recovery gracefully", expectedBy: "beta" },
      { text: "Uses timeouts, retries, backoff, and backpressure where appropriate", expectedBy: "beta" },
      { text: "Documents its consistency, durability, and delivery guarantees", expectedBy: "ga" },
    ],
  },
  {
    id: "easy-to-run",
    title: "Easy to Run",
    items: [
      { text: "Ships as a versioned, production-ready container image", expectedBy: "alpha" },
      { text: "Provides liveness and readiness health checks", expectedBy: "alpha" },
      { text: "Supports rolling deployments and straightforward upgrades", expectedBy: "beta" },
      { text: "Includes deployment examples for Kubernetes and other common environments", expectedBy: "ga" },
      { text: "Documents configuration, operation, backup, recovery, and troubleshooting", expectedBy: "ga" },
    ],
  },
];

const labelOrder: StabilityLabelId[] = ["not-started", "alpha", "beta", "ga"];

/**
 * The full slice of the service standard expected to be met once a service
 * or feature has reached `labelId`, cumulative across every earlier stage.
 * Categories with no items yet expected at this stage are omitted.
 */
export function serviceStandardExpectedThrough(
  labelId: StabilityLabelId,
): ServiceStandardCategory[] {
  const maxIndex = labelOrder.indexOf(labelId);
  return serviceStandard
    .map((category) => ({
      ...category,
      items: category.items.filter(
        (item) => labelOrder.indexOf(item.expectedBy) <= maxIndex,
      ),
    }))
    .filter((category) => category.items.length > 0);
}
