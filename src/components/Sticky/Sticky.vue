<template>
    <section class="sticky">
        <div class="sticky__wrapper">
            <div :class="`sticky__inner ${type}`">
                <slot>
                    <div :class="`sticky__content ${type}`">
                        <Fonts class="sticky__text" text="This is a text" />
                        <Click id="sticky" button center class="sticky__btn"/>
                    </div>
                </slot>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss" src="./Sticky.scss"></style>
<script src="./Sticky.js"></script>
