Default Fonts with String : ( default type is bigBody)

```vue
<Stacking
    :title="[{ type: 'h3', text: 'Main Title' }, { type: 'bigBody', text: 'and its short description with secondary informations' }]"
    :spacing="10"
>
    <div class="bloc" v-for="n in 3" :key="n">
       <YourComponent />
    </div>
</Stacking>
```

