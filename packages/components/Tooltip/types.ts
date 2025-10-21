import { type PopperPosition, type DelayValue } from "../_internal/Popper";
import type { TOOLTIP_SIZES } from "./constants";

export type TooltipSize = (typeof TOOLTIP_SIZES)[number];
export type TooltipPosition = PopperPosition;
export type TooltipOffset = [x: number, y: number] | number;
export type TooltipTrigger = "hover" | "click" | "contextmenu";
export type TooltipDelay = DelayValue;
export interface TooltipProps  {
    size?: TooltipSize;
    content?: string;
    position?: TooltipPosition;
    offset?: TooltipOffset;
    trigger?: TooltipTrigger;
    delay?: TooltipDelay;
};
