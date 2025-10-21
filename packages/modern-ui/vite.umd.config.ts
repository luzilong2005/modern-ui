import { viteBaseConfig } from "./vite.base.config.js";
import { mergeConfig, type UserConfig } from "vite";
import { analyzer } from "vite-bundle-analyzer";
import c, { compression } from "vite-plugin-compression2";

export default mergeConfig<UserConfig, UserConfig>(viteBaseConfig, {
    plugins: [
        analyzer({
            fileName: "analyze.umd.html",
            analyzerMode: "static",
        }),
        compression(),
    ],
    build: {
        outDir: "dist/umd",
        lib: {
            entry: "./index.ts",
            formats: ["umd"],
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
            },
        },
    },
});
