import CheckboxGroup from "../CheckboxGroup.vue";
import Checkbox from "../Checkbox.vue";
import { mount } from "@vue/test-utils";
import { defineComponent, ref } from "vue";
import { describe, test, expect, vi } from "vitest";

describe("CheckboxGroup", () => {
    test("Basic", () => {
        const groupName = "test-group";
        const vw = mount(() => (
            <CheckboxGroup name={groupName}>
                <Checkbox value="option1" label="Option 1" />
                <Checkbox value="option2" label="Option 2" />
            </CheckboxGroup>
        ));

        expect(vw.classes()).toContain("mu-checkbox-group");
        expect(vw.attributes("name")).toBe(groupName);
        expect(vw.findAllComponents(Checkbox).length).toBe(2);
    });

    test("Model values binding", () => {
        const TestComponent = defineComponent({
            components: { CheckboxGroup, Checkbox },
            setup() {
                const selectedValues = ref(["option1", "option3"]);
                return () => (
                    <CheckboxGroup v-model:values={selectedValues.value}>
                        <Checkbox value="option1" label="Option 1" />
                        <Checkbox value="option2" label="Option 2" />
                        <Checkbox value="option3" label="Option 3" />
                    </CheckboxGroup>
                );
            }
        });

        const vw = mount(TestComponent);
        const checkboxes = vw.findAllComponents(Checkbox);
        expect(checkboxes[0].find("input").element.checked).toBe(true);
        expect(checkboxes[1].find("input").element.checked).toBe(false);
        expect(checkboxes[2].find("input").element.checked).toBe(true);
    });

    test("Model values change", async () => {
        const TestComponent = defineComponent({
            components: { CheckboxGroup, Checkbox },
            setup() {
                const selectedValues = ref([]);
                return { selectedValues };
            },
            render() {
                return (
                    <CheckboxGroup v-model:values={this.selectedValues}>
                        <Checkbox value="option1" label="Option 1" />
                        <Checkbox value="option2" label="Option 2" />
                    </CheckboxGroup>
                );
            }
        });

        const vw = mount(TestComponent);

        // Initially none are checked
        const checkboxes = vw.findAllComponents(Checkbox);
        expect(checkboxes[0].find("input").element.checked).toBe(false);
        expect(checkboxes[1].find("input").element.checked).toBe(false);

        // Check the first checkbox
        await checkboxes[0].find("input").setValue(true);
        expect(vw.vm.selectedValues).toEqual(["option1"]);

        // Check the second checkbox
        await checkboxes[1].find("input").setValue(true);
        expect(vw.vm.selectedValues).toEqual(["option1", "option2"]);

        // Uncheck the first checkbox
        await checkboxes[0].find("input").setValue(false);
        expect(vw.vm.selectedValues).toEqual(["option2"]);
    });

    test("Disabled state propagation", () => {
        const TestComponent = defineComponent({
            components: { CheckboxGroup, Checkbox },
            render() {
                return (
                    <CheckboxGroup class="custom-class" disabled>
                        <Checkbox value="option1" label="Option 1" />
                        <Checkbox value="option2" label="Option 2"/>
                    </CheckboxGroup>
                );
            }
        });

        const vw = mount(TestComponent);
        expect(vw.classes()).toContain("custom-class");
        // Note: disabled prop is on the fieldset, not directly visible as a class
        expect(vw.attributes("disabled")).toBe("");
    });

    test("Expose fieldRef", () => {
        const vw = mount(CheckboxGroup);
        expect(vw.vm.fieldRef).toBeDefined();
    });
});