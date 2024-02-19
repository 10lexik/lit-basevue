multiOffer :

```vue
<p>Due to its main animation, this module can't be displayed in the styleguide</p>
<!-- <MultiOffer
    :offers="
        [
            {
                title: [{ type: 'h4', text: 'VEEPEE EXCLUSIVITY' }, { type: 'smallBody', text: 'Sales period' }],
                subtitle: [{ type: 'bigBody', text: 'Introduction of' }, { type: 'h2', text: 'MAIN OFFER' }, { type: 'bigBody', text: 'and its short description', fontClass: 'bold' }]
            },
            {
                title: [{ type: 'h4', text: 'VEEPEE EXCLUSIVITY' }, { type: 'smallBody', text: 'Sales period' }],
                img: 'https://dummyimage.com/340x140/bababa/aaa',
                text: [{ type: 'smallBody', text: 'Details of the offer or small extras (extra kit or free delivery)' }]
            },
            {
                title: [{ type: 'h4', text: 'VEEPEE EXCLUSIVITY' }, { type: 'smallBody', text: 'Sales period' }],
                copyCodeTitle: [{ type: 'smallBody', text: 'Avec le code :' }],
                copyCode: 'CODER',
                text: [{ type: 'smallBody', text: 'Details of the offer or small extras (extra kit or free delivery)' }],
                idBtn: 'id'
            }
        ]
    "
/> -->
```
MultiOffer variant bundle (no-stacking):

```vue
<MultiOffer
    variant="bundle"
    :title="[{ type: 'h4', text: 'EXCLUSIVITY VEEPEE MEMBER' }, { type: 'smallBody', text: 'One line description', fontClass: 'mt-1' }]"
    :offers="
        [
            {
                subtitle: [{ type: 'bigBody', text: 'Introduction of' }, { type: 'h2', text: 'MAIN OFFER' }, { type: 'bigBody', text: 'and its short description', fontClass: 'bold' }, { type: 'bigBody', text: 'with secondary informations ' }],
                copyCodeTitle: [{ type: 'smallBody', text: 'Avec le code :' }],
                copyCode: 'CODER',
                img: 'https://dummyimage.com/720x300/bababa/aaa',
                text: [{ type: 'smallBody', text: 'Details of the offer or small extras (extra kit or free delivery)' }],
                bundle: [
                    {
                        title: { type: 'h3', text: 'SECOND OFFER<sup>*</sup>' },
                        text: { type: 'smallBody', text: 'and its short description with secondary informations', fontClass: 'mt-1' }
                    },
                    {
                        title: { type: 'h3', text: 'THIRD OFFER<sup>*</sup>' },
                        text: { type: 'smallBody', text: 'and its short description with secondary informations', fontClass: 'mt-1' }
                    }
                ],
                idBtn:'id'
            }
        ]"
/>
```
