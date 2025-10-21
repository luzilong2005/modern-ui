import Alert from "./Alert.vue";
import { withInstall } from "@modern-ui/utils";

export const AlertWithInstall = withInstall(Alert);
export { Alert, Alert as MuAlert };
export * from "./constants";
export * from "./Alert";
export * from "./types";
