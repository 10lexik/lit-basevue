<template>
    <div class="countdown">
        <span>
            {{ this.timer.day }}<span class="countdown__indicator">J</span> :
            {{ this.timer.hour }}<span class="countdown__indicator">H</span> :
            {{ this.timer.minute }}<span class="countdown__indicator">M</span> :
            {{ this.timer.second }}<span class="countdown__indicator">S</span>
        </span>
    </div>
</template>

<script src="./Countdown.js"></script>
<style scoped lang="scss" src="./Countdown.scss"></style>
