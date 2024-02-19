Default Fonts with String : ( default type is bigBody)

```vue
<Fonts text="Lorem Ipsum is simply dummy text"/>
<Fonts type="h4" text="Lorem Ipsum is simply dummy text"/>
```

Default Fonts with Object :

```vue
<Fonts :text="{ type: 'h1', text: 'Lorem Ipsum title'}"/>
```

Default Fonts with Array : ( with the different types )

```vue
<Fonts :text="[{ type: 'h1', text: 'Title h1'},{ type: 'h2', text: 'Title h2'},{ type: 'h3', text: 'Title h3'},{ type: 'h4', text: 'Title h4'},{ type: 'bigBody', text: 'Text bigBody', fontClass: ''},{ type: 'smallBody', text: 'Text smallBody'},{ type: 'ml', text: 'Mentions'}]"/>
```

Custom Class : ( bold & myCustomClass )

```vue
<Fonts :text="{ type: 'bigBody', text: 'Lorem Ipsum', fontClass: 'bold myCustomClass'}"/>
```
