import { useEventListener, set, onClickOutside, useElementHover, get, useTimeoutFn } from "@vueuse/core";
import { shallowRef, watchEffect, type MaybeRef } from "vue";

export type ElRef = MaybeRef<HTMLElement | null | undefined>;
export type DelayValue = number | { start?: number; end?: number };

const _usePopper = (el: ElRef) => {
    const isClicked = shallowRef(false);
    const isContextmenu = shallowRef(false);
    const isHovered = useElementHover(el);

    useEventListener(el, "click", () => {
        set(isClicked, true);
    });
    useEventListener(el, "contextmenu", (ev) => {
        ev.preventDefault();
        set(isContextmenu, true);
    });
    onClickOutside(el, () => {
        set(isClicked, false);
        set(isContextmenu, false);
    });

    return { isClicked, isContextmenu, isHovered };
};

export const usePopperState = (el: ElRef) => _usePopper(el);

export const usePopperDelayedState = (el: ElRef, delay: DelayValue) => {
    const { isClicked, isContextmenu, isHovered } = _usePopper(el);
    const isClickedDelayed = shallowRef(false);
    const isContextmenuDelayed = shallowRef(false);
    const isHoveredDelayed = shallowRef(false);

    const startDelay = typeof delay === "number" ? delay : (delay.start ?? 0);
    const endDelay = typeof delay === "number" ? delay : (delay.end ?? 0);

    watchEffect(() => {
        get(isHovered)
            ? useTimeoutFn(() => set(isHoveredDelayed, get(isHovered)), startDelay)
            : useTimeoutFn(() => set(isHoveredDelayed, get(isHovered)), endDelay);

        get(isClicked)
            ? useTimeoutFn(() => set(isClickedDelayed, get(isClicked)), startDelay)
            : useTimeoutFn(() => set(isClickedDelayed, get(isClicked)), endDelay);

        get(isContextmenu)
            ? useTimeoutFn(() => set(isContextmenuDelayed, get(isContextmenu)), startDelay)
            : useTimeoutFn(() => set(isContextmenuDelayed, get(isContextmenu)), endDelay);
    });
    return { isClicked: isClickedDelayed, isContextmenu: isContextmenuDelayed, isHovered: isHoveredDelayed };
};
