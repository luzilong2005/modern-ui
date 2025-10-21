import Switch from "./Switch.vue";
import { withInstall } from "@modern-ui/utils";

const SwitchWithInstall = withInstall(Switch);

export { Switch, Switch as MuSwitch, SwitchWithInstall };

export * from "./constants";
export * from "./types";
export * from "./Switch";
