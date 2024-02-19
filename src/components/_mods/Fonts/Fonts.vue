<template>
    <div class="fonts">
        <template v-for="(data, index) in datas">
            <component :is="data.type" v-html="data.text" :key="`fonts--${index}`" :class="data.fontClass"/>
        </template>
    </div>
</template>

<script src="./Fonts.js"></script>
<style scoped lang="scss" src="./Fonts.scss"></style>
