import RadioGroup from "../RadioGroup.vue";
import Radio from "../Radio.vue";
import { mount } from "@vue/test-utils";
import { defineComponent, ref } from "vue";
import { describe, test, expect, vi } from "vitest";

describe("RadioGroup", () => {
    test("Basic", () => {
        const groupName = "test-group";
        const TestComponent = defineComponent({
            render() {
                return (
                    <RadioGroup name={groupName}>
                        <Radio value="option1" label="Option 1" />
                        <Radio value="option2" label="Option 2" />
                    </RadioGroup>
                );
            }
        });
        const vw = mount(TestComponent);

        expect(vw.classes()).toContain("mu-radio-group");
        expect(vw.attributes("name")).toBe(groupName);
        expect(vw.findAllComponents(Radio).length).toBe(2);
    });

    test("Model value binding", () => {
        const TestComponent = defineComponent({
            components: { RadioGroup, Radio },
            setup() {
                const selectedValue = ref("option1");
                return () => (
                    <RadioGroup v-model:value={selectedValue.value}>
                        <Radio value="option1" label="Option 1" />
                        <Radio value="option2" label="Option 2" />
                        <Radio value="option3" label="Option 3" />
                    </RadioGroup>
                );
            }
        });

        const vw = mount(TestComponent);
        const radios = vw.findAllComponents(Radio);
        expect(radios[0].find("input").element.checked).toBe(true);
        expect(radios[1].find("input").element.checked).toBe(false);
        expect(radios[2].find("input").element.checked).toBe(false);
    });

    test("Model value change", async () => {
        const TestComponent = defineComponent({
            components: { RadioGroup, Radio },
            setup() {
                const selectedValue = ref("");
                return { selectedValue };
            },
            render() {
                return (
                    <RadioGroup v-model:value={this.selectedValue}>
                        <Radio value="option1" label="Option 1" />
                        <Radio value="option2" label="Option 2" />
                    </RadioGroup>
                );
            }
        });

        const vw = mount(TestComponent);

        // Initially none are checked
        const radios = vw.findAllComponents(Radio);
        expect(radios[0].find("input").element.checked).toBe(false);
        expect(radios[1].find("input").element.checked).toBe(false);

        // Select the first radio
        await radios[0].find("input").setValue(true);
        expect(vw.vm.selectedValue).toBe("option1");

        // Select the second radio
        await radios[1].find("input").setValue(true);
        expect(vw.vm.selectedValue).toBe("option2");
    });

    test("Disabled state propagation", () => {
        const TestComponent = defineComponent({
            components: { RadioGroup, Radio },
            render() {
                return (
                    <RadioGroup class="custom-class" disabled>
                        <Radio value="option1" label="Option 1" />
                        <Radio value="option2" label="Option 2"/>
                    </RadioGroup>
                );
            }
        });

        const vw = mount(TestComponent);
        expect(vw.classes()).toContain("custom-class");
        // Note: disabled prop is on the fieldset, not directly visible as a class
        expect(vw.attributes("disabled")).toBe("");
    });

    test("Expose fieldRef", () => {
        const vw = mount(RadioGroup);
        expect(vw.vm.fieldRef).toBeDefined();
    });
});