import { services } from "./data/services";

export interface NavItem {
  label: string;
  path: string;
}

export interface NavSection {
  label: string;
  items: NavItem[];
}

export const navSections: NavSection[] = [
  {
    label: "Getting Started",
    items: [
      { label: "Introduction", path: "/" },
      { label: "Installation", path: "/getting-started/installation" },
    ],
  },
  {
    label: "Guides",
    items: [
      { label: "Configuration", path: "/guides/configuration" },
      { label: "Self-hosting", path: "/guides/self-hosting" },
    ],
  },
  {
    label: "Reference",
    items: [{ label: "API and events", path: "/reference/api" }],
  },
  {
    label: "Services",
    items: services.map((service) => ({
      label: `${service.name} · ${service.subtitle}`,
      path: `/services/${service.id}`,
    })),
  },
];
