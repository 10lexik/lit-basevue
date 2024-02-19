<template>
    <Click class="header" trackingLabel="header:scrollTo" v-scroll-to="{
        element: '#scroll',
        duration: 1000
    }">
        <section ref="header">
            <HeaderAnimation
                :animationIntro="animationIntro"
                :imageAppear="animationIntro.imageAppear"
                :blurred="animationIntro.blurred"
                :scrollScale="animationIntro.scrollScale"
                :textAppear="animationIntro.textAppear"
                :pinToElement="animationIntro.pinToElement"
                :pin="animationIntro.pin">
                <template v-if="this.img">
                    <Img
                        v-for="(image, index) in selectedImageList"
                        :key="`el--${index}`"
                        :class="['header__animation__bg', { 'active': index === currentIndex }]"
                        :src="image"
                        :style="getImageStyle(index)"
                    />
                </template>
                <template v-else-if="this.video">
                    <Video
                        v-for="(video, index) in selectedVideoList"
                        :key="`el--${index}`"
                        :class="['header__animation__bg', { 'active': index === currentIndex }]"
                        :src="video"
                        :style="getImageStyle(index)"
                    />
                </template>
            </HeaderAnimation>
            <div :class="['header__wrapper', customClass, variant]">
                <div class="header__content">
                    <Img v-if="logo && variant !== 'block' && variant !== 'center'" :src="logo" alt=""
                         class="header__logo"/>
                    <div :class="`header__bloc header__bloc--${variant} ${textAlign}`">
                        <Img v-if="logo && variant === 'block' || variant === 'center'" :src="logo" alt=""
                             class="header__logo"/>
                        <Fonts class="header__title" :text="title"/>
                        <Fonts class="header__text" :text="text"/>
                    </div>
                    <div class="header__scrollTo">
                        <Fonts class="header__mentions" :text="textScroll"/>
                        <div class="header__scrollTo_icon">
                            <Img src="icon-header-bottom.svg" inlineSvg alt="" class="header__scrollTo_icon--img"/>
                        </div>
                    </div>
                </div>
            </div>
            <div id="scroll"></div>
        </section>
    </Click>
</template>

<script src="./Header.js"></script>
<style scoped lang="scss" src="./Header.scss"></style>
