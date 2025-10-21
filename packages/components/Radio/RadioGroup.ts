import { RADIO_GROUP_CONTEXT_KEY } from "./constants";
import type { RadioGroupContext } from "./types";
import type { InjectionKey } from "vue";

export const RadioGroupInjectKey = RADIO_GROUP_CONTEXT_KEY as InjectionKey<RadioGroupContext>;