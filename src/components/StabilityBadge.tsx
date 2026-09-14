import { Chip, type ChipProps } from "@mui/material";
import type { StabilityLabelId } from "../data/stabilityLabels";
import { stabilityLabelById } from "../data/stabilityLabels";
import { stabilityLabelColor, stabilityLabelIcon } from "./stabilityIcons";

interface StabilityBadgeProps {
  label: StabilityLabelId;
  size?: ChipProps["size"];
}

function StabilityBadge({ label, size = "small" }: StabilityBadgeProps) {
  return (
    <Chip
      icon={stabilityLabelIcon[label]}
      label={stabilityLabelById[label].label}
      color={stabilityLabelColor[label]}
      size={size}
      variant="outlined"
      sx={{ fontWeight: 700, letterSpacing: 0.3 }}
    />
  );
}

export default StabilityBadge;
