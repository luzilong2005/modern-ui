import type { BaseProps, InlineInputProps } from "../_internal";
import { SWITCH_SIZES } from "./constants";
import type { Events, TemplateRef } from "vue";

export type SwitchSize = (typeof SWITCH_SIZES)[number];
export interface SwitchProps extends InlineInputProps, Pick<BaseProps, "disabled"> {
    size?: SwitchSize;
    defaultChecked?: boolean;
    value?: boolean;
}

export type SwitchEmits = {
    change: [ev: Events["onChange"], checked: boolean];
};

export type SwitchExpose = {
    inputRef: TemplateRef<HTMLInputElement>;
};
