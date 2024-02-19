<template>
    <div :class="`copycode copycode--${this.index}`">
        <Click :trackingLabel="`COPY-CODE-${this.index}`" @click.native="handleCopy()" block>
            <div class="copycode__button">
                <p translate="no" class="copycode__button__txt" v-html="this.getCode" />
                <div class="copycode__button__copy">
                    <Img class="copycode__button__icon"  v-show="!this.copied" src="icons/icon-copy-code.svg" inlineSvg alt=""/>
                    <Img class="copycode__button__icon" v-show="this.copied" src="icons/icon-copy-code-validated.svg" inlineSvg alt=""/>
                </div>
            </div>
        </Click>
        <p v-show="!this.copied" class="ml copycode__mention"></p>
        <p v-show="this.copied" class="ml copycode__mention"></p>
    </div>
</template>

<script src="./CopyCode.js"></script>
<style scoped lang="scss" src="./CopyCode.scss"></style>
