Countdown classical use with default date from the `src/js/conf/common.js` file :

```vue
<Countdown />
```

Countdown with date override :

```vue
<Countdown :date="new Date(new Date().getTime()+(1000*60*60*24)*2)" />
```
