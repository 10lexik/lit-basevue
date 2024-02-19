<template>
    <section ref="howto" :class="`howto ${variant}`">
        <div class="howto__header" v-if="variant === 'slider'">
            <Fonts class="howto__title" :text="item.title" v-show="index === idSlider && item.title" v-for="(item, index) in content" :key="`howto--title--${index}`" />
            <div :class="`howto__button howto__button-next howto__button-next--${name}`">
                <Img class="howto__button-icone" src="icons/icon-arrow-left.svg" alt="" />
            </div>
            <div :class="`howto__button howto__button-prev howto__button-prev--${name}`">
                <Img class="howto__button-icone" src="icons/icon-arrow-left.svg" alt="" />
            </div>
        </div>
        <Stacking
            :name="name"
            :title="title"
            :spacing="spacingStacking"
            v-if="variant === 'pile'"
        >
            <div class="bloc" v-for="(item, index) in content" :key="`howto--stacking--${index}`">
                <div :class="`howto__popin ${size}`">
                    <Img class="howto__popin_img" :src="item.img" alt="" v-show="size === 'small'"/>
                    <Fonts class="howto__popin_text" :text="item.text" />
                    <Img class="howto__popin_img" :src="item.img" alt="" v-show="size === 'big'"/>
                </div>
            </div>
        </Stacking>
        <Swiper :class="`howto__swiper howto__swiper-${indexHowto}`" :name="name" v-else-if="variant === 'slider'" :swiperParams="{
            navigation: {
                nextEl: `.howto__button-next--${name}`,
                prevEl: `.howto__button-prev--${name}`,
            },
            pagination: {
                el: '.swiper-pagination',
            },
            centeredSlides: true,
            slidesPerView: 1.3,
            breakpoints: {
                1000: {
                    slidesPerView: 2,
                    loop: size === 'small'
                },
                1400: {
                    slidesPerView: 3,
                    loop: size === 'small'
                }
            }
        }">
            <Slide :data-slide="index"  v-for="(item, index) in content" :key="`howto--slider-${indexHowto}-${index}`">
                <div :class="`howto__popin ${size}`">
                    <Img class="howto__popin_img" :src="item.img" alt="" v-show="size === 'small'"/>
                    <Fonts class="howto__popin_text" :text="item.text" />
                    <Img class="howto__popin_img" :src="item.img" alt="" v-show="size === 'big'"/>
                </div>
            </Slide>
        </Swiper>
    </section>
</template>

<script src="./HowTo.js"></script>
<style scoped lang="scss" src="./HowTo.scss"></style>
