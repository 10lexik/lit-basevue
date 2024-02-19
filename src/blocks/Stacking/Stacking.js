'use strict'

/**
 * <div style="background-color: #cce5ff; color: #004085; padding: 10px 15px; border-radius: 5px;">
 *     Must be used alongside with a div that has the class 'block'
 * </div>
 */
export default {
    name: 'Stacking',
    props: {
        /**
         * Specifies the name of Stacking to identify it
         */
        name: {
            type: String
        },
        /**
         * Specifies the title of Stacking
         */
        title: {
            type: [String, Object, Array]
        },
        /**
         * Specifies the spacing between the offers
         */
        spacing: {
            value: Number,
            default: 10
        },
        /**
         * To remove shadows on stacked offers
         */
        noShadowsStacked: {
            type: Boolean
        }
    },
    computed: {
        blocks() {
            return Array.from(this.$refs.content.querySelectorAll('.bloc'))
        }
    },
    methods: {
        stackingAnimation() {
            const blocks = this.blocks
            const restBlocks = this.blocks.slice(1)
            const heightBlocks = []

            this.$gsap.set(this.$refs.content, { paddingBottom: (this.spacing * this.blocks.length) + document.querySelector('.sticky').clientHeight })

            restBlocks.forEach((block, index) => {
                const multiplier = index + 1
                // SET OTHER BlockS
                this.setBlockStyles(block, multiplier)
                heightBlocks.push(block.offsetHeight)
            })

            const timeline = this.createAnimationTimeline(this.blocks)
            this.animateRestBlocks(timeline, restBlocks)

            blocks.forEach((block, i) => {
                const scaledTitle = block.querySelectorAll('.offer__title')
                const position = i === 0 ? 0.3 : 0.8

                let scale
                switch (i) {
                case 0:
                    scale = 0.8 // Scale for the first block
                    break
                case 1:
                    scale = 0.9 // Scale for the second block
                    break
                // Add more cases as needed
                default:
                    scale = 1 // Default scale for other blocks
                    break
                }

                // Ensure scaledTitle is an array (if it's a NodeList, convert it using Array.from)
                const scaledTitleArray = Array.from(scaledTitle)

                if (i < blocks.length - 1) {
                    // Pass 'scale' and 'i' as parameters
                    this.animateBlock(timeline, block, scaledTitleArray, position, scale, i)
                }
            })
        },

        setBlockStyles(block, multiplier) {
            this.$gsap.set(block, { position: 'absolute', top: this.spacing * multiplier, width: '100%' })
        },

        createAnimationTimeline() {
            return this.$gsap.timeline({
                scrollTrigger: {
                    pin: this.$refs.stacking,
                    scrub: 1,
                    start: 'top top',
                    pinSpacing: true,
                    anticipatePin: 1,
                    end: '+=200%',
                    invalidateOnRefresh: true,
                    markers: false
                }
            })
        },

        animateRestBlocks(timeline, restBlocks) {
            timeline.fromTo(
                restBlocks,
                { y: () => window.innerHeight },
                { duration: 0.5, y: 0, stagger: 0.5 },
                0
            )
        },

        hexToHSL(hex) {
            // Ensure the hex is in proper format, e.g., "#RRGGBB"
            if (hex.length === 4) {
                hex = `#${[hex[1], hex[1], hex[2], hex[2], hex[3], hex[3]].join('')}`
            }

            let r = 0; let g = 0; let b = 0
            // 6 digits + # symbol
            if (hex.length === 7) {
                r = parseInt(hex.slice(1, 3), 16)
                g = parseInt(hex.slice(3, 5), 16)
                b = parseInt(hex.slice(5, 7), 16)
            }

            r /= 255
            g /= 255
            b /= 255
            let cmin = Math.min(r, g, b)
            let cmax = Math.max(r, g, b)
            let delta = cmax - cmin
            let h = 0
            let s = 0
            let l = 0

            if (delta === 0) {
                h = 0
            } else if (cmax === r) {
                h = ((g - b) / delta) % 6
            } else if (cmax === g) {
                h = (b - r) / delta + 2
            } else {
                h = (r - g) / delta + 4
            }

            h = Math.round(h * 60)
            if (h < 0) {
                h += 360
            }

            l = (cmax + cmin) / 2
            s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1))
            s *= 100
            l *= 100

            return `hsl(${h}, ${s}%, ${l}%)`
        },

        rgbToHex(rgb) {
            const rgbArray = rgb.match(/\d+/g).map(Number) // Extract numbers from the rgb string
            const hex = rgbArray.map((val) => {
                const hexVal = val.toString(16) // Convert to hexadecimal
                return hexVal.length === 1 ? `0${hexVal}` : hexVal // Add a zero if single digit
            }).join('')
            return `#${hex}`
        },

        animateBlock(timeline, block, scaledTitle, position, scale, i) {
            const computedStyle = window.getComputedStyle(block)
            const existingBackgroundColor = computedStyle.backgroundColor

            // Determine the starting color
            let startColor = (existingBackgroundColor !== 'rgba(0, 0, 0, 0)' && existingBackgroundColor !== 'transparent')
                ? existingBackgroundColor
                : 'hsl(0, 0%, 0%, 0)'

            // Convert the starting color to HSL if necessary
            if (startColor.startsWith('rgb')) {
                startColor = this.hexToHSL(this.rgbToHex(existingBackgroundColor))
            }

            // Compute the end color based on the scale
            const [hue, saturation, lightness] = startColor.match(/\d+/g).map(Number)
            const newLightness = Math.max(0, Math.min(100, lightness * scale))
            const endColor = `hsl(${hue}, ${saturation}%, ${newLightness}%)`
            if (!this.noShadowsStacked) {
                timeline
                    .fromTo(block, {
                        backgroundColor: startColor
                    }, {
                        duration: 0.25,
                        backgroundColor: endColor, // Apply the new background color
                        overwrite: 'auto'
                    }, position)
            }
            timeline
                .to(block, {
                    duration: 0.25,
                    width: `${100 * scale}%`,
                    overwrite: 'auto'
                }, position)
                .to(scaledTitle, {
                    duration: 0.25,
                    y: () => -this.$gsap.getProperty(block.querySelector('*'), 'padding-top'),
                    scale: scale,
                    transformOrigin: 'center center'
                }, position)
        }
    },
    mounted() {
        this.$EventBus.$emit('add-animation', this.stackingAnimation, 'apparitions>=1', 'stacking') // Start one second after the start of headerAnimation
    }
}
