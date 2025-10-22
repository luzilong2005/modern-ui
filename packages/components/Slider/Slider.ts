import type { SliderProps } from "./types";

export const sliderDefaultProps = {
    size: "md",
    max: 100,
    value: 0,
    disabled: false,
    step:1
} as const satisfies SliderProps;
