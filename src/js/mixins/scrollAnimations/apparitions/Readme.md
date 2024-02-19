## Apparitions

This mixin provides the method `Appear` that triggers an animation on the element or Component it was set on

#### Use

To use this mixin you just need to import it and to add the propriety `mixins` in your Component.vue
apparitions had been imported and added to those components by default :

- `Fonts`
- `Img`
- `Cards`
- `Howto`
- `Offer`
- `Reinsurance`

```javascript
import ScrollAnimationMixin from '@/js/mixins/scrollAnimations/apparitions/apparitions'

export default {
  mixins: [ScrollAnimationMixin],
  // ...
};
```

In your component

```vue
<Component
     appear
/>
```

You can also customize the animations to match creative needs

```vue
<Component
    :appear="{
        scale: 0.5,
        rotate: 15,
        autoAlpha: 0
    }"
/>
```
