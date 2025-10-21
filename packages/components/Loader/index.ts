import Loader from "./Loader.vue";
import { withInstall } from "@modern-ui/utils";

export const LoaderWithInstall = withInstall(Loader);
export { Loader, Loader as MuLoader };

export * from "./constants";
export * from "./misc";
export * from "./types";
