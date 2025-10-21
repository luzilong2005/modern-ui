import { CHECKBOX_GROUP_CONTEXT_KEY } from "./constants";
import type { CheckboxGroupContext } from "./types";
import { type InjectionKey } from "vue";

export const CheckboxGroupInjectKey = CHECKBOX_GROUP_CONTEXT_KEY as InjectionKey<CheckboxGroupContext>;
