import type { AlertProps } from "./types";

export const alertDefaultProps = {
    colorType: "primary",
    variant: "filled",
    closable: true,
} as const satisfies AlertProps;
