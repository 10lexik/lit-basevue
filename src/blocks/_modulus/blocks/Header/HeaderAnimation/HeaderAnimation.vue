<template>
    <div
        class="header__animation"
        ref="animationWrapper"
    >
        <div :class="[`header__animation--clipPath`]">
            <slot></slot>
        </div>
    </div>
</template>

<script src="./HeaderAnimation.js"></script>
<style scoped lang="scss" src="./HeaderAnimation.scss"></style>
