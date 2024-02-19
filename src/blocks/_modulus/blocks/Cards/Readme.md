If you want one single Card :

```vue
<Cards
    variant="edito"
    :cardsList="[
        {
            img: 'https://picsum.photos/432/432?random=1',
            title: { text: 'Title of Section 1', type: 'bigBody' },
            text: { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto, aspernatur dicta expedita id inventore nemo neque nobis non nulla numquam quasi tenetur. Accusantium, dolorum et possimus quisquam sed voluptate.', type: 'smallBody' },
            id: 'button1'
        }
    ]"
/>
```

If you want one row to contain 2 cards in mobile :

```vue
<Cards
    variant="edito"
    isMobRow
    :cardsList="[
        {
            img: 'https://picsum.photos/432/432?random=1',
            title: { text: 'Title of Section 1', type: 'bigBody' },
            text: { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto, aspernatur dicta expedita id inventore nemo neque nobis non nulla numquam quasi tenetur. Accusantium, dolorum et possimus quisquam sed voluptate.', type: 'smallBody' },
            id: 'button1'
        },
        {
            img: 'https://picsum.photos/432/432?random=1',
            title: { text: 'Title of Section 1', type: 'bigBody' },
            text: { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto, aspernatur dicta expedita id inventore nemo neque nobis non nulla numquam quasi tenetur. Accusantium, dolorum et possimus quisquam sed voluptate.', type: 'smallBody' },
            id: 'button1'
        }
    ]"
/>
```

Edito cards :

```vue
<Cards
    variant="edito"
    popIn
    :cardsList="[
        {
            img: 'https://picsum.photos/432/432?random=1',
            title: { text: 'Title of Section 1', type: 'bigBody' },
            text: { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto, aspernatur dicta expedita id inventore nemo neque nobis non nulla numquam quasi tenetur. Accusantium, dolorum et possimus quisquam sed voluptate.', type: 'smallBody' },
            id: 'button1'
        },
        {
            img: 'https://picsum.photos/432/432?random=1',
            title: { text: 'Title of Section 1', type: 'bigBody' },
            text: { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto, aspernatur dicta expedita id inventore nemo neque nobis non nulla numquam quasi tenetur. Accusantium, dolorum et possimus quisquam sed voluptate.', type: 'smallBody' },
            id: 'button1'
        }
    ]"
/>
```

Info cards :

```vue
<Cards
    variant="info"
    isMobRow
    stickersRounded
    :cardsList="[
        {
            ratings: 2.5,
            img: 'https://picsum.photos/432/432?random=1',
            title: { text: 'Title of Section 1', type: 'bigBody' },
            subtitle: { text: 'Destination 1', type: 'smallBody' },
            text: { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto, aspernatur dicta expedita id inventore nemo neque nobis non nulla numquam quasi tenetur. Accusantium, dolorum et possimus quisquam sed voluptate.', type: 'smallBody' },
            id: 'button1',
            stickers: [
                { text: 'label 1', type: 'smallBody' },
                { text: 'label 2', type: 'smallBody' },
                { icon: 'icon-beauty_thematic' }
            ]
        }
    ]"
/>
```

Info cards with other icons (check the /src/assets/icons/demo.html file to get the list) :

```vue
<Cards
    variant="info"
    stickersRounded
    filledIconClass="icon-full-heart"
    halfFilledIconClass="icon-half-heart"
    :cardsList="[
        {
            ratings: 2.5,
            img: 'https://picsum.photos/432/432?random=1',
            title: { text: 'Title of Section 1', type: 'bigBody' },
            subtitle: { text: 'Destination 1', type: 'smallBody' },
            text: { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto, aspernatur dicta expedita id inventore nemo neque nobis non nulla numquam quasi tenetur. Accusantium, dolorum et possimus quisquam sed voluptate.', type: 'smallBody' },
            id: 'button1',
            stickers: [
                { text: 'label 1', type: 'smallBody' },
                { text: 'label 2', type: 'smallBody' },
                { icon: 'icon-vp-logo' }
            ]
        }
    ]"
/>
```

Category cards :

```vue
<Cards
    variant="category"
    popIn
    :cardsList="[
        {
            img: 'https://picsum.photos/432/432?random=1',
            title: { text: 'Title of Section 1', type: 'bigBody' },
            text: { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto, aspernatur dicta expedita id inventore nemo neque nobis non nulla numquam quasi tenetur. Accusantium, dolorum et possimus quisquam sed voluptate.', type: 'smallBody' },
            id: 'button1'
        }
    ]"
/>
```

Reinsurance cards :

```vue
<Cards
    variant="reinsurance"
    popIn
    :cardsList="[
        {
            img: 'https://picsum.photos/432/432?random=1',
            title: { text: 'Title of Section 1', type: 'bigBody' },
            text: { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto, aspernatur dicta expedita id inventore nemo neque nobis non nulla numquam quasi tenetur. Accusantium, dolorum et possimus quisquam sed voluptate.', type: 'smallBody' },
            id: 'button1'
        }
    ]"
/>
```

Horizontal cards :

```vue
<Cards
    variant="horizontal"
    popIn
    :cardsList="[
        {
            img: 'https://picsum.photos/432/432?random=1',
            title: { text: 'Title of Section 1', type: 'bigBody' },
            text: { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto, aspernatur dicta expedita id inventore nemo neque nobis non nulla numquam quasi tenetur.', type: 'smallBody' },
            id: 'button1'
        },
        {
            img: 'https://picsum.photos/432/432?random=1',
            title: { text: 'Title of Section 1', type: 'bigBody' },
            text: { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto, aspernatur dicta expedita id inventore nemo neque nobis non nulla numquam quasi tenetur.', type: 'smallBody' },
            id: 'button1'
        }
    ]"
/>
```
