import Input from "./Input.vue";
import { withInstall } from "@modern-ui/utils";

export const InputWithInstall = withInstall(Input);
export { Input, Input as MuInput };
export * from "./constants";
export * from "./types";
export * from "./Input";