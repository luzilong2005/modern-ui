import { injectBanner } from "./banner";
import { ButtonWithInstall, AlertWithInstall } from "../components";
import { createPluginPackage } from "@modern-ui/utils";
import "@modern-ui/theme/dist/index.css";

const ModernUI = createPluginPackage([ButtonWithInstall, AlertWithInstall]);
export default ModernUI;
export * from "../components";
injectBanner();
