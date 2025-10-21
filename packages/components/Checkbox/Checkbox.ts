import type { CheckboxProps } from "./types";

export const checkboxDefaultProps = {
    size: "md",
    disabled: false,
} as const satisfies CheckboxProps;
