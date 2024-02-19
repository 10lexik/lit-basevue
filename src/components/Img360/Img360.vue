<template>
    <div class="img360" :class="this.isGrabbing ? 'grabbing' : ''"
        @mousedown="mouseDownHandler($event)"
        @mouseup="mouseUpHandler"
        @mousemove="mouseMoveHandler($event)"
        @touchstart="touchStartHandler($event)"
        @touchend="touchEndHandler($event)"
        @touchmove="touchMoveHandler($event)">
        <Img class="img360__img" v-show="index === currentImg" v-for="(img, index) in this.src" :key="img" :src="img" />
    </div>
</template>

<script src="./Img360.js"></script>
<style scoped lang="scss" src="./Img360.scss"></style>
