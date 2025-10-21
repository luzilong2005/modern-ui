import { ALERT_COLOR_TYPES, ALERT_VARIANTS } from "./constants";
import type { Component } from "vue";

export type AlertVariant = (typeof ALERT_VARIANTS)[number];
export type AlertColorType = (typeof ALERT_COLOR_TYPES)[number];

export interface AlertProps {
    icon?: Component;
    title?: string;
    content?: string;
    variant?: AlertVariant;
    colorType?: AlertColorType;
    closable?: boolean;
    closeIcon?: Component;
}

export interface AlertEmits {
    close: [];
}
