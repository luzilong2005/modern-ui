import type { BaseProps } from "../_internal";
import type { PROGRESS_DIRECTIONS, PROGRESS_SIZES } from "./constants";

export type ProgressSize = (typeof PROGRESS_SIZES)[number];
export type ProgressDirection = (typeof PROGRESS_DIRECTIONS)[number];
export interface ProgressProps extends BaseProps {
    size?: ProgressSize;
    max?: number;
    value?: number;
    direction?: ProgressDirection;
}
