import _Radio from "./Radio.vue";
import RadioGroup from "./RadioGroup.vue";
import { withInstall } from "@modern-ui/utils";

const Radio = _Radio as typeof _Radio & {
    Group: typeof RadioGroup;
};
Radio["Group"] = RadioGroup;

const RadioWithInstall = withInstall(Radio);
const RadioGroupWithInstall = withInstall(RadioGroup);

export { Radio, Radio as MuRadio, RadioGroup, RadioGroup as MuRadioGroup, RadioWithInstall, RadioGroupWithInstall };

export * from "./types";
export * from "./constants";
export * from "./Radio";
export * from "./RadioGroup";
