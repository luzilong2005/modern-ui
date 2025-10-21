import Checkbox from "../Checkbox.vue";
import { CHECKBOX_SIZES } from "../constants";
import { mount } from "@vue/test-utils";
import { describe, test, expect, vi } from "vitest";
import { CheckIcon } from "lucide-vue-next";

describe("Checkbox", () => {
    test("Basic", () => {
        const label = "Checkbox Label";
        const vw = mount(() => <Checkbox label={label} />);
        expect(vw.classes()).toContain("mu-checkbox");
        expect(vw.get(".mu-checkbox__label").text()).toBe(label);
        expect(vw.findComponent(CheckIcon).exists()).toBe(true);
    });

    test("Size variants", () => {
        const sizes = CHECKBOX_SIZES;
        sizes.forEach((size) => {
            const vw = mount(() => <Checkbox size={size} />);
            expect(vw.classes()).toContain(`mu-checkbox--size-${size}`);
        });
    });

    test("Checked state", () => {
        const vw = mount(() => <Checkbox defaultChecked={true} />);
        expect(vw.classes()).toContain("mu-checkbox--checked");
        expect(vw.find("input").element.checked).toBe(true);
    });

    test("Disabled state", () => {
        const vw = mount(() => <Checkbox disabled={true} />);
        expect(vw.classes()).toContain("mu-checkbox--disabled");
        expect(vw.find("input").attributes("disabled")).toBe("");
    });

    test("Label position", () => {
        const leftVw = mount(() => <Checkbox label="Test" labelPosition="left" />);
        expect(leftVw.classes()).toContain("mu-checkbox__label--left");

        const rightVw = mount(() => <Checkbox label="Test" labelPosition="right" />);
        expect(rightVw.classes()).toContain("mu-checkbox__label--right");
    });

    test("Change event", async () => {
        const handleChange = vi.fn();
        const vw = mount(() => <Checkbox onChange={handleChange} />);
        await vw.find("input").setValue(true);
        expect(handleChange).toHaveBeenCalledTimes(1);
        expect(handleChange).toHaveBeenCalledWith(expect.any(Event), true);
    });

    test("Default props", () => {
        const vw = mount(() => <Checkbox />);
        expect(vw.classes()).toContain("mu-checkbox--size-md");
        expect(vw.classes()).not.toContain("mu-checkbox--disabled");
    });

    test("Input attributes", () => {
        const id = "test-id";
        const name = "test-name";
        const value = "test-value";
        const vw = mount(() => <Checkbox id={id} name={name} value={value} />);

        expect(vw.find("input").attributes("id")).toBe(id);
        expect(vw.find("input").attributes("name")).toBe(name);
        expect(vw.find("input").attributes("value")).toBe(value);
    });

    test("Expose inputRef", () => {
        const vw = mount(Checkbox);
        expect(vw.vm.inputRef).toBeDefined();
    });
});