import { assert } from "es-toolkit";
import { type Component, type ObjectPlugin, type Plugin } from "vue";

export type SFCWithInstall<T extends Component = Component> = T & ObjectPlugin;

export const withInstall = <T extends Component, R extends SFCWithInstall<T>>(component: T): R => {
    const sfc = component as unknown as R;
    assert(sfc.name, `Component ${sfc.name} must have a name`);
    sfc.install = (app) => {
        app.component(sfc.name!, sfc);
    };
    return sfc;
};

export const createPluginPackage = <T extends Plugin>(plugins: Array<T>): Plugin => {
    return (app) => {
        plugins.forEach((plugin) => app.use(plugin));
    };
};
