<template>
    <div class="ratings">
        <span v-for="(starIndex, index) in maxStars" :key="index" class="star" :class="{ 'filled': starIndex <= filledStars, 'half-filled': showHalfStar(index) }">
            <i v-if="starIndex <= filledStars" :class="filledIconClass"/>
            <i v-else-if="showHalfStar(index)" :class="halfFilledIconClass"/>
        </span>
    </div>
</template>

<script src="./Ratings.js"></script>
<style scoped lang="scss" src="./Ratings.scss"></style>
