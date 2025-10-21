import type { BaseProps } from "../_internal";
import type { SLIDER_DIRECTIONS, SLIDER_SIZES } from "./constants";

export type SliderSize = (typeof SLIDER_SIZES)[number];
export type SliderDirection = (typeof SLIDER_DIRECTIONS)[number];
export interface SliderProps extends 
    Pick<BaseProps, "disabled"> {
        max?: number;
        value?: number;
        size?: SliderSize;
        direction?: SliderDirection;
    };
