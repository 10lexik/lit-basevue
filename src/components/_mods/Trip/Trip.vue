
<template>
    <div class="trip-mod container">
        <div class="trip-mod__filter">
            <div class="trip-mod__filter__header" v-on:click="this.showHideFilterList">
                <Img class="trip-mod__filter__header__image" src="filters.svg" alt="filters image" />
                <span class="trip-mod__filter__header__title">DESTINATIONS</span>
                <div class="trip-mod__filter__action">
                    <span v-show="!this.expandedFilterList" class="trip-mod__filter__expand icon-arrow_down" />
                    <span v-show="this.expandedFilterList" class="trip-mod__filter__close icon-cross" />
                </div>
            </div>
            <div class="trip-mod__filter__list" :class="(this.expandedFilterList) ? 'expand-list':''">
                <span v-on:click="sortDestinationsList('all')">TOUTES</span>
                <span v-for="(country, index) in this.getCountries" :key="`filter-list--${index}`" v-on:click="sortDestinationsList(country)">
                    {{ country }}
                </span>
            </div>
        </div>

        <Frow class="gutters mx-10 justify-start">
            <FrowCol v-for="(destination, index) in this.destinationsList" :key="`destination--${index}`" deskCols="1-3" class="mb-15">
                <div class="trip-mod__dest-visual">
                    <!-- Image -->
                    <Img :src="destination.img" :alt="'image destination : ' + destination.img" />
                    <span class="trip-mod__dest-visual__offer trip-mod__label" v-if="destination.offer">{{ destination.offer }}</span>
                </div>

                <div class="trip-mod__infos">
                    <p class="trip-mod__infos__title"><span class="bold">{{ destination.country }},</span> <span>{{ destination.city }}</span></p>

                    <Frow class="gutters" v-if="destination.location">
                        <FrowCol mobCols="8-12" deskCols="8-12">
                            <p v-if="destination.location">{{ destination.location }}</p>
                        </FrowCol>
                        <FrowCol mobCols="4-12" deskCols="4-12">
                            <div class="trip-mod__infos__rating" v-if="destination.rating">
                                <Rating :rate="destination.rating" />
                            </div>
                        </FrowCol>
                    </Frow>

                    <p v-if="destination.price">A partir de <span class="bold">{{ destination.price }} €</span></p>

                    <div class="trip-mod__specialities" v-if="destination.specialities">
                        <span class="trip-mod__specialities__label trip-mod__label" :class="(specIndex === 1) ? 'secondSpec' : ''"
                              v-for="(speciality, specIndex) in destination.specialities" :key="speciality">
                            {{ speciality }}
                        </span>
                    </div>
                </div>

                <!-- Button -->
                <div v-if="destination.idBtn">
                    <Frow class="row-start">
                        <FrowCol>
                            <Click :id="destination.idBtn" class="trip-mod__button" button block />
                        </FrowCol>
                    </Frow>
                </div>
            </FrowCol>
        </Frow>
    </div>
</template>

<style scoped lang="scss" src="./Trip.scss"></style>
<script src="./Trip.js"></script>
