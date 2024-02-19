<template>
    <section class="copycodewrapper">
        <div class="copycodewrapper__desktop-left-col">
            <p v-html="this.getText" class="copycodewrapper__offer" />
            <CopyCode :code="this.code" />
        </div>
        <div class="copycodewrapper__desktop-right-col">
            <Click :id="this.idBtn" button block />
        </div>
    </section>
</template>

<script src="./CopyCodeWrapper.js"></script>
<style scoped lang="scss" src="./CopyCodeWrapper.scss"></style>
