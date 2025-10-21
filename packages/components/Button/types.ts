import type { BaseProps } from "../_internal";
import {
    BUTTON_COLOR_TYPES,
    BUTTON_NATIVE_TYPES,
    BUTTON_SIZES,
    BUTTON_VARIANTS,
    type BUTTON_SHAPES,
} from "./constants";
import { type Component, type Events, type TemplateRef } from "vue";

export type ButtonNativeType = (typeof BUTTON_NATIVE_TYPES)[number];
export type ButtonSize = (typeof BUTTON_SIZES)[number];
export type ButtonVariant = (typeof BUTTON_VARIANTS)[number];
export type ButtonColorType = (typeof BUTTON_COLOR_TYPES)[number];
export type ButtonShape = (typeof BUTTON_SHAPES)[number];
export interface ButtonProps extends Pick<BaseProps, "disabled"> {
    type?: ButtonNativeType;
    size?: ButtonSize;
    variant?: ButtonVariant;
    colorType?: ButtonColorType;
    icon?: Component;
    shape?: ButtonShape;
    block?: boolean;
}
export interface ButtonEmits {
    click: [ev: Events["onClick"]];
}
export interface ButtonSlots {
    default: () => any;
    leftSection: () => any;
    rightSection: () => any;
}
export interface ButtonExpose {
    buttonRef: TemplateRef<HTMLButtonElement>;
}
