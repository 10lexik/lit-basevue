## Header Animation Component

The HeaderAnimation component is a Vue.js component designed to create dynamic header animations with various effects. It is highly customizable and can be used to create eye-catching headers for web applications.
To use the properties of HeaderAnimation component Use the `animationIntro` property of the Header component as shown on the examples bellow.

Default : No animations

<video width="320" autoplay playsinline muted loop>
  <source src="https://media.veepee.com/v1/media/d9619a47-471e-4212-8e87-a04d074df6c1" type="video/mp4">
</video>

```vue
<Header
    :img="{
      mob: 'https://cdn.pixabay.com/photo/2020/12/09/09/00/circle-5816819_1280.jpg',
      desk: 'https://picsum.photos/1920/800/?random=1'
    }"
/>
```

Animation : clip-path animation slider

<video width="320" autoplay playsinline muted loop>
  <source src="https://media.veepee.com/v1/media/637b9436-79b9-4140-838e-9752355a379b" type="video/mp4">
</video>

```vue
<Header
    :img="{
        mob: ['https://cdn.pixabay.com/photo/2020/12/09/09/00/circle-5816819_1280.jpg', 'https://cdn.pixabay.com/photo/2023/03/14/18/22/boho-7852928_1280.jpg', 'https://cdn.pixabay.com/photo/2022/05/11/22/17/pink-hibiscus-7190314_1280.jpg', 'https://cdn.pixabay.com/photo/2023/03/20/21/44/cats-7865933_1280.jpg', 'https://cdn.pixabay.com/photo/2023/03/22/11/07/seeds-7869190_1280.jpg'],
        desk: ['https://picsum.photos/1920/800/?random=1', 'https://picsum.photos/1920/800/?random=2', 'https://picsum.photos/1920/800/?random=3', 'https://picsum.photos/1920/800/?random=4']
    }"
/>
```

Animation `animationIntro` : `imageAppear : true` + `textAppar : true`

<video width="320" autoplay playsinline muted loop>
  <source src="https://media.veepee.com/v1/media/890b7bad-e43b-45a7-98e2-df7507dd7064" type="video/mp4">
</video>

```vue
<Header
    animationIntro
    :img="{
        mob: 'https://cdn.pixabay.com/photo/2020/12/09/09/00/circle-5816819_1280.jpg',
        desk: 'https://picsum.photos/1920/800/?random=1'
    }"
/>
```

Animation `textAppear: 'all'` : makes all texts appearing at the same time

<video width="320" autoplay playsinline muted loop>
  <source src="https://admin.cs.veepee.tech/v2/items/1286c9f0-b791-4f9a-ad15-27e46cee82af" type="video/mp4">
</video>

```vue
<Header
    :animationIntro="{
        textAppear: 'all'
    }"
    :img="{
        mob: 'https://cdn.pixabay.com/photo/2020/12/09/09/00/circle-5816819_1280.jpg',
        desk: 'https://picsum.photos/1920/800/?random=1'
    }"
/>
```

Animation `imageAppear: false` : no animation on Image when `animationIntro` starts

<video width="320" autoplay playsinline muted loop>
  <source src="https://media.veepee.com/v1/media/05c3c09d-ef8a-49a3-8f57-48a03a0e1382" type="video/mp4">
</video>

```vue
<Header
    :animationIntro="{
        imageAppear: false
    }"
    :img="{
        mob: 'https://cdn.pixabay.com/photo/2020/12/09/09/00/circle-5816819_1280.jpg',
        desk: 'https://picsum.photos/1920/800/?random=1'
    }"
/>
```

Animation `scrollScale: true` : background image scaling when scrolling

<video width="320" autoplay playsinline muted loop>
  <source src="https://media.veepee.com/v1/media/36ecb4f7-6e47-4d0a-9ac0-32876fa8d948" type="video/mp4">
</video>

```vue
<Header
    :animationIntro="{
        scrollScale: true
    }"
    :img="{
        mob: 'https://cdn.pixabay.com/photo/2020/12/09/09/00/circle-5816819_1280.jpg',
        desk: 'https://picsum.photos/1920/800/?random=1'
    }"
/>
```

Animation `blurred: true` : background image scaling and/or blurring when scrolling

<video width="320" autoplay playsinline muted loop>
  <source src="https://media.veepee.com/v1/media/faa3975a-b35b-4b5b-b7e9-f76abf9faf65" type="video/mp4">
</video>

```vue
<Header
    :animationIntro="{
        blurred: true,
        scrollScale: true
    }"
    :img="{
        mob: 'https://cdn.pixabay.com/photo/2020/12/09/09/00/circle-5816819_1280.jpg',
        desk: 'https://picsum.photos/1920/800/?random=1'
    }"
/>
```

Animation Default pin `pin: true` : fixing background image until `'.app__container'` is reached

<video width="320" autoplay playsinline muted loop>
  <source src="https://media.veepee.com/v1/media/59a8f189-c166-41a1-8029-5b5825ae2dae" type="video/mp4">
</video>

```vue
<Header
    :animationIntro="{
        pin: true,
        blurred: true,
        scrollScale: true
    }"
    :img="{
        mob: 'https://cdn.pixabay.com/photo/2020/12/09/09/00/circle-5816819_1280.jpg',
        desk: 'https://picsum.photos/1920/800/?random=1'
    }"
/>
```

Animation Custom pin `pinToElement: '.element'` : fixing background image until `'.element'` is reached.

<video width="320" autoplay playsinline muted loop>
  <source src="https://media.veepee.com/v1/media/26eb49c6-4b4c-4761-ac57-fdea71a3fa51" type="video/mp4">
</video>

```vue
<Header
    :animationIntro="{
        pin: true,
        pinToElement: '.footer', // '.footer is just an example, you can choose any element you need'
        blurred: true,
        scrollScale: true
    }"
    :img="{
        mob: 'https://cdn.pixabay.com/photo/2020/12/09/09/00/circle-5816819_1280.jpg',
        desk: 'https://picsum.photos/1920/800/?random=1'
    }"
/>
```
