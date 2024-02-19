Accordion full img or videos :

```vue
    <Accordion
    overlay="full"
    :content="{
        title: {type: 'h3', text: 'Title' },
        subtitle: {type:'bigBody', text: 'Short description of the block (2 lines)'},
        pannels: [
            {
                backgroundMob: 'https://picsum.photos/300/300?random=1',
                backgroundDesk: 'https://picsum.photos/500/400?random=1',
                text: { type: 'h4', text: 'GAMME AI STIHL' },
                desc: {
                    title: { type: 'bigBody', text: 'Title of the section 0' },
                    text: { type: 'smallBody', text: 'Short description of the product, its ingredients or its advantages' }
                },
                cta: 'id'
            },
            {
                backgroundMob: 'https://picsum.photos/300/300?random=1',
                backgroundDesk: 'https://picsum.photos/500/400?random=1',
                text: { type: 'h4', text: 'STIHL AS SYSTEM' },
                desc: {
                    title: { type: 'bigBody', text: 'Title of the section 1' },
                    text: { type: 'smallBody', text: 'Short description of the product, its ingredients or its advantages' }
                },
                cta: 'id'
            },
            {
                backgroundMob: 'https://picsum.photos/300/300?random=1',
                backgroundDesk: 'https://picsum.photos/500/400?random=1',
                text: { type: 'h4', text: 'AK SYSTEM STIHL' },
                desc: {
                    title: { type: 'bigBody', text: 'Title of the section 2' },
                    text: { type: 'smallBody', text: 'Short description of the product, its ingredients or its advantages' }
                },
                cta: 'id'
            }
        ]
    }"/>
```

Accordion slide img :

```vue
<Accordion
    overlay="horizontal"
    :content="{
        pannels: [
            {
                backgroundMob: 'https://picsum.photos/300/300?random=1',
                backgroundDesk: 'https://picsum.photos/500/400?random=1',
                text: { type: 'h4', text: 'GAMME AI STIHL' },
            },
            {
                backgroundMob: 'https://picsum.photos/300/300?random=1',
                backgroundDesk: 'https://picsum.photos/500/400?random=1',
                text: { type: 'h4', text: 'STIHL AS SYSTEM' },
            },
            {
                backgroundMob: 'https://picsum.photos/300/300?random=1',
                backgroundDesk: 'https://picsum.photos/500/400?random=1',
                text: { type: 'h4', text: 'AK SYSTEM STIHL' },
            }
        ]
}"/>
```

Accordion slide videos :

```vue
<Accordion
    overlay="vertical"
    :content="{
        pannels: [
            {
                text: { type: 'h4', text: 'GAMME AI STIHL' },
                video: {
                    src: 'https://media.veepee.com/v1/media/4608d1da-2471-4404-b7dd-723092291e78',
                }
            },
            {
                text: { type: 'h4', text: 'STIHL AS SYSTEM' },
                video: {
                    src: 'https://media.veepee.com/v1/media/f800b2ee-5598-488b-9f3b-7222b9e09702',
                }
            },
            {
                text: { type: 'h4', text: 'AK SYSTEM STIHL' },
                video: {
                    src: 'https://media.veepee.com/v1/media/86561c4d-095c-48a4-a87c-f75b61050abe',
                }
            }
        ]
    }"/>
```

