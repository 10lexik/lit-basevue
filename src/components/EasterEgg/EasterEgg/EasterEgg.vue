<template>
    <transition name="bounce-out">
        <div class="easteregg" :class="id" v-if="!isFound" @click.prevent="easterEggClickHandler">
            <Img :src="src" />
        </div>
    </transition>
</template>

<script src="./EasterEgg.js"></script>
<style scoped lang="scss" src="./EasterEgg.scss"></style>
