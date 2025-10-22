import { viteBaseConfig } from "./vite.base.config.js";
import fs from "node:fs";
import { mergeConfig, type UserConfig } from "vite";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";

const componentsNames = fs
    .readdirSync("../components", { withFileTypes: true })
    .filter((dir) => dir.isDirectory())
    .map((dir) => dir.name)
    .filter((name) => !["node_modules", "_internal"].includes(name));

export default mergeConfig<UserConfig, UserConfig>(viteBaseConfig, {
    plugins: [
        libInjectCss(),
        dts({
            tsconfigPath: "./tsconfig.build.json",
            outDir: "./dist/esm/types",
        }),
    ],
    build: {
        outDir: "dist/esm",
        lib: {
            entry: "./index.ts",
            formats: ["es"],
            name: "ModernUI",
            fileName: "index",
        },
        rollupOptions: {
            external: ["vue"],
            output: {
                exports: "named",
                globals: {
                    vue: "Vue",
                },
                chunkFileNames: "[name].js",
                assetFileNames(chunkInfo) {
                    if (chunkInfo.type === "asset" && /\.(css)$/i.test(chunkInfo.names[0])) {
                        const flatName = chunkInfo.names[0].replace(/^components\//, "");
                        return `theme/${flatName}`;
                    }
                    return chunkInfo.names[0];
                },
                manualChunks(id) {
                    for (const name of componentsNames) {
                        if (id.includes(`/packages/components/${name}`)) {
                            return `components/${name}`;
                        }
                    }
                },
            },
        },
    },
});
