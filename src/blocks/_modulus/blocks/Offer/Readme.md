Offer :

```vue
<Offer
    :title="[{ type: 'h4', text: 'VEEPEE EXCLUSIVITY' }, { type: 'smallBody', text: 'Sales period', fontClass: 'mt-1' }]"
    :subtitle="[{ type: 'bigBody', text: 'Introduction of' }, { type: 'h2', text: 'MAIN OFFER' }, { type: 'bigBody', text: 'and its short description', fontClass: 'bold' }, { type: 'bigBody', text: 'with secondary informations ' }]"
    :copyCodeTitle="[{ type: 'smallBody', text: 'Avec le code :' }]"
    copyCode="CODER"
    img="https://dummyimage.com/340x240/bababa/aaa"
    :text="[{ type: 'smallBody', text: 'Details of the offer or small extras (extra kit or free delivery)' }]"
    idBtn="id"
/>
```

Offer with timer :

```vue
<Offer
    :title="[{ type: 'h4', text: 'VEEPEE EXCLUSIVITY' }, { type: 'smallBody', text: 'Sales period', fontClass: 'mt-1' }]"
    :subtitle="[{ type: 'bigBody', text: 'Introduction of' }, { type: 'h2', text: 'MAIN OFFER' }, { type: 'bigBody', text: 'and its short description', fontClass: 'bold' }, { type: 'bigBody', text: 'with secondary informations ' }]"
    :copyCodeTitle="[{ type: 'smallBody', text: 'Avec le code :' }]"
    copyCode="CODER"
    img="https://dummyimage.com/340x140/bababa/aaa"
    :text="[{ type: 'smallBody', text: 'Details of the offer or small extras (extra kit or free delivery)' }]"
    idBtn="id"
    timer
    timerDate="December 31, 2024 07:00:00"
    timerLabels
    timerTitle="End of the offer :"
/>
```

Offer row :

```vue
 <Offer
    row
    popIn
    appearChildren
    :title="[{ type: 'h4', text: 'VEEPEE EXCLUSIVITY' }, { type: 'smallBody', text: 'Sales period', fontClass: 'mt-1' }]"
    :subtitle="[{ type: 'bigBody', text: 'Introduction of' }, { type: 'h2', text: 'MAIN OFFER' }, { type: 'bigBody', text: 'and its short description', fontClass: 'bold' }, { type: 'bigBody', text: 'with secondary informations ' }]"
    :copyCodeTitle="[{ type: 'smallBody', text: 'Avec le code :' }]"
    copyCode="CODER"
    img="https://dummyimage.com/720x574/bababa/aaa"
    :text="[{ type: 'smallBody', text: 'Details of the offer or small extras (extra kit or free delivery)' }]"
    idBtn="id"
    />
```

Offer with voucher :

```vue
 <Offer
    :title="[{ type: 'h4', text: 'VEEPEE EXCLUSIVITY' }, { type: 'smallBody', text: 'Sales period', fontClass: 'mt-1' }]"
    :subtitle="[{ type: 'bigBody', text: 'Introduction of' }, { type: 'h2', text: 'MAIN OFFER' }, { type: 'bigBody', text: 'and its short description', fontClass: 'bold' }, { type: 'bigBody', text: 'with secondary informations ' }]"
    :voucher="{
        title: [{ type: 'smallBody', text: 'or in shop with the voucher :' }],
        src: 'https://www.veepee.fr',
        idBtn:'idVoucher'
    }"
    img="https://dummyimage.com/340x240/bababa/aaa"
    :text="[{ type: 'smallBody', text: 'Details of the offer or small extras (extra kit or free delivery)'}]"
    idBtn="id"
    />
```

Offer with double offer :

```vue
<Offer
    row
    popIn
    appearChildren
    :title="[{ type: 'h4', text: 'VEEPEE EXCLUSIVITY' }, { type: 'smallBody', text: 'Sales period', fontClass: 'mt-1' }]"
    :subtitle="[{ type: 'bigBody', text: 'Introduction of' },
    { type: 'h2', text: 'MAIN OFFER' },
    { type: 'bigBody', text: 'and its short description', fontClass: 'bold' },
    { type: 'bigBody', text: 'with secondary informations ' },
    { type: 'h2', text: '+', fontClass: 'plus' },
    { type: 'bigBody', text: 'Introduction of' },
    { type: 'h2', text: 'MAIN OFFER' },
    { type: 'bigBody', text: 'and its short description', fontClass: 'bold' },
    { type: 'bigBody', text: 'with secondary informations ' }]"
    :copyCodeTitle="[{ type: 'smallBody', text: 'Avec le code :' }]"
    copyCode="CODER"
    img="https://dummyimage.com/720x300/bababa/aaa"
    :text="[{ type: 'smallBody', text: 'Details of the offer or small extras (extra kit or free delivery)' }]"
    idBtn="id"
/>
```
