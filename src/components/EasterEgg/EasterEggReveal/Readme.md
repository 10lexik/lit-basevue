With default cover
```vue
<EasterEgg id="3" src="https://via.placeholder.com/50x50/ec008c/000000/?text=Egg%203" />

<EasterEggReveal eggs="3" style="padding: 20px 0;">
    <p style="text-align: center">Congratulations, you have found all the eggs !</p>
    <br />
    <Click button block fit label="Get your prize" />
</EasterEggReveal>
```

With custom cover
```vue
<EasterEgg id="4" src="https://via.placeholder.com/50x50/ec008c/000000/?text=Egg%204" />
<EasterEgg id="5" src="https://via.placeholder.com/50x50/ec008c/000000/?text=Egg%205" />
<EasterEgg id="6" src="https://via.placeholder.com/50x50/ec008c/000000/?text=Egg%206" />

<EasterEggReveal :eggs="['4', '5', '6']" style="padding: 20px 0;">
    <template v-slot:cover>
        <p>Find us to get the prize !</p>
        <div>
            <img style="display: inline-block;" src="https://via.placeholder.com/50x50/ec008c/000000/?text=Egg%204" />
            <img style="display: inline-block;" src="https://via.placeholder.com/50x50/ec008c/000000/?text=Egg%205" />
            <img style="display: inline-block;" src="https://via.placeholder.com/50x50/ec008c/000000/?text=Egg%206" />
        </div>
    </template>
    <p style="text-align: center">Congratulations, you have found all the eggs !</p>
    <br />
    <Click button block fit label="Get your prize" />
</EasterEggReveal>
```
