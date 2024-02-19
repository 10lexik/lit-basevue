HowTo SLIDER/SMALL :

```vue
<HowTo
    name="tata"
    :content="[
        {
            title: [{ type: 'h3', text: 'Main Title 1' }, { type: 'bigBody', text: 'and its short description with secondary informations' }],
            text: [{ type: 'bigBody', text: 'Step', fontClass: 'bold' }, { type: 'smallBody', text: 'Short explanation of the process <br/>(2 lines max.)' }],
            img: 'https://dummyimage.com/300x200/bababa/aaa'
        },
        {
            title: [{ type: 'h3', text: 'Main Title 2' }, { type: 'bigBody', text: 'and its short description with secondary informations' }],
            text: [{ type: 'bigBody', text: 'Step', fontClass: 'bold' }, { type: 'smallBody', text: 'Short explanation of the process <br/>(2 lines max.)' }],
            img: 'https://dummyimage.com/300x200/bababa/aaa'
        },
        {
            title: [{ type: 'h3', text: 'Main Title 3' }, { type: 'bigBody', text: 'and its short description with secondary informations' }],
            text: [{ type: 'bigBody', text: 'Step', fontClass: 'bold' }, { type: 'smallBody', text: 'Short explanation of the process <br/>(2 lines max.)' }],
            img: 'https://dummyimage.com/300x200/bababa/aaa'
        }
    ]"
    size="small"
    variant="slider"
/>
```

HowTo SLIDER/BIG :

```vue
<HowTo
    name="tata"
    :content="[
        {
            title: [{ type: 'h3', text: 'Main Title 1' }, { type: 'bigBody', text: 'and its short description with secondary informations' }],
            text: [{ type: 'bigBody', text: 'Step', fontClass: 'bold' }, { type: 'smallBody', text: 'Short explanation of the process <br/>(2 lines max.)' }],
            img: 'https://dummyimage.com/300x200/bababa/aaa'
        },
        {
            title: [{ type: 'h3', text: 'Main Title 2' }, { type: 'bigBody', text: 'and its short description with secondary informations' }],
            text: [{ type: 'bigBody', text: 'Step', fontClass: 'bold' }, { type: 'smallBody', text: 'Short explanation of the process <br/>(2 lines max.)' }],
            img: 'https://dummyimage.com/300x200/bababa/aaa'
        },
        {
            title: [{ type: 'h3', text: 'Main Title 3' }, { type: 'bigBody', text: 'and its short description with secondary informations' }],
            text: [{ type: 'bigBody', text: 'Step', fontClass: 'bold' }, { type: 'smallBody', text: 'Short explanation of the process <br/>(2 lines max.)' }],
            img: 'https://dummyimage.com/300x200/bababa/aaa'
        }
    ]"
    size="big"
    variant="slider"
/>
```

HowTo PILE/SMALL :

```vue
<HowTo
    :title="[{ type: 'h3', text: 'Main Title' }, { type: 'bigBody', text: 'and its short description with secondary informations' }]"
    :content="[
        {
            text: [{ type: 'bigBody', text: 'Step', fontClass: 'bold' }, { type: 'smallBody', text: 'Short explanation of the process <br/>(2 lines max.)' }],
            img: 'https://dummyimage.com/300x200/bababa/aaa'
        },
        {
            text: [{ type: 'bigBody', text: 'Step', fontClass: 'bold' }, { type: 'smallBody', text: 'Short explanation of the process <br/>(2 lines max.)' }],
            img: 'https://dummyimage.com/300x200/bababa/aaa'
        },
        {
            text: [{ type: 'bigBody', text: 'Step', fontClass: 'bold' }, { type: 'smallBody', text: 'Short explanation of the process <br/>(2 lines max.)' }],
            img: 'https://dummyimage.com/300x200/bababa/aaa'
        }
    ]"
    size="small"
    variant="pile"
/>
```

HowTo PILE/BIG :

```vue
<HowTo
    :title="[{ type: 'h3', text: 'Main Title' }, { type: 'bigBody', text: 'and its short description with secondary informations' }]"
    :content="[
        {
            text: [{ type: 'bigBody', text: 'Step', fontClass: 'bold' }, { type: 'smallBody', text: 'Short explanation of the process <br/>(2 lines max.)' }],
            img: 'https://dummyimage.com/300x200/bababa/aaa'
        },
        {
            text: [{ type: 'bigBody', text: 'Step', fontClass: 'bold' }, { type: 'smallBody', text: 'Short explanation of the process <br/>(2 lines max.)' }],
            img: 'https://dummyimage.com/300x200/bababa/aaa'
        },
        {
            text: [{ type: 'bigBody', text: 'Step', fontClass: 'bold' }, { type: 'smallBody', text: 'Short explanation of the process <br/>(2 lines max.)' }],
            img: 'https://dummyimage.com/300x200/bababa/aaa'
        }
    ]"
    size="big"
    variant="pile"
/>
```

