
<template>
    <SCheckList class="check-list-mod" :backgroundColor="this.backgroundColor" :color="this.textColor">
        <div class="check-list-mod__content">
            <!-- Fonts -->
            <div class="check-list-mod__content__bottom-div" v-if="this.title || this.text">
                <Fonts :text="this.title" title />
                <Fonts :text="this.text" />
            </div>

            <!-- List -->
            <ul class="check-list-mod__content__list-div">
                <li v-for="item in this.checkList" :key="item">
                    <Fonts :text="item" />
                    <span class="check-list-mod__content__list-div__span">
                        <div class="icon-check" :style="`color: ${checkColor}`"/>
                    </span>
                </li>
            </ul>

            <!-- Button -->
            <div v-if="this.idBtn" class="check-list-mod__content__button-container">
                <Frow class="row-start">
                    <FrowCol>
                        <Click :id="this.idBtn" button center class="check-list-mod__content__button-container__button" />
                    </FrowCol>
                </Frow>
            </div>
        </div>
    </SCheckList>
</template>

<style scoped lang="scss" src="./CheckList.scss"></style>
<script src="./CheckList.js"></script>
