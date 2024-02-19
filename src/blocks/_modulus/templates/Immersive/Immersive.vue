<template>
    <div class="immersive">
        <full-page ref="fullpage" :options="options" id="fullpage" >
            <div :class="`section immersive__section immersive__section--${index} ${page.type}`" @click="scrollTo(page.type === 'header')" v-for="(page, index) in content" :key="`page--${index}`">
                <div class="absolute immersive__header">
                    <Img class="immersive__logo" :src="page.logo" alt="logo" v-if="page.logo" />
                    <div class="immersive__content">
                        <fonts class="immersive__content_text" :text="page.content" v-if="page.content && page.contentPosition === 'top'" />
                    </div>
                </div>
                <div class="absolute immersive__footer">
                    <div class="immersive__content">
                        <fonts class="immersive__content_text" :text="page.content" v-if="page.content && page.contentPosition === 'bottom' || page.content && page.type === 'header'" />
                        <Click class="immersive__btn" button size="m" :id="page.id" v-if="page.id" />
                    </div>
                    <div class="immersive__scrollTo" v-if="page.type === 'header'">
                        <fonts class="immersive__scrollTo_text" :text="page.textScroll" v-if="page.textScroll" />
                        <div class="immersive__scrollTo_icon">
                            <Img class="immersive__scrollTo_icon--img" src="icons/icon-arrow-bottom.svg" inlineSvg alt="" />
                        </div>
                    </div>
                    <Footer class="immersive__footer_footer" v-if="page.type === 'footer'" />
                </div>

                <div :class="`immersive__activePopin ${page.contentPosition === 'top' ? 'bottom' : 'top'}`" v-if="page.popin">
                    <Click id="btnId" button noTracking buttonClass="immersive__activePopin__popin" :label="page.popin.btnWording" @click.native="activePopin(index)"/>
                </div>

                <transition name="fade">
                    <div class="immersive__popin popin"  v-if="page.popin" v-show="popins[index]">
                        <div  class="popin__content">
                            <Img class="popin__background" :src="page.popin.background" alt="" v-if="page.popin.background"/>
                            <div class="popin__content_section">
                                <div class="popin__content_close" @click="closePopin(index)"></div>
                                <Fonts class="popin__text" :text="page.popin.text" v-if="page.popin.text"/>
                                <Click class="popin__btn" button center :id="page.popin.id" v-if="page.popin.id" />
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
        </full-page>
        <div :class="`immersive__indicator ${activeIndex > 0? 'show': 'hide'} ${activeType === 'footer' && activeContentPosition === 'bottom' ? 'top' : ''}`">
            <div class="immersive__indicator_content">
                <p class="immersive__indicator_active immersive__indicator_text" v-html="activeIndex"></p>
                <p class="immersive__indicator_length immersive__indicator_text" v-html="content.length - 1"></p>
            </div>
            <svg class="immersive__indicator_svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 26 45" style="enable-background:new 0 0 26 45;" xml:space="preserve">
                <path class="st0" d="M12,1h1.5C19.9,1,25,6.1,25,12.5v20C25,38.9,19.9,44,13.5,44H12C5.6,44,0.5,38.9,0.5,32.5v-20 C0.5,6.1,5.6,1,12,1z"/>
            </svg>
            <div :class="`immersive__indicator_scrollTo ${activeIndex===content.length - 1 ? 'hide': 'show'}`" @click="scrollTo(true)">
                <div class="immersive__indicator_icon">
                    <Img class="immersive__indicator_icon--img" src="icons/icon-arrow-bottom.svg" inlineSvg alt="" />
                </div>
            </div>
        </div>
        <Sticky :class="`immersive__sticky ${activeIndex > 0 && activeIndex !== content.length - 1 && !hideSticky ? 'show' : ''}`"/>
    </div>
</template>

<script src="./Immersive.js"></script>
<style scoped lang="scss" src="./Immersive.scss"></style>
