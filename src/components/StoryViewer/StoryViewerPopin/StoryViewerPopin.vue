<template>
    <div class="StoryViewerPopin" :class="this.isActive ? 'active' : ''">
        <div class="StoryViewerPopin__inner">
            <!-- @slot Content of the popin -->
            <slot></slot>
        </div>
    </div>
</template>

<script src="./StoryViewerPopin.js"></script>
<style scoped lang="scss" src="./StoryViewerPopin.scss"></style>
