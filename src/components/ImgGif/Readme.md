```vue
    <!-- with default speed -->
    <ImgGif :imgs="['https://brand-media-demo.front.vpgrp.net/experiences/crb-renault9/img/X071VEVP2WE_ENS_MDL2PSL1SERIELIM1_TEEQB_Ext_1.5eafecc6.jpg', 'https://brand-media-demo.front.vpgrp.net/experiences/crb-renault9/img/X071VEVP2WE_ENS_MDL2PSL1SERIELIM1_TEEQB_Ext_9.4a23a12c.jpg', 'https://brand-media-demo.front.vpgrp.net/experiences/crb-renault9/img/X071VEVP2WE_ENS_MDL2PSL1SERIELIM1_TEEQB_Ext_20.f52aea0a.jpg']" />
    <!-- with speed set to 3000 and fader -->
    <ImgGif :imgs="['https://brand-media-demo.front.vpgrp.net/experiences/crb-renault9/img/X071VEVP2WE_ENS_MDL2PSL1SERIELIM1_TEEQB_Ext_1.5eafecc6.jpg', 'https://brand-media-demo.front.vpgrp.net/experiences/crb-renault9/img/X071VEVP2WE_ENS_MDL2PSL1SERIELIM1_TEEQB_Ext_9.4a23a12c.jpg', 'https://brand-media-demo.front.vpgrp.net/experiences/crb-renault9/img/X071VEVP2WE_ENS_MDL2PSL1SERIELIM1_TEEQB_Ext_20.f52aea0a.jpg']" fader :speed="3000" />
```
Images used must have the same size for a coherent visual effect.<br>
For additional customisation on the fading effect, use css keyframes and target the transition tag<br>
This component uses the <Img /\> component. This means that the provided images path must be relative to the src/assets/img folder.