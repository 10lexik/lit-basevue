
<template>
    <div class="product-mod">
        <!-- Image -->
        <Img :src="this.img" :alt="'image produit : ' + this.img" />

        <!-- Fonts -->
        <div class="product-mod__bottom-div" v-if="this.title || this.text">
            <Fonts :text="this.title" title />
            <Fonts :text="this.text" />
        </div>

        <!-- Button -->
        <div class="product-mod__button-div" v-if="this.idBtn">
            <Frow class="row-start">
                <FrowCol mobCols="1-2" deskCols="1-2" class="mx-15">
                    <Click :id="this.idBtn" button />
                </FrowCol>
            </Frow>
        </div>
    </div>
</template>

<style scoped lang="scss" src="./Product.scss"></style>
<script src="./Product.js"></script>
