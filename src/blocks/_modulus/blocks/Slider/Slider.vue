<template>
    <div class="slider" ref="slider">
        <Fonts class="slider__title" v-if="title" :text="title"/>
        <Navbar v-if="navbar" class="slider__navbar" :content="navbar" :activeIndex="idActiveNavbar" @getActiveIndex="getNavbarIndex"/>
        <div class="slider__content">
            <div :class="`slider__nav slider__nav--prev slider__nav--prev--${name}`"></div>
            <div :class="`slider__nav slider__nav--next slider__nav--next--${name}`"></div>
            <Swiper :class="[{ focus: focus, 'pagination-under': paginationUnder }, 'slider__swiper']" :name="name" :swiperParams="{
                navigation: {
                    nextEl: `.slider__nav--next--${name}`,
                    prevEl: `.slider__nav--prev--${name}`,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                loop: loop,
                centeredSlides: true,
                slidesPerView: 1.3,
                spaceBetween: 16,
                initialSlide: initialSlide,
                breakpoints: {
                    800: {
                        slidesPerView: 3,
                        spaceBetween: 24,
                    }
                }
            }">
                <Slide :class="[`slider__slide slider__slide--${name}--{index}`, { 'no-animation': noAnimation }]" :data-slide="index"  v-for="(card, index) in content" :key="`slider--slider-${name}-${index}`">
                    <Cards
                        :key="`slider-${name}-cards--${index}`"
                        :variant="variantCard"
                        :cardsList="[card]"
                        :index="index"
                        :popIn="popInCard"
                        v-if="variant !== 'img'"
                    />
                    <Img :src="card.img" alt="" v-if="variant === 'img'"/>
                </Slide>
            </Swiper>
        </div>
    </div>
</template>

<script src="./Slider.js"></script>
<style scoped lang="scss" src="./Slider.scss"></style>
