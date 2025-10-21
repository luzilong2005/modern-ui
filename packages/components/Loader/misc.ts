import type { LoaderProps } from "./types";

export const loaderDefaultProps = {
    size: 1,
    defaultSpinner: "circle",
} as const satisfies LoaderProps;
