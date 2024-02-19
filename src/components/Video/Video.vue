<template>
    <div class="video" :data-name="this.name">
        <div class="video__container">
            <div v-if="this.videoId">
                <template v-if="$config.detectEnv.isMobile">
                    <!-- autoplay doesn't works on mobile device -->
                    <youtube-media :video-id="this.videoId" :player-vars="this.videoVars" @playing="this.playing" @paused="this.paused" @ended="this.ended" player-width="100%" :player-height="this.videoHeight" />
                </template>
                <template v-else>
                    <youtube-media :video-id="this.videoId" :player-vars="this.videoVars" @playing="this.playing" @paused="this.paused" @ended="this.ended" />
                </template>
            </div>
            <video v-else v-loader:nested="this.preventLoading" width="100%" :poster="this.videoPoster" :src="this.videoSrc" :data-extsrc="this.isExternalSrc" :data-size="this.videoSize" type="video/mp4" autoplay playsinline muted loop :class="this.name"></video>
        </div>
    </div>
</template>

<script src="./Video.js"></script>
<style scoped lang="scss" src="./Video.scss"></style>
