
<template>
    <div class="img-mod" :class="this.imgClasses">
        <img v-if="!this.inlineSvg" :src="this.requiredSrc" :alt="this.alt" class="img-mod__image" v-loader:nested />
        <template v-else>
            <img v-if="$config.detectEnv.isIE" :src="this.requiredSrc" :alt="this.alt" class="img-mod__image" />
            <inline-svg v-else :src="this.requiredSrc" :alt="this.alt" class="img-mod__image" />
        </template>
    </div>
</template>

<style scoped lang="scss" src="./Img.scss"></style>
<script src="./Img.js"></script>
