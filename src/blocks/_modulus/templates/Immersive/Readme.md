Template Immersive (not working on Styleguide) :

```vue
<!--
<Immersive :content="[
    {
        type: 'header',
        logo: 'https://dummyimage.com/640x360/000/aaa',
        content: [{ type: 'h1', text: 'MAIN TITLE<br/>2lines', fontClass: 'mb-1' }, { type: 'bigBody', text: 'Summary description: it must be a support for the title or a catchy phrase (3 lines max) Summary be a ax' }],
        textScroll: { text:'DISCOVER THE OFFER', type: 'ml' }
    },
    {
        type: 'article',
        contentPosition: 'top',
        content: [{ type: 'h3', text: 'SECTION TITLE <br/>2 lines', fontClass: 'mb-1' }, { type: 'bigBody', text: 'Summary description: it must be a support for the title or a catchy phrase (3 lines max) Summary be a ax' }],
        popin: {
            btnWording: '+ d’infos',
            background: 'https://picsum.photos/200/150/?random=1',
            text: [{ type: 'bigBody', text: 'Title of section <br/>2 lines max', fontClass: 'mb-1' }, { type: 'smallBody', text: 'Summary description:  (3 lines max) ' }],
            id: 'sticky'
        }
    },
    {
        type: 'footer',
        contentPosition: 'bottom',
        content: [{ type: 'h3', text: 'SECTION TITLE <br/>2 lines', fontClass: 'mb-1' }, { type: 'bigBody', text: 'Summary description: it must be a support for the title or a catchy phrase (3 lines max) Summary be a ax' }],
        popin: {
            btnWording: '+ d’infos',
            background: 'https://picsum.photos/200/150/?random=1',
            text: [{ type: 'bigBody', text: 'Title of section <br/>2 lines max', fontClass: 'mb-1' }, { type: 'smallBody', text: 'Summary description:  (3 lines max) ' }],
            id: 'sticky'
        },
        id: 'sticky'
    }
]"/>
-->
```

No Sticky

```vue
<!--
<Immersive
    hideSticky
    :content="[
    {
        type: 'header',
        logo: 'https://dummyimage.com/640x360/000/aaa',
        content: [{ type: 'h1', text: 'MAIN TITLE<br/>2lines', fontClass: 'mb-1' }, { type: 'bigBody', text: 'Summary description: it must be a support for the title or a catchy phrase (3 lines max) Summary be a ax' }],
        textScroll: { text:'DISCOVER THE OFFER', type: 'ml' }
    },
    {
        type: 'article',
        contentPosition: 'top',
        content: [{ type: 'h3', text: 'SECTION TITLE <br/>2 lines', fontClass: 'mb-1' }, { type: 'bigBody', text: 'Summary description: it must be a support for the title or a catchy phrase (3 lines max) Summary be a ax' }],
        popin: {
            btnWording: '+ d’infos',
            background: 'https://picsum.photos/200/150/?random=1',
            text: [{ type: 'bigBody', text: 'Title of section <br/>2 lines max', fontClass: 'mb-1' }, { type: 'smallBody', text: 'Summary description:  (3 lines max) ' }],
            id: 'sticky'
        }
    },
    {
        type: 'footer',
        contentPosition: 'bottom',
        content: [{ type: 'h3', text: 'SECTION TITLE <br/>2 lines', fontClass: 'mb-1' }, { type: 'bigBody', text: 'Summary description: it must be a support for the title or a catchy phrase (3 lines max) Summary be a ax' }],
        popin: {
            btnWording: '+ d’infos',
            background: 'https://picsum.photos/200/150/?random=1',
            text: [{ type: 'bigBody', text: 'Title of section <br/>2 lines max', fontClass: 'mb-1' }, { type: 'smallBody', text: 'Summary description:  (3 lines max) ' }],
            id: 'sticky'
        },
        id: 'sticky'
    }
]"/>
-->
```

