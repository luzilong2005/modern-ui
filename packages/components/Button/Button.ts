import type { ButtonProps } from "./types";

export const buttonDefaultProps = {
    type: "button",
    size: "md",
    variant: "basic",
    colorType: "primary",
    shape: "square",
    block: false,
    disabled: false,
} as const satisfies ButtonProps;
