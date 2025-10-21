import type { BaseProps } from "../_internal";
import type { Component, ComputedRef } from "vue";

export interface LoaderProps extends BaseProps  {
    customLoadingSpinner?: Component;
    size?: number;
    defaultSpinner?: "circle" | "dots";
};

export interface LoaderContext {
    size: ComputedRef<LoaderProps["size"]>;
};
