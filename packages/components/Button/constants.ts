import { SIZES } from "../_internal";

export const BUTTON_NAME = "MuButton" as const;
export const BUTTON_SIZES = SIZES;
export const BUTTON_NATIVE_TYPES = ["button", "submit", "reset"] as const;
export const BUTTON_VARIANTS = ["basic", "filled", "outlined", "ghost", "text", "light"] as const;
export const BUTTON_COLOR_TYPES = ["primary", "secondary", "success", "danger", "warning"] as const;
export const BUTTON_SHAPES = ["circle", "square"] as const;
