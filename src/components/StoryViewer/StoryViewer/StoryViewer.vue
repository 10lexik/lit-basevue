<template>
    <section ref="modelViewerWrapper" class="StoryViewer" :style="modelViewerWrapperStyles">
        <model-viewer
            class="StoryViewer__model"
            :class="classes"
            :style="`width: ${this.modelViewerWidth}px`"
            ref="modelViewer"
            :src="this.src"
            :skybox-image="this.skyboxImage"
            :environment-image="this.environmentImage"
            :autoplay="this.autoplay"
            :poster="this.poster"
            :camera-controls="this.cameraControls"
            :camera-orbit="this.cameraOrbit"
            :camera-target="this.cameraTarget"
        >
            <!-- @slot Insert as many \<Hotspot>\</Hotspot> as needed. -->
            <slot name="hotspots"></slot>

            <!-- @slot Insert as many \<Popins>\</Popins> as needed. -->
            <slot name="popins"></slot>

            <div class="StoryViewer__progress">
                <div v-if="this.story && this.story.showPercent" class="StoryViewer__progress__percent">{{ this.visiblePercent }}%</div>
                <div v-if="this.story && this.story.showTimeline" class="StoryViewer__progress__timeline">
                    <div class="StoryViewer__progress__timeline__fill" :style="`height: ${visiblePercent}%`"></div>
                    <div v-for="(spot, index) in this.timelineSpots" :key="index" class="StoryViewer__progress__timeline__spot" :style="`top: ${spot.goTo}%;`">
                        <Click block :label="`Storyviewer:goTo:${spot.name}`" @click.native="timelineSpotClickHandler(spot.goTo)"></Click>
                    </div>
                </div>
            </div>
        </model-viewer>
    </section>
</template>

<script src="./StoryViewer.js"></script>
<style scoped lang="scss" src="./StoryViewer.scss"></style>
