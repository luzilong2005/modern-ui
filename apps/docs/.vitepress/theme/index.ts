import DefaultTheme from "vitepress/theme";
import "./index.css";
import "virtual:group-icons.css";
import type { Theme } from "vitepress";

export default {
    extends: DefaultTheme,
    enhanceApp() {},
} satisfies Theme;
