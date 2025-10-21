import type { BaseProps, InlineInputProps } from "../_internal";
import { CHECKBOX_SIZES } from "./constants";
import type { ComputedRef, Events, ModelRef, TemplateRef } from "vue";

export type CheckboxSize = (typeof CHECKBOX_SIZES)[number];

export interface CheckboxProps extends InlineInputProps, Pick<BaseProps, "disabled"> {
    size?: CheckboxSize;
    defaultChecked?: boolean;
    value?: string;
}

export type CheckboxExpose = {
    inputRef: TemplateRef<HTMLInputElement>;
};

export type CheckboxEmits = {
    change: [ev: Events["onChange"], checked: boolean];
};

export interface CheckboxGroupProps extends BaseProps {
    name?: string;
}

export type CheckboxGroupExpose = {
    fieldRef: TemplateRef<HTMLFieldSetElement>;
};

export type CheckboxGroupContext = {
    name: ComputedRef<string | undefined>;
    modelValues: ModelRef<Array<string>>;
    addValue: (value?: string) => void;
    hasValue: (value?: string) => boolean;
    removeValue: (value?: string) => void;
};
