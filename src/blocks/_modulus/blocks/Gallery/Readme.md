Gallery no effects :

```vue
<Gallery
    title="Ceci est un super titre"
    subtitle="Ceci est un petit sous-titre"
    :img="[
        { src: 'https://picsum.photos/200/300/?random=1', appear: { autoAlpha: 0 } },
        { src: 'https://picsum.photos/200/300/?random=2', appear: { autoAlpha: 0 } },
        { src: 'https://picsum.photos/200/300/?random=3', appear: { autoAlpha: 0 } },
        { src: 'https://picsum.photos/200/300/?random=4', appear: { autoAlpha: 0 } }
    ]
"/>
```

Gallery Shifted positions :

```vue
<Gallery
    shifted
    title="Ceci est un super titre"
    subtitle="Ceci est un petit sous-titre"
    :img="[
        { src: 'https://picsum.photos/200/300/?random=5', appear: { autoAlpha: 0 } },
        { src: 'https://picsum.photos/200/300/?random=6', appear: { autoAlpha: 0 } },
        { src: 'https://picsum.photos/200/300/?random=7', appear: { autoAlpha: 0 } },
        { src: 'https://picsum.photos/200/300/?random=8', appear: { autoAlpha: 0 } }
    ]
"/>
```

Gallery Shifted positions and Animated :

```vue
<Gallery
    shifted
    animate
    title="Ceci est un super titre"
    subtitle="Ceci est un petit sous-titre"
    :img="[
        { src: 'https://picsum.photos/200/300/?random=9', appear: { autoAlpha: 0 } },
        { src: 'https://picsum.photos/200/300/?random=10', appear: { autoAlpha: 0 } },
        { src: 'https://picsum.photos/200/300/?random=11', appear: { autoAlpha: 0 } },
        { src: 'https://picsum.photos/200/300/?random=12', appear: { autoAlpha: 0 } }
    ]
"/>
```

Gallery Shifted positions and Parallax effect :

```vue
<Gallery
    shifted
    parallax
    title="Ceci est un super titre"
    subtitle="Ceci est un petit sous-titre"
    :img="[
        { src: 'https://picsum.photos/200/300/?random=1', appear: { autoAlpha: 0 } },
        { src: 'https://picsum.photos/200/300/?random=2', appear: { autoAlpha: 0 } },
        { src: 'https://picsum.photos/200/300/?random=3', appear: { autoAlpha: 0 } },
        { src: 'https://picsum.photos/200/300/?random=4', appear: { autoAlpha: 0 } }
    ]
"/>
```

Gallery just Parallax effect :

```vue
<Gallery
    parallax
    title="Ceci est un super titre"
    subtitle="Ceci est un petit sous-titre"
    :img="[
        { src: 'https://picsum.photos/200/300/?random=1', appear: { autoAlpha: 0 } },
        { src: 'https://picsum.photos/200/300/?random=2', appear: { autoAlpha: 0 } },
        { src: 'https://picsum.photos/200/300/?random=3', appear: { autoAlpha: 0 } },
        { src: 'https://picsum.photos/200/300/?random=4', appear: { autoAlpha: 0 } }
    ]
"/>
```

Gallery Parallax effect and Animated :

```vue
<Gallery
    parallax
    animate
    title="Ceci est un super titre"
    subtitle="Ceci est un petit sous-titre"
    :img="[
        { src: 'https://picsum.photos/200/300/?random=1', appear: { autoAlpha: 0 } },
        { src: 'https://picsum.photos/200/300/?random=2', appear: { autoAlpha: 0 } },
        { src: 'https://picsum.photos/200/300/?random=3', appear: { autoAlpha: 0 } },
        { src: 'https://picsum.photos/200/300/?random=4', appear: { autoAlpha: 0 } }
    ]
"/>
```

Gallery Shifted positons, Parallax effect and Animated :

```vue
<Gallery
    shifted
    parallax
    animate
    title="Ceci est un super titre"
    subtitle="Ceci est un petit sous-titre"
    :img="[
        { src: 'https://picsum.photos/200/300/?random=1', appear: { autoAlpha: 0 } },
        { src: 'https://picsum.photos/200/300/?random=2', appear: { autoAlpha: 0 } },
        { src: 'https://picsum.photos/200/300/?random=3', appear: { autoAlpha: 0 } },
        { src: 'https://picsum.photos/200/300/?random=4', appear: { autoAlpha: 0 } }
    ]
"/>
```

Gallery with Videos :

```vue
<Gallery
    title="Simple Gallery"
    subtitle="Ceci est un petit sous-titre"
    :video="[
        { src: 'https://media.veepee.com/v1/media/fd88005f-a752-4edd-9ec4-6afa398411c9' },
        { src: 'https://media.veepee.com/v1/media/99cfbc81-8299-4eb9-b356-7b2db3326f1a' },
        { src: 'https://media.veepee.com/v1/media/99cfbc81-8299-4eb9-b356-7b2db3326f1a' },
        { src: 'https://media.veepee.com/v1/media/fd88005f-a752-4edd-9ec4-6afa398411c9' }
    ]
"/>
```
