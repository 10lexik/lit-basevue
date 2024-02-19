<template>
    <div class="trustpilot">
        <div class="trustpilot__wrapper">
            <Fonts v-if="title" class="trustpilot__title mb-1" :text="title" />
            <Fonts v-if="text" class="trustpilot__text" :text="text" />

            <div class="trustpilot__row">
                <Fonts v-if="comment" class="trustpilot__comment" :text="comment" />
                <div v-if="rating" class="trustpilot__rating">
                    <!-- Full Star -->
                    <Img v-for="fullStar in getFullStar" :key="`trustpilot-rating-fs-${fullStar}`" src="trustpilot/star-full.jpg" alt="full star" />
                    <!-- Half Star -->
                    <Img v-if="getHalfStar" src="trustpilot/star-half.jpg" alt="half star" />
                    <!-- Empty Star -->
                    <Img v-for="emptyStar in getEmptyStar" :key="`trustpilot-rating-es-${emptyStar}`" src="trustpilot/star-empty.jpg" alt="empty star" />
                </div>
            </div>

            <div v-if="onBased" class="trustpilot__based">
                <Fonts :text="onBased" />
                <Img class="trustpilot__based__logo" :src="setLogoUrl" alt="logo Trustpilot" />
            </div>
        </div>
    </div>
</template>

<script src="./Trustpilot.js"></script>
<style scoped lang="scss" src="./Truspilot.scss"></style>
