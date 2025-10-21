import Alert from "../Alert.vue";
import { ALERT_COLOR_TYPES, ALERT_VARIANTS } from "../constants";
import { mount } from "@vue/test-utils";
import { describe, test, expect, vi } from "vitest";
import { XIcon, CircleAlertIcon } from "lucide-vue-next";

describe("Alert", () => {
    test("Basic", () => {
        const title = "Alert Title";
        const content = "Alert Content";
        const vw = mount(() => <Alert title={title} content={content} />);
        expect(vw.classes()).toContain("mu-alert");
        expect(vw.get(".mu-alert__header__title").text()).toBe(title);
        expect(vw.get(".mu-alert__main__content").text()).toBe(content);
    });

    test("Variants", () => {
        const variants = ALERT_VARIANTS;
        variants.forEach((variant) => {
            const vw = mount(() => <Alert title="Test" content="Test" variant={variant} />);
            expect(vw.classes()).toContain(`mu-alert--variant-${variant}`);
        });
    });

    test("Color types", () => {
        const colors = ALERT_COLOR_TYPES;
        colors.forEach((color) => {
            const vw = mount(() => <Alert title="Test" content="Test" colorType={color} />);
            expect(vw.classes()).toContain(`mu-alert--color-${color}`);
        });
    });

    test("Default icon", () => {
        const vw = mount(() => <Alert title="Test" content="Test" />);
        expect(vw.findComponent(CircleAlertIcon).exists()).toBe(true);
    });

    test("Custom icon", () => {
        const CustomIcon = () => <span>CustomIcon</span>;
        const vw = mount(() => <Alert title="Test" content="Test" icon={CustomIcon} />);
        expect(vw.findComponent(CustomIcon).exists()).toBe(true);
    });

    test("Closable", () => {
        const vw = mount(() => <Alert title="Test" content="Test" closable={true} />);
        expect(vw.find(".mu-alert__header__close-icon").exists()).toBe(true);
        expect(vw.findComponent(XIcon).exists()).toBe(true);
    });

    test("Not closable", () => {
        const vw = mount(() => <Alert title="Test" content="Test" closable={false} />);
        expect(vw.find(".mu-alert__header__close-icon").exists()).toBe(false);
    });

    test("Custom close icon", () => {
        const CustomCloseIcon = () => <span>CustomClose</span>;
        const vw = mount(() => <Alert title="Test" content="Test" closable={true} closeIcon={CustomCloseIcon} />);
        expect(vw.findComponent(CustomCloseIcon).exists()).toBe(true);
    });

    test("Close event", async () => {
        const handleClose = vi.fn();
        const vw = mount(() => <Alert title="Test" content="Test" onClose={handleClose} />);
        await vw.find(".mu-alert__header__close-icon").trigger("click");
        expect(handleClose).toHaveBeenCalledTimes(1);
    });

    test("Default props", () => {
        const vw = mount(() => <Alert title="Test" content="Test" />);
        expect(vw.classes()).toContain("mu-alert--variant-filled");
        expect(vw.classes()).toContain("mu-alert--color-primary");
    });
});