<template>
    <div class="mu-circle-spinner"></div>
</template>

<style lang="scss" scoped>
@use "@modern-ui/theme/index.scss" as *;
.mu-circle-spinner {
    --mu-circle-spinner-color: var(--mu-color-primary);

    @include initial;
    position: relative;
    display: inline-block;
    width: var(--mu-height-md);
    height: var(--mu-height-md);
    &::before {
        content: "";
        @include initial;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: var(--mu-height-md);
        height: var(--mu-height-md);
        background: conic-gradient(
            from 0deg,
            var(--mu-circle-spinner-color) 0deg,
            var(--mu-circle-spinner-color) 320deg,
            transparent 320deg
        );
        mask: radial-gradient(farthest-side, transparent calc(100% - 6px), #000 0);
        -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 6px), #000 0);
        border-radius: 50%;
        animation: loading 1s linear infinite;

        @keyframes loading {
            to {
                transform: rotate(360deg);
            }
        }
    }
}
</style>
