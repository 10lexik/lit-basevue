<template>
<div class="imgGif">
    <Img class="imgGif__ghost" :src="imgs[0]" />
    <transition :name="fader ? 'fade' : null" v-for="(img, index) in imgs" :key="index">
        <Img
            v-show="index === currentIndex"
            class="imgGif__img"
            :src="img"
        />
    </transition>
</div>
</template>

<style scoped lang="scss" src="./ImgGif.scss"></style>
<script src="./ImgGif.js"></script>
