<template>
    <div id="app">
        <Loader classic type="progressBar"/>

        <div>
            <Header
                :animationIntro="{
                    pin: true,
                    imageAppear: true,
                    blurred: true,
                    scrollScale: true
                }"
                :video="{
                    mob: [ 'https://media.veepee.com/v1/media/fd88005f-a752-4edd-9ec4-6afa398411c9', 'https://media.veepee.com/v1/media/99cfbc81-8299-4eb9-b356-7b2db3326f1a', 'https://media.veepee.com/v1/media/bb8bdd08-c237-49e4-9781-94ae38dd36c0'],
                    desk: ['https://media.veepee.com/v1/media/bb8bdd08-c237-49e4-9781-94ae38dd36c0', 'https://media.veepee.com/v1/media/643bf164-c19b-456a-a796-8aa92b47797a', 'https://media.veepee.com/v1/media/f6508ad5-2b84-4ebd-80ca-ac33ae299699']
                }"
                variant="top"
                :title="[{ type: 'h3', text: 'Lorem Ipsum title' }, { type: 'smallBody', text: 'SUBTITLE' }]"
                text="Lorem Ipsum is simply dummy text"
                textAlign="center"
                :textScroll="{text:'DISCOVER THE OFFER', type: 'ml'}"
                logo="https://img.logoipsum.com/290.svg"
            />
            <Offer
                row
                popIn
                appearChildren
                :title="[{ type: 'h4', text: 'VEEPEE EXCLUSIVITY' }, { type: 'smallBody', text: 'Sales period', fontClass: 'mt-1' }]"
                :subtitle="[{ type: 'bigBody', text: 'Introduction of' }, { type: 'h2', text: 'MAIN OFFER' }, { type: 'bigBody', text: 'and its short description', fontClass: 'bold' }, { type: 'bigBody', text: 'with secondary informations ' }]"
                :copyCodeTitle="[{ type: 'smallBody', text: 'Avec le code :' }]"
                copyCode="CODER"
                img="https://dummyimage.com/720x300/bababa/aaa"
                :text="[{ type: 'smallBody', text: 'Details of the offer or small extras (extra kit or free delivery)' }]"
                idBtn="id"
            />
            <div class="app__container">
            </div><!-- end app__container (do not remove this comment) -->
            <Sticky/>
            <Footer/>
        </div>
    </div>
</template>

<style scoped lang="scss" src="./App.scss"></style>
<script src="./App.js"></script>
