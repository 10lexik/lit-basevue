<template>
    <div ref="accordion" class="accordion">
        <div class="accordion__wrapper">
            <Fonts class="accordion__title mb-1" v-if="this.content.title" :text="this.content.title" />
            <Fonts class="accordion__subtitle mb-2" v-if="this.content.subtitle"  :text="this.content.subtitle" />

            <div class="accordion__slider">
                <div class="accordion__slider__row">
                    <div :class="`accordion__slider__panel ${index === indexPan ? 'panel-active' : 'panel'}`" v-for="(panel, index) in this.content.pannels" :key="`panel--${index}`" @click="panelExtends(index)">
                        <div class="accordion__slider__panel__placeholder"></div>
                        <div class="accordion__slider__panel__overlay overlay-y" v-if="overlay !== 'horizontal'"></div>

                        <div class="accordion__slider__panel__media accordion__slider__panel__img" :class="`accordion__slider__panel__img-${index}`" v-if="!panel.video"></div>

                        <div class="accordion__slider__panel__media" v-if="panel.video">
                            <Video :class="`slidepan__video-${index} pan-video`" :src="panel.video.src" :size="panel.video.size ? panel.video.size : ''"/>
                        </div>

                        <div class="accordion__slider__card">
                            <div class="accordion__slider__panel__overlay overlay-x"></div>
                            <Fonts class="accordion__slider__card__text text" :text="panel.text" v-if="panel.text"/>
                        </div>

                        <div class="accordion__slider__panel__icon icon">+</div>
                    </div>
                </div>

                <div class="accordion__description" v-for="(element , index) in this.content.pannels" :key="`desc--${index}`" v-show="index === indexPan">
                    <div class="accordion__description__text-wrapper" v-if="element.desc">
                        <Fonts class="accordion__description__title"  :text="element.desc.title" v-if="element.desc.title"/>
                        <Fonts class="accordion__description__text" :text="element.desc.text" v-if="element.desc.text"/>
                    </div>

                    <Click :id="element.cta" button center target="_blank" v-if="element.cta"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./Accordion.js"></script>
<style scoped lang="scss" src="./Accordion.scss"></style>
