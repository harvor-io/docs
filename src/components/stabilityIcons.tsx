import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import type { ChipProps } from "@mui/material";
import type { ReactElement } from "react";
import type { StabilityLabelId } from "../data/stabilityLabels";

export const stabilityLabelIcon: Record<StabilityLabelId, ReactElement> = {
  "not-started": <RadioButtonUncheckedOutlinedIcon />,
  alpha: <ScienceOutlinedIcon />,
  beta: <ConstructionOutlinedIcon />,
  ga: <VerifiedOutlinedIcon />,
};

export const stabilityLabelColor: Record<StabilityLabelId, ChipProps["color"]> = {
  "not-started": "default",
  alpha: "warning",
  beta: "info",
  ga: "success",
};
