Default slider :

```vue
<Swiper>
    <Slide>
        <Img src="https://picsum.photos/900/250?random=1" />
    </Slide>
    <Slide>
        <Img src="https://picsum.photos/900/250?random=1" />
    </Slide>
    <Slide>
        <Img src="https://picsum.photos/900/250?random=1" />
    </Slide>
</Swiper>
```


Slider with custom options :

```vue
<Swiper name="swiper--2" :swiperParams="{
    speed: 800,
    autoplay: {
        delay: 2000
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar'
    }
}">
    <Slide>
        <Img src="https://picsum.photos/900/250?random=1" />
    </Slide>
    <Slide>
        <Img src="https://picsum.photos/900/250?random=1" />
    </Slide>
    <Slide>
        <Img src="https://picsum.photos/900/250?random=1" />
    </Slide>
</Swiper>
```

Slider with pagination under slides :

```vue
<Swiper name="swiper--3" paginationUnderSlides>
    <Slide>
        <Img src="https://picsum.photos/900/250?random=1" />
    </Slide>
    <Slide>
        <Img src="https://picsum.photos/900/250?random=1" />
    </Slide>
    <Slide>
        <Img src="https://picsum.photos/900/250?random=1" />
    </Slide>
</Swiper>
```
