<template>
    <section class="top-bar">
        <div class="top-bar__wrapper">
            <div class="top-bar__inner">
                <Frow class="items-center container">
                    <FrowCol deskCols="10-12" mobCols="1-2">
                        <Img src="back-to-vp.svg" class="top-bar__img" alt="retour à l'accueil" />
                    </FrowCol>
                    <FrowCol v-if="this.idBtn" deskCols="2-12" mobCols="1-2">
                        <Click :id="this.idBtn" button block />
                    </FrowCol>
                </Frow>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss" src="./TopBar.scss"></style>
<script src="./TopBar.js"></script>
