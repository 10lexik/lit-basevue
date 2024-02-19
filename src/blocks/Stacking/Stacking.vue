<template>
    <section ref="stacking" :class="`stacking ${name}`">
        <div class="stacking__center">
            <Fonts class="stacking__title" :text="title" v-if="title" />
            <div ref="content" :class="`stacking__content`">
                <!-- @slot Succession of \<div class="block">\</div> -->
                <slot></slot>
            </div>
        </div>
    </section>
</template>

<script src="./Stacking.js"></script>
<style scoped lang="scss" src="./Stacking.scss"></style>
