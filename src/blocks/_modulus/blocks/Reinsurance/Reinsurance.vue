<template>
    <div :class="`reinsurance ${customClass}`">
        <div v-if="variant === 'iconList' || variant === 'horizontalList' || variant === 'iconGrid'">
            <div class="reinsurance__title">
                <Fonts v-for="(title, i) in title" :key="`title--${i}`" :text="title" :appear="title.appear" />
            </div>
            <ul :class="`reinsurance__list reinsurance__list--${variant}`">
                <li :class="`reinsurance__item reinsurance__item--${variant} reinsurance__item--${index}`" v-for="(item, index) in list" :key="`item--${index}`">
                    <Img :appear="item.appear" :src="item.img" alt="" :class="`reinsurance__illustration reinsurance__illustration--${variant} reinsurance__illustration--${index}`" />
                    <Fonts :appear="item.appear" :class="`reinsurance__text--${variant} reinsurance__text--${index}`" :text="item.title" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script src="./Reinsurance.js"></script>
<style scoped lang="scss" src="./Reinsurance.scss"></style>
