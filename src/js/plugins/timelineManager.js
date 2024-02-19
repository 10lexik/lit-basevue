import { EventBus } from '@/js/plugins/event-bus'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const masterTimeline = gsap.timeline({
    paused: true,
    delay: 0.5
})

// timelineManager.js

// Register the event listener to handle adding animations.
EventBus.$on('add-animation', (animation, position = '+=0', label) => {
    // Ensure that relative position calculations using labels are valid.
    if (typeof position === 'string' && position.includes('+=') && label) {
        // Check if the label exists first.
        if (!masterTimeline.labels[label]) {
            // If not, create the label at the end of the timeline.
            masterTimeline.addLabel(label, '+=0')
        }
        // Then calculate the relative position based on the existing label.
        position = label + position
    }

    // Whether a label is provided or not, add the animation with calculated position or default.
    masterTimeline.add(animation, position)
})

export function playMasterTimeline() {
    masterTimeline.play()
}
