<template>
  <div
    :key="this.name"
    class="StoryViewerHotspot"
    :class="`StoryViewerHotspot--${this.name}`"
    :slot="`hotspot-${this.name}`"
    :data-position="this.position"
    :data-normal="this.normal"
  >
    <template v-if="this.toggleAnnotation">
        <Click :label="`ModelViewer:hotspot:${this.name}`" @click.native="hotspotClickHandler()">
            <button class="StoryViewerHotspot__button StoryViewerHotspot__button--toggle" />
        </Click>
    </template>

    <template v-else>
        <button class="StoryViewerHotspot__button" />
    </template>

    <transition name="fade">
        <div v-show="!this.toggleAnnotation || (this.toggleAnnotation && this.showAnnotation)" class="StoryViewerHotspot__annotation" :class="`Hotspot__annotation--${this.name}`">
            <!-- @slot The content of the annotation that will be displayed near the spot. -->
            <slot></slot>
        </div>
    </transition>
  </div>
</template>

<script src="./StoryViewerHotspot.js"></script>
<style scoped lang="scss" src="./StoryViewerHotspot.scss"></style>
