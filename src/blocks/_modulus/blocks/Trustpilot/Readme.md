Trustpilot :

```vue
<Trustpilot
    :title="[{ type: 'h3', text: 'Main Title' }]"
    :text="[{ type: 'bigBody', text: 'and its short description with secondary informations' }]"
    :comment="[{ type: 'h4', text: 'Exceptional' }]"
    :rating="4.5"
    :onBased="{ type: 'smallBody', text: 'based on 19976 on' }"
/>
```

Trustpilot (White Logo) :

```vue
<Trustpilot
    whiteLogo
    :title="[{ type: 'h3', text: 'Main Title' }]"
    :text="[{ type: 'bigBody', text: 'and its short description with secondary informations' }]"
    :comment="[{ type: 'h4', text: 'Exceptional' }]"
    :rating="4"
    :onBased="{ type: 'smallBody', text: 'based on 19976 on' }"
/>
```
