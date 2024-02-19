<template>
    <section class="modal" >
        <div class="modal__background" @click="$emit('close')"></div>
        <div class="modal__container">
            <div class="modal__close" @click="$emit('close')">+</div>
            <div class="modal__container__content">
                <!-- @slot Content of the modal. -->
                <slot></slot>
            </div>
        </div>
    </section>
</template>
<style scoped lang="scss" src="./Modal.scss"></style>
<script src="./Modal.js"></script>
