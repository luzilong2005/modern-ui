import Progress from "../Progress.vue";
import { PROGRESS_DIRECTIONS, PROGRESS_NAME, PROGRESS_SIZES } from "../constants";
import { mount } from "@vue/test-utils";
import { describe, test, expect } from "vitest";

describe("Progress", () => {
    test("Basic", () => {
        const vw = mount(() => <Progress />);
        expect(vw.classes()).toContain("mu-progress");
        expect(vw.find(".mu-progress__bar").exists()).toBe(true);
    });

    test("Size variants", () => {
        const sizes = PROGRESS_SIZES;
        sizes.forEach((size) => {
            const vw = mount(() => <Progress size={size} />);
            expect(vw.classes()).toContain(`mu-progress--size-${size}`);
        });
    });

    test("Directions", () => {
        const directions = PROGRESS_DIRECTIONS;
        directions.forEach((direction) => {
            const vw = mount(() => <Progress direction={direction} />);
            expect(vw.classes()).toContain(`mu-progress--${direction}`);
        });
    });

    test("Value and max", () => {
        const vw = mount(() => <Progress value={50} max={100} />);
        expect(vw.attributes("style")).toContain("--mu-progress-percent-value: 50");
    });

    test("Value calculation", () => {
        const vw = mount(() => <Progress value={25} max={200} />);
        expect(vw.attributes("style")).toContain("--mu-progress-percent-value: 13");
    });

    test("Negative value", () => {
        const vw = mount(() => <Progress value={-10} max={100} />);
        expect(vw.attributes("style")).toContain("--mu-progress-percent-value: 10");
    });

    test("Value exceeding max", () => {
        const vw = mount(() => <Progress value={150} max={100} />);
        expect(vw.attributes("style")).toContain("--mu-progress-percent-value: 100");
    });

    test("Default props", () => {
        const vw = mount(() => <Progress />);
        expect(vw.classes()).toContain("mu-progress--size-md");
        expect(vw.classes()).toContain("mu-progress--horizontal");
        expect(vw.attributes("style")).toContain("--mu-progress-percent-value: 0");
    });
});
