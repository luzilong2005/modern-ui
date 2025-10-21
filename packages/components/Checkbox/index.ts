import _Checkbox from "./Checkbox.vue";
import CheckboxGroup from "./CheckboxGroup.vue";
import { withInstall } from "@modern-ui/utils";

const Checkbox = _Checkbox as typeof _Checkbox & {
    Group: typeof CheckboxGroup;
};
Checkbox["Group"] = CheckboxGroup;
const CheckboxWithInstall = withInstall(Checkbox);
const CheckboxGroupWithInstall = withInstall(CheckboxGroup);

export const MuCheckbox = Checkbox;
export const MuCheckboxGroup = CheckboxGroup;
export { Checkbox, CheckboxGroup, CheckboxWithInstall, CheckboxGroupWithInstall };
export * from "./types";
export * from "./constants";
export * from "./Checkbox";
export * from "./CheckboxGroup";
