import vue from "@vitejs/plugin-vue";
import { type UserConfig } from "vite";

export const viteBaseConfig: UserConfig = {
    plugins: [vue()],
    define: {
        __MU_DEV__: JSON.stringify(process.env.NODE_ENV === "development"),
        __MU_PROD__: JSON.stringify(process.env.NODE_ENV === "production"),
        __MU_TEST__: JSON.stringify(process.env.NODE_ENV === "test"),
    },
};
