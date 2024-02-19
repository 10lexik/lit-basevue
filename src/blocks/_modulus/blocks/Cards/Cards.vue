<template>
    <div :class="['cards', { row: isMobRow }]">
        <div v-for="(card, index) in cardsList" :key="`card-${index}`"
             :class="['cards__card', `cards__card-${index+1}`, variant, { popIn: popIn }]">
            <div :class="`cards__card__wrapper cards__card--${index+1}__wrapper content`">
                <Fonts v-if="variant === 'horizontal'" :text="card.title"/>
                <Img :class="`content--${index+1}__img content__img`"
                     v-if="card.img"
                     :src="card.img"/>
                <div v-if="variant !== 'horizontal' && (card.title || card.subtitle || card.ratings)" class="content__title">
                    <Fonts
                        class="content__title--subtitle"
                        v-if="variant === 'info'"
                        :text="card.subtitle"
                    />
                    <Fonts
                        v-if="variant !== 'category'"
                        :text="card.title"
                    />
                    <div
                        v-if="variant === 'category'"
                        class="content__title--btn"
                    >
                        <Fonts :text="card.title"/>
                        <i class="icon icon-arrow_right"/>
                    </div>
                    <div v-if="variant === 'info'" class="content__title--favorites">
                        <Ratings
                            v-if="card.ratings"
                            :ratings="card.ratings"
                            :filledIconClass="filledIconClass"
                            :halfFilledIconClass="halfFilledIconClass"
                        />
                    </div>
                </div>
                <div v-if="card.text" class="content__txt">
                    <Fonts :text="card.text"/>
                </div>
                <div v-if="card.id || card.stickers" class="content__btn">
                    <div v-if="variant === 'info' && card.stickers" class="content__btn--stickers" :class="{rounded: stickersRounded}">
                        <div v-for="(sticker, i) in card.stickers" :key="`stickers--${i}`"
                             :class="[{ 'sticker': sticker.text }]">
                            <div>
                                <i v-if="sticker.icon" :class="['icon', sticker.icon]"/>
                                <Fonts v-else :text="sticker"/>
                            </div>
                        </div>
                    </div>
                    <Click
                        v-if="card.id"
                        :id="card.id"
                        :block="variant !== 'reinsurance' && variant !== 'horizontal'"
                        :button="variant !== 'reinsurance' && variant !== 'horizontal' && variant !== 'category'"
                        :class="[{ 'fill-content' : variant === 'category' }]"
                    >
                        <i v-if="variant === 'horizontal'" class="icon icon-arrow_right"/>
                        <div v-if="variant === 'category'" />
                    </Click>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./Cards.js"/>
<style scoped lang="scss" src="./Cards.scss"/>
