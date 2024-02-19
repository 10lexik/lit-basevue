<template>
    <!-- swiper-container -->
    <section class="swiper swiper-container" :class="[{'pagination-under-slides' : this.paginationUnderSlides}, this.name]">
        <div class="swiper-wrapper">
            <!-- @slot Succession of \<Slide>\</Slide> components -->
            <slot></slot>
        </div>
        <!-- Navigation -->
        <template v-if="this.params.navigation">
            <div v-if="this.params.navigation.prevEl === '.swiper-button-prev'" class="swiper-navigation swiper-button swiper-button-prev"></div>
            <div v-if="this.params.navigation.nextEl === '.swiper-button-next'" class="swiper-navigation swiper-button swiper-button-next"></div>
        </template>
        <!-- Pagination -->
        <div v-if="this.params.pagination && this.params.pagination.el === '.swiper-pagination'" class="swiper-pagination"></div>
    </section>
</template>

<style scoped lang="scss" src="./Swiper.scss"></style>
<script src="./Swiper.js"></script>
