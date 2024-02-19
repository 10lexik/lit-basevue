<template>
    <div class="easteregg-summary">
        <div class="easteregg-summary__placeholders">
            <div v-for="egg in eggs" :key="egg.id" class="easteregg-summary__placeholders__item">
                <!-- Not found -->
                <Img v-if="placeholder" v-show="!egg.isFound" :src="placeholder" />
                <Img v-else v-show="!egg.isFound" :src="egg.placeholder" />

                <!-- Found -->
                <Img v-if="foundPlaceholder" v-show="egg.isFound" :src="foundPlaceholder" />
                <Img v-else v-show="egg.isFound" :src="egg.foundPlaceholder ? egg.foundPlaceholder : egg.src" />
            </div>
        </div>
    </div>
</template>

<script src="./EasterEggSummary.js"></script>
<style scoped lang="scss" src="./EasterEggSummary.scss"></style>
