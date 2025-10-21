import type { HTMLAttributes } from "vue";

export interface BaseProps {
    class?: HTMLAttributes["class"];
    style?: HTMLAttributes["style"];
    disabled?: boolean;
}

export type InlineInputLabelPosition = "left" | "right";

export interface InlineInputProps extends BaseProps {
    id?: string;
    name?: string;
    label?: string;
    labelPosition?: InlineInputLabelPosition;
}
