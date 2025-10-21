import type { ProgressProps } from "./types";

export const progressDefaultProps = {
    size: "md",
    max: 100,
    value: 0,
    direction: "horizontal",
} as const satisfies ProgressProps;
