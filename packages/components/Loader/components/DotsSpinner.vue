<template>
    <div class="mu-dots-spinner">
        <template v-for="i in 3">
            <span
                class="mu-dots-spinner__dot"
                :style="{
                    '--i': i,
                }"
            ></span>
        </template>
    </div>
</template>

<style lang="scss" scoped>
@use "@modern-ui/theme/index.scss" as *;
.mu-dots-spinner {
    @include initial;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    column-gap: 0.25rem;

    --n: 3;
    --beat: 0.4s;
    --period: calc(var(--beat) * var(--n));

    .mu-dots-spinner__dot {
        @include initial;
        display: block;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: var(--mu-color-primary);
        animation: loading var(--period) infinite;
        animation-delay: calc((var(--i) - 1) * var(--beat));

        @keyframes loading {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.5);
            }
            100% {
                transform: scale(1);
            }
        }
    }
}
</style>
