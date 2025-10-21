import Radio from "../Radio.vue";
import { RADIO_SIZES } from "../constants";
import { mount } from "@vue/test-utils";
import { defineComponent } from "vue";
import { describe, test, expect, vi } from "vitest";

describe("Radio", () => {
    test("Basic", () => {
        const label = "Radio Label";
        const TestComponent = defineComponent({
            render() {
                return <Radio label={label} />;
            }
        });
        const vw = mount(TestComponent);
        expect(vw.classes()).toContain("mu-radio");
        expect(vw.get(".mu-radio__label").text()).toBe(label);
    });

    test("Size variants", () => {
        const sizes = RADIO_SIZES;
        sizes.forEach((size) => {
            const TestComponent = defineComponent({
                render() {
                    return <Radio size={size} />;
                }
            });
            const vw = mount(TestComponent);
            expect(vw.classes()).toContain(`mu-radio--size-${size}`);
        });
    });

    test("Checked state", () => {
        const TestComponent = defineComponent({
            render() {
                return <Radio defaultChecked={true} />;
            }
        });
        const vw = mount(TestComponent);
        expect(vw.classes()).toContain("mu-radio--checked");
        expect(vw.find("input").element.checked).toBe(true);
    });

    test("Disabled state", () => {
        const TestComponent = defineComponent({
            render() {
                return <Radio disabled={true} />;
            }
        });
        const vw = mount(TestComponent);
        expect(vw.classes()).toContain("mu-radio--disabled");
        expect(vw.find("input").attributes("disabled")).toBe("");
    });

    test("Label position", () => {
        const LeftLabelComponent = defineComponent({
            render() {
                return <Radio label="Test" labelPosition="left" />;
            }
        });
        const leftVw = mount(LeftLabelComponent);
        expect(leftVw.classes()).toContain("mu-radio--label-left");

        const RightLabelComponent = defineComponent({
            render() {
                return <Radio label="Test" labelPosition="right" />;
            }
        });
        const rightVw = mount(RightLabelComponent);
        expect(rightVw.classes()).toContain("mu-radio--label-right");
    });

    test("Change event", async () => {
        const handleChange = vi.fn();
        const TestComponent = defineComponent({
            render() {
                return <Radio onChange={handleChange} />;
            }
        });
        const vw = mount(TestComponent);
        await vw.find("input").setValue(true);
        expect(handleChange).toHaveBeenCalledTimes(1);
        expect(handleChange).toHaveBeenCalledWith(expect.any(Event), true);
    });

    test("Default props", () => {
        const TestComponent = defineComponent({
            render() {
                return <Radio />;
            }
        });
        const vw = mount(TestComponent);
        expect(vw.classes()).toContain("mu-radio--size-md");
        expect(vw.classes()).toContain("mu-radio--label-right");
        expect(vw.classes()).not.toContain("mu-radio--disabled");
        expect(vw.classes()).not.toContain("mu-radio--checked");
    });

    test("Input attributes", () => {
        const id = "test-id";
        const name = "test-name";
        const value = "test-value";
        const TestComponent = defineComponent({
            render() {
                return <Radio id={id} name={name} value={value} />;
            }
        });
        const vw = mount(TestComponent);

        expect(vw.find("input").attributes("id")).toBe(id);
        expect(vw.find("input").attributes("name")).toBe(name);
        expect(vw.find("input").attributes("value")).toBe(value);
    });

    test("Expose inputRef", () => {
        const vw = mount(Radio);
        expect(vw.vm.inputRef).toBeDefined();
    });
});