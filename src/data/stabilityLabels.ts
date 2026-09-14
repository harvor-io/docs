export type StabilityLabelId = "not-started" | "alpha" | "beta" | "ga";

export interface StabilityLabel {
  id: StabilityLabelId;
  label: string;
  summary: string;
  stability: string;
  recommendedFor: string;
  checklist: string[];
}

export const stabilityLabels: StabilityLabel[] = [
  {
    id: "not-started",
    label: "Not started",
    summary:
      "Scoped but not yet built. Nothing to install, run, or depend on yet.",
    stability: "No interface exists yet, so there's nothing to break.",
    recommendedFor: "Tracking future work. Don't build against it.",
    checklist: [
      "Has a name and a defined scope — an issue, RFC, or design doc",
      "No public API, config surface, or installable artifact exists",
      "Not listed as usable in any service's documentation",
    ],
  },
  {
    id: "alpha",
    label: "Alpha",
    summary:
      "Early and experimental. Built to validate an approach, still missing edges, and expected to change shape as we learn.",
    stability:
      "Interfaces, config, and behavior can change or disappear release to release, without a deprecation window.",
    recommendedFor:
      "Local experiments, proof-of-concepts, and early feedback — not production traffic.",
    checklist: [
      "Runs end to end for at least one real use case",
      "Core config and API surface exist, even if incomplete",
      "Known gaps and rough edges are tracked in the open, not hidden",
      "Upgrading between releases may require config or integration changes",
    ],
  },
  {
    id: "beta",
    label: "Beta",
    summary:
      "Feature-complete for its intended scope and hardening under real use. The rough edges are known and being sanded down.",
    stability:
      "Breaking changes are possible but called out in release notes with a migration path, not made silently.",
    recommendedFor:
      "Non-critical production workloads where an occasional breaking change is tolerable.",
    checklist: [
      "Scope is fixed — no more ground-up functionality changes expected before GA",
      "Automated tests cover the primary paths",
      "Has run in at least one real deployment outside local development",
      "Any breaking change ships with release notes and a migration path",
    ],
  },
  {
    id: "ga",
    label: "GA",
    summary:
      "General availability. Production-ready and held to the same bar every other GA service is held to.",
    stability:
      "Follows semantic versioning. Breaking changes only in a major version, with a deprecation notice ahead of removal.",
    recommendedFor: "Production workloads of any size.",
    checklist: [
      "Has run in production, unchanged in behavior, for at least one full release cycle",
      "Config and API surface are documented and considered stable",
      "A deprecation policy applies to every future change",
      "Operational guidance exists: scaling, troubleshooting, upgrade path",
    ],
  },
];

export const stabilityLabelById: Record<StabilityLabelId, StabilityLabel> = {
  "not-started": stabilityLabels[0],
  alpha: stabilityLabels[1],
  beta: stabilityLabels[2],
  ga: stabilityLabels[3],
};
