<template>
    <section class="timer">
        <div class="timer__container">
            <div class="timer__container--wrapper">
                <Img ref="timerClock" class="timer__container__miniclock miniclock" inlineSvg src="clock.svg" />
                <div class="timer__container__inner px-4">
                    <span class="timer__container__inner--bg"/>
                    <Fonts ref="timeTitle" class="timer__container__inner--title" v-if="title || timerTitle" :text="{ type: 'ml', text: title ? title : timerTitle }" />
                    <div class="timer__container__inner__numbers">
                        <Img ref="timerClockInline" class="timer__container__inner__numbers__miniclock miniclock" inlineSvg src="clock.svg" />
                        <template v-for="(value, key, index) in timer">
                            <div class="timer__container__inner__numbers__number" :key="`number--${key}`">
                                <Fonts class="time__value" :text="{ type: 'h3', text: value }" />
                                <Fonts ref="timeType" class="time__type" v-if="timerLabels" :text="{ type: 'ml', text: $t(`timer.timerLabels.${key}`), fontClass: 'pb-1' }"  />
                            </div>
                            <Fonts v-if="index !== (Object.keys(timer).length - 1)" class="timer__container__inner__numbers__dots" :class="timerLabels && !alt ? 'timer__container__inner__numbers__dots--withLabels' : ''" :text="{ type: 'h3', text: ':' }" :key="`dots--${key}`"/>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script src="./Timer.js"></script>
<style scoped lang="scss" src="./Timer.scss"></style>
