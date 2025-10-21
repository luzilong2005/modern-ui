import Tooltip from "./Tooltip.vue";
import { withInstall } from "@modern-ui/utils";

export const TooltipWithInstall = withInstall(withInstall);

export { Tooltip, Tooltip as MuTooltip };

export * from "./types";
export * from "./constants";
export * from "./Tooltip";