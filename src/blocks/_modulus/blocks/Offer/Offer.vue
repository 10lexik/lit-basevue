<template>
    <div :class="[`offer ${customClass}`, { 'no-relative': timer }]">
        <div class="offer__wrapper py-mob-1 px-mob-1 py-desk-5 px-desk-5" :class="`${row ? 'row' : ''} ${popIn ? 'popin' : ''}`">
            <div class="offer__content" :class="variant">
                <Fonts :appear="appearChildren" class="offer__title mb-2" v-if="title" :text="title" />
                <Fonts :appear="appearChildren" class="offer__subtitle mb-2" v-if="subtitle" :text="subtitle" />
                <Timer v-if="timer" :date="timerDate" :timerShrink="timerShrink" :title="timerTitle" :timerLabels="timerLabels" class="mb-2" :center="row" />
                <div class="offer__code" v-if="copyCode">
                    <Fonts :appear="appearChildren" class="offer__code_title mb-1" v-if="copyCodeTitle" :text="copyCodeTitle" />
                    <CopyCode :appear="appearChildren" class="offer__code_copy" :code="copyCode" />
                </div>
                <div class="offer__voucher" v-if="voucher">
                    <Fonts class="offer__voucher__title mb-1" v-if="voucher.title" :text="voucher.title" />
                    <Voucher :idBtn="voucher.idBtn" :src="voucher.src" />
                </div>
                <Img :appear="appearChildren" class="offer__img mt-2" v-if="img && (!$config.detectEnv.isDesktop || !row)" :src="img" alt="" />
                <Fonts :appear="appearChildren" class="offer__text my-2" v-if="text && (variant !== 'bundle' || !$config.detectEnv.isDesktop)" :text="text" />
                <Click :appear="appearChildren" class="offer__btn" v-if="idBtn && variant !== 'bundle'" :id="idBtn" button center size="m"/>
            </div>

            <div v-if="img && (row && $config.detectEnv.isDesktop)" class="img-right-wrapper" :class="variant">
                <Img :appear="appearChildren" class="offer__img" :src="img" alt="" />
                <Fonts :appear="appearChildren" class="offer__text" v-if="text && variant === 'bundle'" :text="text" />
            </div>
        </div>
    </div>
</template>

<script src="./Offer.js"></script>
<style scoped lang="scss" src="./Offer.scss"></style>
