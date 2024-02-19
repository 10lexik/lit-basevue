<template>
    <div class="form">
        <!-- Form -->
        <form v-if="this.status !== 'submitted'" @submit.prevent="handleForm">
            <Frow class="form__wrapper">
                <FrowCol class="form__field form__field--text" deskCols="6-12" mobCols="12-12">
                    <input id="firstname" type="firstname" :placeholder="$t('form.fields.firstname')" v-model="fields.firstname">
                </FrowCol>

                <FrowCol class="form__field form__field--text" deskCols="6-12" mobCols="12-12">
                    <input id="lastname" type="lastname" :placeholder="$t('form.fields.lastname')" v-model="fields.lastname">
                </FrowCol>

                <FrowCol class="form__field form__field--text" deskCols="12-12" mobCols="12-12">
                    <input id="email" type="email" required :placeholder="$t('form.fields.email')" v-model="fields.email">
                </FrowCol>

                <FrowCol class="form__field form__field--checkbox" deskCols="12-12" mobCols="12-12">
                    <input id="rules" type="checkbox" v-model="fields.rules">
                    <label for="rules" v-html="$t('form.fields.rules')"></label>
                </FrowCol>

                <FrowCol class="form__field form__field--checkbox" deskCols="12-12" mobCols="12-12">
                    <input id="optin" type="checkbox" v-model="fields.optin">
                    <label for="optin" v-html="$t('form.fields.optin')"></label>
                </FrowCol>

                <FrowCol class="form__field form__field--submit" deskCols="12-12" mobCols="12-12">
                    <p class="form__error" v-if="this.errorMessage">{{ $t(`mailApi.${this.errorMessage}`) }}</p>
                </FrowCol>

                <FrowCol class="form__field form__submit" deskCols="12-12" mobCols="12-12">
                    <Click button variant="submit" />
                </FrowCol>
            </Frow>
        </form>

        <!-- Success -->
        <div v-else>
            <p>Merci</p>
        </div>
    </div>
</template>

<script src="./Form.js"></script>
<style scoped lang="scss" src="./Form.scss"></style>
