import type { BaseProps, InlineInputProps } from "../_internal";
import { RADIO_SIZES } from "./constants";
import type { ComputedRef, Events, ModelRef, TemplateRef } from "vue";

export type RadioSize = (typeof RADIO_SIZES)[number];

export interface RadioProps extends InlineInputProps, Pick<BaseProps, "disabled"> {
    size?: RadioSize;
    defaultChecked?: boolean;
    value?: string;
}

export type RadioEmits = {
    change: [ev: Events["onChange"], checked: boolean];
};

export type RadioExpose = {
    inputRef: TemplateRef<HTMLInputElement>;
};

export interface RadioGroupProps extends BaseProps {
    label?: string;
    name?: string;
    size?: RadioSize;
}

export type RadioGroupContext = {
    name: ComputedRef<string | undefined>;
    modelValue: ModelRef<string | undefined>;
    setModelValue: (value?: string) => void;
};

export type RadioGroupExpose = {
    fieldRef: TemplateRef<HTMLFieldSetElement>;
};
