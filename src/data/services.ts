export interface ServiceTopic {
  title: string;
  description: string;
}

export interface ServiceDoc {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  topics: ServiceTopic[];
}

function defaultTopics(name: string, id: string): ServiceTopic[] {
  return [
    {
      title: "Overview",
      description: `What ${name} solves and how it fits with the rest of Harvor.`,
    },
    {
      title: "Installation",
      description: `Run ${name} locally or in your environment.`,
    },
    {
      title: "Configuration",
      description: `Every option in harvor.yml under the ${id} section.`,
    },
    {
      title: "API reference",
      description: "Endpoints, payloads, and events.",
    },
    {
      title: "Operations",
      description: "Deployment, scaling, and troubleshooting notes.",
    },
  ];
}

export const services: ServiceDoc[] = [
  {
    id: "authz",
    name: "Gate",
    subtitle: "Authorization",
    description:
      "Centralize authorization so product teams can evolve access logic without application redeploys. Fine-grained roles, policies, and attribute-based rules, decoupled from your app.",
    topics: defaultTopics("Gate", "authz"),
  },
  {
    id: "organizations",
    name: "Crew",
    subtitle: "Organizations",
    description:
      "Model teams, accounts, and structures consistently across every Harvor-backed service. Multi-tenant workspaces with members, roles, hierarchies, and invitations.",
    topics: defaultTopics("Crew", "orgs"),
  },
  {
    id: "audit",
    name: "Trail",
    subtitle: "Audit",
    description:
      "Track who changed what, when, and why with immutable event trails designed for compliance. Tamper-evident records with retention and export controls.",
    topics: defaultTopics("Trail", "audit"),
  },
  {
    id: "eventbridge",
    name: "Relay",
    subtitle: "EventBridge",
    description:
      "Deliver service events reliably to internal and external consumers with clear operational visibility. Retries, HMAC signatures, and delivery observability.",
    topics: defaultTopics("Relay", "eventbridge"),
  },
  {
    id: "shortlinks",
    name: "Shorty",
    subtitle: "Shortlink Generator",
    description:
      "Generate and manage durable short links for product and marketing journeys without third-party lock-in. Branded domains, expiry rules, and analytics.",
    topics: defaultTopics("Shorty", "shortlinks"),
  },
  {
    id: "documents",
    name: "Doc",
    subtitle: "Document Generator",
    description:
      "Automate repetitive document generation from structured data while keeping templates controlled and auditable. Render contracts, invoices, and reports.",
    topics: defaultTopics("Doc", "documents"),
  },
];
