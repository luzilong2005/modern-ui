import type { InlineInputProps } from "../_internal";
import type { INPUT_LABEL_POSITIONS, INPUT_SIZES } from "./constants";
import type { Events, TemplateRef } from "vue";

export type InputSize = (typeof INPUT_SIZES)[number];
export type InputLabelPosition = (typeof INPUT_LABEL_POSITIONS)[number];
export type InputProps = InlineInputProps & {
    size?: InputSize;
    placeholder?: string;
    labelPosition?: InputLabelPosition;
    type?: string;
};
export type InputEmits = {
    input: [ev: Events["onInput"], value: string];
    change: [ev: Events["onChange"], value: string];
    focus: [ev: FocusEvent];
    blur: [ev: FocusEvent];
    clear: [void];
};
export type InputSlots = {
    prefix?: () => any;
    suffix?: () => any;
};
export type InputExpose = {
    inputRef: TemplateRef<HTMLInputElement | null>;
    focus: () => void;
    blur: () => void;
    select: () => void;
    clear: () => void;
};
