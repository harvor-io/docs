import { services } from "./data/services";
import type { StabilityLabelId } from "./data/stabilityLabels";
import { stabilityLabels } from "./data/stabilityLabels";

export interface NavItem {
  label: string;
  path: string;
  iconId?: StabilityLabelId;
  children?: NavItem[];
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
    label: "Stability Labels",
    items: [
      {
        label: "Overview",
        path: "/reference/stability-labels",
        children: stabilityLabels.map((item) => ({
          label: item.label,
          path: `/reference/stability-labels/${item.id}`,
          iconId: item.id,
        })),
      },
    ],
  },
  {
    label: "Services",
    items: services.map((service) => ({
      label: `${service.name} · ${service.subtitle}`,
      path: `/services/${service.id}`,
    })),
  },
];
