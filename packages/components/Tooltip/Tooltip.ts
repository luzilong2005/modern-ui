import type { TooltipProps } from "./types";

export const tooltipDefaultProps = {
    position: "bottom",
    size: "md",
    offset: 8,
    trigger: "hover",
    delay: 1000,
} as const satisfies TooltipProps;
