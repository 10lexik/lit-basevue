<template>
    <transition :name="this.transition">
        <section v-show="!this.showLoader" class="loader">
            <div v-if="this.blur" class="loader__blurred-bg" />

            <!-- Brands logos -->
            <div class="loader__brands-wrapper">
                <div class="loader__carterose" :class="this.classic ? 'classic' : ''">
                    <Img class="loader__carterose__img" src="logo-pink-brand.svg" center alt="Pink Brand" />
                </div>
                <div class="loader__brand">
                    <Img class="loader__brand__img" center src="https://img.logoipsum.com/290.svg" alt="" />
                </div>
            </div>

            <!-- Progress Spinner/Bar -->
            <div v-if="this.type === 'progressBar'" class="loader__bar">
                <div class="loader__bar__progress" :style="`width: ${this.progress}%`"></div>
            </div>
            <div v-else-if="this.type === 'veepeeSpinner'" class="loader__spinner">
                <Img src="back-to-vp.svg" class="loader__spinner__vp-img" />
                <Img class="loader__spinner__img loader__spinner__img--vp-color" src="spinner.svg" inlineSvg center alt="en cours de chargement" />
            </div>
            <div v-else-if="this.type === 'bullets'" class="loader__bullets">
                <p v-for="i of 3" :key="`loader-bullet-${i}`" v-text="'.'" :class="`loader__bullets__element loader__bullets__element--${i - 1}`" />
            </div>
            <div v-else class="loader__spinner">
                <Img class="loader__spinner__img" src="spinner.svg" inlineSvg center alt="en cours de chargement" />
            </div>
        </section>
    </transition>
</template>

<style scoped lang="scss" src="./Loader.scss"></style>
<script src="./Loader.js"></script>
