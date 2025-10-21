import Button from "./Button.vue";
import { withInstall } from "@modern-ui/utils";

const ButtonWithInstall = withInstall(Button);
export { Button, Button as MuButton, ButtonWithInstall };
export * from "./types";
export * from "./constants";
export * from "./Button";
