import { withInstall } from "@modern-ui/utils";
import Progress from "./Progress.vue";

export const ProgressWithInstall = withInstall(Progress);
export {
    Progress,
    Progress as MuProgress
}
export * from "./Progress";
export * from "./constants";
export * from "./types";