import { defineConfig } from "vitepress";
import { vitepressDemoPlugin } from "vitepress-demo-plugin";
import { groupIconMdPlugin, groupIconVitePlugin } from "vitepress-plugin-group-icons";

/**
 * vitepress 配置文件
 */

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: "/modern-ui/",
    title: "Modern UI Docs",
    description: "使用 Vue + Vite + TypeScript 构建的组件库",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [{ text: "主页", link: "/" }],
        returnToTopLabel: "返回顶部",
        outline: {
            label: "目录",
            level: [2, 3],
        },
        search: {
            provider: "local",
            options: {
                translations: {
                    button: { buttonText: "搜索" },
                },
            },
        },
        docFooter: {
            next: "下一页",
            prev: "上一页",
        },
        sidebar: [
            {
                base: "/pages/guide/",
                text: "开始",
                items: [
                    { text: "简介", link: "/introduction" },
                    { text: "快速开始", link: "/quickstart" },
                ],
            },
            {
                base: "/pages/components/",
                text: "组件",
                items: [
                    { text: "Alert 警告提示", link: "alert/" },
                    { text: "Button 按钮", link: "button/" },
                    { text: "Checkbox 复选框", link: "checkbox/" },
                    { text: "Input 输入框", link: "input/" },
                    { text: "Loader 加载器", link: "loader/" },
                    { text: "Message 消息提示", link: "message/" },
                    { text: "Progress 进度条", link: "progress/" },
                    { text: "Radio 单选框", link: "radio/" },
                    { text: "Slider 滑块", link: "slider/" },
                    { text: "Switch 开关", link: "switch/" },
                    { text: "Tooltip 工具提示", link: "tooltip/" },
                ],
            },
        ],
        socialLinks: [
            { icon: "github", link: "https://github.com/luzilong2005/modern-ui" },
            { icon: "gitee", link: "" },
        ],
    },
    markdown: {
        config(md) {
            md.use(vitepressDemoPlugin, { lightTheme: "vitesse-light", darkTheme: "vitesse-dark" });
            md.use(groupIconMdPlugin);
        },
        theme: {
            light: "vitesse-light",
            dark: "vitesse-dark",
        },
    },
    vite: {
        plugins: [groupIconVitePlugin()],
    },
});
