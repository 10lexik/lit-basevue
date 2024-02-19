```vue
<StoryViewer
    src="https://modelviewer.dev/shared-assets/models/glTF-Sample-Models/2.0/DamagedHelmet/glTF/DamagedHelmet.gltf"
    poster="https://via.placeholder.com/4000x3000/ffffff/?text=Loading..."
    skyboxImage="https://modelviewer.dev/shared-assets/environments/spruit_sunrise_1k_HDR.hdr"
    cameraControls
  >
  <template v-slot:hotspots>
    <StoryViewerHotspot
      name="ear"
      position="0.9152360144914096m -0.02375730423291502m -0.617089044014693m"
      normal="0.9677272431330697m -0.09448183798539585m 0.23361756181625104m"
      goTo="80"
      toggleAnnotation
    >
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum animi labore quas, amet quaerat obcaecati dicta dolorem soluta ut repudiandae eaque, atque dignissimos accusamus, dolor magnam suscipit odio explicabo accusantium!</p>
      <Click
        button
        block
        label="Hotspot:J'en profite 1"
        href="https://veepee.fr"
        buttonLabel="J'en profite"
      />
    </StoryViewerHotspot>
  </template>
  <template v-slot:popins>
      <StoryViewerPopin start="0" end="33">
          <h3>Popin 1</h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quis porro aliquid aspernatur delectus nulla, nemo sequi!
          Tenetur voluptatibus error aspernatur, cupiditate rem nesciunt porro, libero nam consequatur similique laudantium.
      </StoryViewerPopin>
      <StoryViewerPopin start="34" end="66">
          <h3>Popin 2</h3>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat rerum voluptate blanditiis veritatis quasi dolore aliquid
          incidunt, facilis minima amet quibusdam nobis nostrum commodi tenetur pariatur dolorem libero dicta vel.
      </StoryViewerPopin>
      <StoryViewerPopin start="67" end="100">
          <h3>Popin 3</h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis in nobis exercitationem optio molestiae alias! Soluta
          inventore sequi tenetur repellat architecto minus quidem distinctio voluptates eaque, sit, laudantium nemo excepturi.
      </StoryViewerPopin>
  </template>
</StoryViewer>

<!-- For an exemple with a "Story", add the following property to the StoryViewer component

   :story="{
      duration: 4000,
      showTimeline: true,
      showPercent: true,
      orbitCycles: [
          {
              start: 0,
              end: 1,
              cameraOrbit: '',
              cameraTarget: 'auto auto auto'
          },
          {
              start: 2,
              end: 98,
              cameraOrbit: 'calc(135deg - (env(window-scroll-y)) * 720deg) 75deg 105%',
              cameraTarget: 'auto auto auto'
          },
          {
              start: 99,
              end: 100,
              cameraOrbit: '75deg 75deg 100%',
              cameraTarget: 'auto auto auto'
          },
      ]
  }"

-->
```
