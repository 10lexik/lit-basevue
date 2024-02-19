Basic usage (from any component)

```js
new Vue({
    data: () => ({
        showModal: false
    }),
    methods: {
        openModal() { this.showModal = true },
        closeModal() { this.showModal = false }
    },
    template: `
        <div>
            <a href="#" @click.prevent="openModal">Open modal</a>
            <Modal v-show="showModal" @close="closeModal">
                <Fonts text="This is a great modal" title />
                <Fonts text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem at, eius sunt nemo quis, deserunt sit quibusdam dolorem nisi, vitae architecto. Expedita fugiat iure accusantium blanditiis laboriosam sit earum ducimus." />
            </Modal>
        </div>
    `
})
```
