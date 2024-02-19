```vue
<EasterEgg
    id="egg1"
    src="https://via.placeholder.com/200x200?text=Egg1"
    placeholder="https://via.placeholder.com/200x200/ffAf00?text=Egg1%20Not%20found"
    foundPlaceholder="https://via.placeholder.com/200x200/green?text=Egg1%20Found"
/>
<EasterEgg
    id="egg2"
    src="https://via.placeholder.com/200x200?text=Egg2"
    placeholder="https://via.placeholder.com/200x200/ffAf00?text=Egg2%20Not%20found"
    foundPlaceholder="https://via.placeholder.com/200x200/green?text=Egg2%20Found"
/>
```

This component uses the <Img /\> component. This means that the provided images path must be relative to the `src/assets/img` folder.
