<template>
    <div class="navbar">
        <div class="navbar__wrapper">

            <Click block :id="button.id" :class="['navbar__button', { active: index === indexBtn }]" v-for="(button, index) in content" :key="`button--${index}`" @click.native="selector(index)">
                <div class="navbar__button__inner">
                    <Img class="navbar__button__inner--icon" :src="button.icon" alt="" v-if="button.icon"/>
                    <Fonts class="navbar__button__inner--text" :text="[{ type: 'smallBody', text: `${button.label}` }]" v-if="button.label"/>
                </div>
            </Click>

        </div>
    </div>
</template>

<script src="./Navbar.js"></script>
<style scoped lang="scss" src="./Navbar.scss"></style>
