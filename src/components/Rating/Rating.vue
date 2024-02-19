<template>
    <div class="rating">
        <span v-for="n in this.nbFilledFavorites" :key="`rating-filled--${n}`" class="icon-favorites_filled" />
        <span v-if="this.isHalfNote" class="icon-favorites_half" />
        <span v-for="n in this.nbEmptyFavorites" :key="`rating-empty--${n}`" class="icon-favorites" />
    </div>
</template>

<script src="./Rating.js"></script>
<style scoped lang="scss" src="./Rating.scss"></style>
