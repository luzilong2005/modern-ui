import { createPluginPackage, withInstall } from "../install";
import { mount } from "@vue/test-utils";
import { describe, test, expect } from "vitest";
import { createApp, defineComponent } from "vue";

describe("install", () => {
    test("withInstall", () => {
        const AComp = defineComponent({
            name: "AComp",
            render: () => <div></div>,
        });
        const BComp = defineComponent({
            render: () => <div></div>,
        });
        expect(() => withInstall(AComp)).not.toThrow();
        expect(() => withInstall(BComp)).toThrow();

        const vw = mount(() => <div id="root"></div>);
        const ACompWithInstall = withInstall(AComp);
        expect(ACompWithInstall.install).toBeDefined();

        const app = createApp(ACompWithInstall);
        app.use(ACompWithInstall);
        app.mount(vw.element);
        expect(vw.findComponent(AComp)).toBeTruthy();
    });

    test("createPluginPackage", () => {
        const vw = mount(() => <div id="root"></div>);
        const AppComp = () => <div></div>;
        const AComp = () => <div></div>;
        const BComp = () => <div></div>;
        const ACompWithInstall = withInstall(AComp);
        const BCompWithInstall = withInstall(BComp);
        const app = createApp(AppComp);

        const pkg = createPluginPackage([ACompWithInstall, BCompWithInstall]);
        app.use(pkg);
        app.mount(vw.element);
        expect(vw.findComponent(AComp)).toBeTruthy();
        expect(vw.findComponent(BComp)).toBeTruthy();
    });
});
