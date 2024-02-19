<template>
    <section ref="multioffer" class="multioffer">
        <Stacking
            v-if="variant !== 'bundle'"
            :name="name"
            :title="title"
            :spacing="spacingStacking"
            :noShadowsStacked="noShadowsStacked"
        >
            <Offer
                class="multioffer__offer bloc"
                :class="`multioffer__offer--${index} ${offer.offerClass || ''}`"
                v-for="(offer, index) in offers"
                :key="`offer-${index}`"
                :title="offer.title"
                :subtitle="offer.subtitle"
                :copyCode="offer.copyCode"
                :copyCodeTitle="offer.copyCodeTitle"
                :img="offer.img"
                :text="offer.text"
                :idBtn="offer.idBtn"
                :timer="offer.timer"
                :timerTitle="offer.timerTitle"
            />
        </Stacking>

        <div v-else :class="`multioffer__${variant}`">
            <Offer
                :variant="variant"
                row
                popIn
                :class="`multioffer__offer--${index} ${offer.offerClass || ''} multioffer__${variant}--offer`"
                v-for="(offer, index) in offers"
                :key="`offer-${index}`"
                :title="offer.title"
                :subtitle="offer.subtitle"
                :copyCode="offer.copyCode"
                :copyCodeTitle="offer.copyCodeTitle"
                :img="offer.img"
                :text="offer.text"
                :idBtn="offer.idBtn"
                :timer="offer.timer"
                :timerTitle="offer.timerTitle"
                :bundle="offer.bundle"
            />
            <div class="multioffer__bundle__pack">
                <!-- + -->
                <Fonts :text="{ type: 'h2', text: '+', fontClass: 'plus' }"/>

                <!-- Second and third Offers -->
                <div v-for="(offer, index) in offers" :key="`offer--pack-${index}`">
                    <div class="multioffer__bundle__pack__row">
                        <div v-for="(bundle, index) in offer.bundle" :key="`bundle-pack-${index}`" class="multioffer__bundle__pack__row__card" :class="`pack-card--${index} ${offer.bundle.length <= 1 ? 'full-card' : ''}`">
                            <Fonts class="multioffer__bundle__pack__row__card__title" v-if="bundle.title" :text="bundle.title"/>
                            <Fonts class="multioffer__bundle__pack__row__card__text" v-if="bundle.text" :text="bundle.text" />
                        </div>
                    </div>

                    <Click class="multioffer__bundle__pack__btn" v-if="offer.idBtn" :id="offer.idBtn" button center size="m"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script src="./MultiOffer.js"></script>
<style scoped lang="scss" src="./MultiOffer.scss"></style>
