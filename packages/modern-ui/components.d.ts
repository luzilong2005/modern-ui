declare module "vue" {
    interface GlobalComponents {
        MuButton: (typeof import("modern-ui"))["Button"];
        MuAlert: (typeof import("modern-ui"))["Alert"];
        MuCheckbox: (typeof import("modern-ui"))["Checkbox"];
    }
}
export {};
