<template>
    <div class="postalcode">
        <div class="postalcode__container">
            <div>
                <input class="inputCp" id="zip_code" :required=field.required type="number"
                    :placeholder="$t('cp.placeholderZip')" v-model="zipCode" @blur="handleZipCodeBlur">
                <div class="cp-error" v-html="this.msg"></div>
            </div>
        </div>
    </div>
</template>

<script src="./PostalCode.js"></script>
<style scoped lang="scss" src="./PostalCode.scss"></style>
