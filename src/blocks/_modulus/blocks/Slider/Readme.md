Slider infoCard:

```vue
<Slider
    name="myName1"
    variant="infoCard"
    focus
    popInCard
    :title="[
        { type: 'h3', text: 'Fat Title'},
        { type: 'smallBody', text: 'Short description of the block (2 lines)'}
    ]"
    :navbar="[
        { label: 'Label 1', id: 'button1', targetId: 0 },
        { label: 'Label 2', id: 'button2', targetId: 1 },
        { label: 'Label 3', id: 'button3', targetId: 2 }
    ]"
    :content="[
            {
                ratings: 5,
                title: { text: 'Title of Section 1', type: 'bigBody' },
                subtitle: { text: 'Destination 1', type: 'smallBody' },
                img: 'https://picsum.photos/432/432?random=1',
                text: { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto, aspernatur dicta expedita id inventore nemo neque nobis non nulla numquam quasi tenetur. Accusantium, dolorum et possimus quisquam sed voluptate.', type: 'smallBody' },
                id: 'button1',
                stickers: [
                    { text: 'label 1', type: 'smallBody' },
                    { text: 'label 2', type: 'smallBody' },
                    { icon: 'icon-vp-logo' }
                ]
            },
            {
                ratings: 2.5,
                title: { text: 'Title of Section 2', type: 'bigBody' },
                subtitle: { text: 'Destination 2', type: 'smallBody' },
                img: 'https://picsum.photos/432/432?random=1',
                text: { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto, aspernatur dicta expedita id inventore nemo neque nobis non nulla numquam quasi tenetur. Accusantium, dolorum et possimus quisquam sed voluptate.', type: 'smallBody' },
                id: 'button1',
                stickers: [
                    { text: 'label 1', type: 'smallBody' },
                    { text: 'label 2', type: 'smallBody' },
                    { icon: 'icon-vp-logo' }
                ]
            },
            {
                ratings: 3.5,
                title: { text: 'Title of Section 3', type: 'bigBody' },
                subtitle: { text: 'Destination 3', type: 'smallBody' },
                img: 'https://picsum.photos/432/432?random=1',
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
Slider simple card (looping) :

```vue
<Slider
    name="myName2"
    variant="simpleCard"
    popInCard
    loop
    :title="[
        { type: 'h3', text: 'Fat Title'},
        { type: 'smallBody', text: 'Short description of the block (2 lines)'}
    ]"
    :navbar="[
        { label: 'Label 1', id: 'button1', targetId: 0 },
        { label: 'Label 2', id: 'button2', targetId: 1 },
        { label: 'Label 3', id: 'button3', targetId: 2 }
    ]"
    :content="[
            {
                title: { text: 'Title of Section 1', type: 'bigBody' },
                subtitle: { text: 'Destination 1', type: 'smallBody' },
                img: 'https://picsum.photos/432/432?random=1',
                text: { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto, aspernatur dicta expedita id inventore nemo neque nobis non nulla numquam quasi tenetur. Accusantium, dolorum et possimus quisquam sed voluptate.', type: 'smallBody' }
            },
            {
                title: { text: 'Title of Section 2', type: 'bigBody' },
                subtitle: { text: 'Destination 2', type: 'smallBody' },
                img: 'https://picsum.photos/432/432?random=1',
                text: { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto, aspernatur dicta expedita id inventore nemo neque nobis non nulla numquam quasi tenetur. Accusantium, dolorum et possimus quisquam sed voluptate.', type: 'smallBody' }
            },
            {
                title: { text: 'Title of Section 3', type: 'bigBody' },
                subtitle: { text: 'Destination 3', type: 'smallBody' },
                img: 'https://picsum.photos/432/432?random=1',
                text: { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto, aspernatur dicta expedita id inventore nemo neque nobis non nulla numquam quasi tenetur. Accusantium, dolorum et possimus quisquam sed voluptate.', type: 'smallBody' }
            }
        ]"
/>
```

Slider edito:

```vue
<Slider
    name="myName3"
    variant="edito"
    :title="[
        { type: 'h3', text: 'Fat Title'},
        { type: 'smallBody', text: 'Short description of the block (2 lines)'}
    ]"
    :navbar="[
        { label: 'Label 1', id: 'button1', targetId: 0 },
        { label: 'Label 2', id: 'button2', targetId: 1 },
        { label: 'Label 3', id: 'button3', targetId: 2 }
    ]"
    :content="[
            {
                title: { text: 'Title of Section 1', type: 'bigBody' },
                subtitle: { text: 'Destination 1', type: 'smallBody' },
                img: 'https://picsum.photos/432/432?random=1',
                text: { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto, aspernatur dicta expedita id inventore nemo neque nobis non nulla numquam quasi tenetur. Accusantium, dolorum et possimus quisquam sed voluptate.', type: 'smallBody' }
            },
            {
                title: { text: 'Title of Section 2', type: 'bigBody' },
                subtitle: { text: 'Destination 2', type: 'smallBody' },
                img: 'https://picsum.photos/432/432?random=1',
                text: { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto, aspernatur dicta expedita id inventore nemo neque nobis non nulla numquam quasi tenetur. Accusantium, dolorum et possimus quisquam sed voluptate.', type: 'smallBody' }
            },
            {
                title: { text: 'Title of Section 3', type: 'bigBody' },
                subtitle: { text: 'Destination 3', type: 'smallBody' },
                img: 'https://picsum.photos/432/432?random=1',
                text: { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto, aspernatur dicta expedita id inventore nemo neque nobis non nulla numquam quasi tenetur. Accusantium, dolorum et possimus quisquam sed voluptate.', type: 'smallBody' }
            }
        ]"
/>
```

Slider img:

```vue
<Slider
    name="myName4"
    variant="img"
    focus
    :title="[
        { type: 'h3', text: 'Fat Title'},
        { type: 'smallBody', text: 'Short description of the block (2 lines)'}
    ]"
    :navbar="[
        { label: 'Label 1', id: 'button1', targetId: 0 },
        { label: 'Label 2', id: 'button2', targetId: 1 },
        { label: 'Label 3', id: 'button3', targetId: 2 }
    ]"
    :content="[
            {
                img: 'https://picsum.photos/432/432?random=1'
            },
            {
                img: 'https://picsum.photos/432/432?random=1'
            },
            {
                img: 'https://picsum.photos/432/432?random=1'
            }
        ]"
/>
```

Slider reaCard:

```vue
<Slider
    name="myName5"
    variant="reaCard"
    :title="[
        { type: 'h3', text: 'Fat Title'},
        { type: 'smallBody', text: 'Short description of the block (2 lines)'}
    ]"
    :navbar="[
        { label: 'Label 1', id: 'button1', targetId: 0 },
        { label: 'Label 2', id: 'button2', targetId: 1 },
        { label: 'Label 3', id: 'button3', targetId: 2 }
    ]"
    :content="[
            {
                title: { text: 'Title of Section 1', type: 'bigBody' },
                img: 'https://picsum.photos/432/432?random=1',
                text: { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto, aspernatur dicta expedita id inventore nemo neque nobis non nulla numquam quasi tenetur. Accusantium, dolorum et possimus quisquam sed voluptate.', type: 'smallBody' },
                id: 'button1'
            },
            {
                title: { text: 'Title of Section 2', type: 'bigBody' },
                img: 'https://picsum.photos/432/432?random=1',
                text: { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto, aspernatur dicta expedita id inventore nemo neque nobis non nulla numquam quasi tenetur. Accusantium, dolorum et possimus quisquam sed voluptate.', type: 'smallBody' },
                id: 'button1'
            },
            {
                title: { text: 'Title of Section 3', type: 'bigBody' },
                img: 'https://picsum.photos/432/432?random=1',
                text: { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto, aspernatur dicta expedita id inventore nemo neque nobis non nulla numquam quasi tenetur. Accusantium, dolorum et possimus quisquam sed voluptate.', type: 'smallBody' },
                id: 'button1'
            }
        ]"
/>
```

Slider without animation and initialSlide at 1

```vue
<Slider
    name="myName6"
    variant="simpleCard"
    popInCard
    noAnimation
    paginationUnder
    :initialSlide="1"
    :title="[
        { type: 'h3', text: 'Fat Title'},
        { type: 'smallBody', text: 'Short description of the block (2 lines)'}
    ]"
                    :navbar="[
        { label: 'Label 1', id: 'button1', targetId: 0 },
        { label: 'Label 2', id: 'button2', targetId: 1 },
        { label: 'Label 3', id: 'button3', targetId: 2 }
    ]"
    :content="[
        {
            title: { text: 'Title of Section 1', type: 'bigBody' },
            subtitle: { text: 'Destination 1', type: 'smallBody' },
            img: 'https://picsum.photos/432/432?random=1',
            text: { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto, aspernatur dicta expedita id inventore nemo neque nobis non nulla numquam quasi tenetur. Accusantium, dolorum et possimus quisquam sed voluptate.', type: 'smallBody' }
        },
        {
            title: { text: 'Title of Section 2', type: 'bigBody' },
            subtitle: { text: 'Destination 2', type: 'smallBody' },
            img: 'https://picsum.photos/432/432?random=1',
            text: { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto, aspernatur dicta expedita id inventore nemo neque nobis non nulla numquam quasi tenetur. Accusantium, dolorum et possimus quisquam sed voluptate.', type: 'smallBody' }
        },
        {
            title: { text: 'Title of Section 3', type: 'bigBody' },
            subtitle: { text: 'Destination 3', type: 'smallBody' },
            img: 'https://picsum.photos/432/432?random=1',
            text: { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto, aspernatur dicta expedita id inventore nemo neque nobis non nulla numquam quasi tenetur. Accusantium, dolorum et possimus quisquam sed voluptate.', type: 'smallBody' }
        }
    ]"
/>
```
