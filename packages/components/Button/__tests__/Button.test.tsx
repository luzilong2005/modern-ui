import Button from "../Button.vue";
import { BUTTON_COLOR_TYPES, BUTTON_NATIVE_TYPES, BUTTON_SHAPES, BUTTON_SIZES, BUTTON_VARIANTS } from "../constants";
import { mount } from "@vue/test-utils";
import { describe, test, expect, vi } from "vitest";

describe("Button", () => {
    test("Basic", () => {
        const content = "Button";
        const vw = mount(() => <Button>{content}</Button>);
        expect(vw.classes()).toContain("mu-button");
        expect(vw.get("button").text()).toBe(content);
    });

    test("Size variants", () => {
        const sizes = BUTTON_SIZES;
        sizes.forEach((size) => {
            const vw = mount(() => <Button size={size}>Button</Button>);
            expect(vw.classes()).toContain(`mu-button--size-${size}`);
        });
    });

    test("Color types", () => {
        const colors = BUTTON_COLOR_TYPES;
        colors.forEach((color) => {
            const vw = mount(() => <Button colorType={color}>Button</Button>);
            expect(vw.classes()).toContain(`mu-button--color-${color}`);
        });
    });

    test("Variants", () => {
        const variants = BUTTON_VARIANTS;
        variants.forEach((variant) => {
            const vw = mount(() => <Button variant={variant}>Button</Button>);
            expect(vw.classes()).toContain(`mu-button--variant-${variant}`);
        });
    });

    test("Shapes", () => {
        const shapes = BUTTON_SHAPES;
        shapes.forEach((shape) => {
            const vw = mount(() => <Button shape={shape}>Button</Button>);
            expect(vw.classes()).toContain(`mu-button--shape-${shape}`);
        });
    });

    test("Native types", () => {
        const types = BUTTON_NATIVE_TYPES;
        types.forEach((type) => {
            const vw = mount(() => <Button type={type}>Button</Button>);
            expect(vw.find("button").attributes("type")).toBe(type);
        });
    });

    test("Disabled state", () => {
        const vw = mount(() => <Button disabled>Button</Button>);
        expect(vw.classes()).toContain("mu-button--disabled");
        expect(vw.find("button").attributes("disabled")).toBe("");
    });

    test("Block button", () => {
        const vw = mount(() => <Button block>Button</Button>);
        expect(vw.classes()).toContain("mu-button--block");
    });

    test("Icon", () => {
        const IconComponent = () => <span>Icon</span>;
        const vw = mount(() => <Button icon={IconComponent}>Button</Button>);
        expect(vw.classes()).toContain("mu-button--icon");
        expect(vw.find(".mu-button__icon").text()).toBe("Icon");
    });

    test("Click event", async () => {
        const handleClick = vi.fn();
        const vw = mount(() => <Button onClick={handleClick}>Button</Button>);
        await vw.find("button").trigger("click");
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test("Slots", () => {
        const vw = mount(Button, {
            slots: {
                default: "Default content",
                leftSection: "Left section",
                rightSection: "Right section",
            },
        });
        expect(vw.find(".mu-button__default-section").text()).toBe("Default content");
        expect(vw.find(".mu-button__left-section").text()).toBe("Left section");
        expect(vw.find(".mu-button__right-section").text()).toBe("Right section");
    });
});
