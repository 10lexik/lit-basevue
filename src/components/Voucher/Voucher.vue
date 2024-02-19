<template>
    <div class="voucher">
        <div class="voucher__wrapper">
            <Click :id="this.idBtn" class="voucher__click" center :href="this.src">
                <div class="voucher__button">
                    <div class="voucher__button__inner">
                        <p class="voucher__button__text" v-html="this.$store.getters['dumbo/getLink'](this.idBtn)?.label"/>
                        <Img class="voucher__button__icon" src="icons/icon-voucher.svg" inlineSvg alt="Download" />
                    </div>
                </div>
            </Click>
        </div>
    </div>
</template>

<script src="./Voucher.js"></script>
<style scoped lang="scss" src="./Voucher.scss"></style>
