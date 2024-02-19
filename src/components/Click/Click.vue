<template>
    <div class="click" :class="`${this.block ? 'click-block' : ''} ${this.buttonPosition}`">
        <div class="click__inner" :class="this.buttonClass">

            <div v-if="this.button" :class="this.disabled ? 'disabled' : ''">
                <a v-if="this.variant !== 'submit'" v-timer :href="this.dataHref" :label="dataButtonLabel" class="click__inner__button button" :class="`${this.buttonClass ? this.buttonClass + '__button' : ''} btn-${this.size} ${this.variant} ${this.reverse ? 'reverse' : ''} ${this.disabled ? 'disabled' : ''}`" :target="this.dataTarget">
                    <span class="click__inner__button__label btn-label" v-html="this.dataButtonLabel ? this.dataButtonLabel : this.label"/>
                    <Img v-if="this.icon && this.icon.indexOf('svg') && this.variant !== 'link'" class="click__inner__button__icon btn-icon" :src="this.icon" :alt="`icon-btn`"/>
                    <!-- @slot Overrides style svg -->
                    <div v-else-if="this.icon" class="click__inner__button__icon btn-icon icon-svg"><slot></slot></div>
                    <i class="click__inner__button__icon btn-icon icon-arrow-forward" v-if="this.variant === 'link'"/>
                </a>

                <input v-else-if="this.variant === `submit`" type="submit" :class="`click__inner__button button ${this.variant} btn-submit-${this.size}`" :value="this.label"/>
            </div>

            <a v-else-if="this.dataHref && this.dataHref !== '#'" v-timer :href="this.dataHref" :target="this.dataTarget">
                <!-- @slot Overrides the content with any HTML elements and/or Components -->
                <slot>
                    {{ dataButtonLabel }}
                </slot>
            </a>

            <!-- @slot Overrides the content with any HTML elements and/or Components -->
            <div v-else class="btn-override">
                <slot>
                    {{ dataButtonLabel }}
                </slot>
            </div>
        </div>
    </div>
</template>

<script src="./Click.js"></script>
<style scoped lang="scss" src="./Click.scss"></style>
