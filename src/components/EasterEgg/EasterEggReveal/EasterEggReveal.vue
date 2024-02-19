<template>
    <div class="easteregg-reveal">

        <transition name="fade">
            <div class="easteregg-reveal__cover" v-if="!this.showContent">
                <!-- @slot This content will be displayed until the selected corresponding \<EasterEgg /> element(s) has been found by the user. -->
                <slot name="cover">
                    <img src="@/assets/img/hidden.svg" />
                </slot>
            </div>
        </transition>

        <div class="easteregg-reveal__under">
            <!-- @slot Content revealed once the user find the corresponding \<EasterEgg /> element(s). -->
            <slot></slot>
        </div>

    </div>
</template>

<script src="./EasterEggReveal.js"></script>
<style scoped lang="scss" src="./EasterEggReveal.scss"></style>
