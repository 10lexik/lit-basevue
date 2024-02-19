<template>
    <article :id="id" :class="['gallery', { shifted }]">
        <div v-if="title || subtitle" class="gallery__title">
            <Fonts v-if="title" :text="[{ type: 'h2', text: title }]" />
            <Fonts v-if="subtitle" :text="[{ type: 'bigBody', text: subtitle }]" class="gallery__title--subtitle" />
        </div>
        <section class="gallery__wrapper" :ref="`${id}galleryWrapper`">
            <div v-for="(image, index) in img" :key="`img--${index}`" :ref="`${id}galleryWrapperImg${index}`">
                <Img :appear="image.appear" :src="image.src" @img-has-mounted="mMounted(index, $event)" />
            </div>
            <div v-for="(videos, index) in video" :key="`video--${index}`" :ref="`${id}galleryWrapperVideo${index}`">
                <Video :appear="videos.appear" :src="videos.src" @video-has-mounted="mMounted(index, $event)" />
            </div>
        </section>
    </article>
</template>

<script src="./Gallery.js" />
<style scoped lang="scss" src="./Gallery.scss" />
