'use strict'

import detectEnv from '@/js/conf/detectEnv'
import { getParentByClassName } from '@/js/tools'

const videos = []

const insertedImage = (img, binding, vnode) => {
    // Workaround for images called with the Img component (v-loader:nested)
    const element = binding.arg === 'nested' ? img.parentElement : img

    // Conditions for loading
    const mobOnly = element.classList.contains('mob-only')
    const deskOnly = element.classList.contains('desktop-only')
    const noMob = element.classList.contains('no-mob')
    const noDesk = element.classList.contains('no-desktop')

    if (
        (mobOnly && detectEnv.isMobile) ||
        (deskOnly && detectEnv.isDesktop) ||
        (noMob && !detectEnv.isMobile) ||
        (noDesk && !detectEnv.isDesktop) ||
        (!mobOnly && !deskOnly && !noMob && !noDesk)
    ) {
        // Increase the count of images to be loaded
        vnode.context.$store.dispatch('loader/incrementImgCount')

        // Add an event when the image is fully loaded
        let image = new Image()
        image.addEventListener('load', () => {
            // Increase the count of loaded images
            vnode.context.$store.dispatch('loader/incrementImgLoaded')
        })

        // Insert the image to a fake DOM to trigger the "load" event
        image.src = img.getAttribute('src')
    }
}

const bindVideo = (video, binding, vnode) => {
    // Prevent loading ?
    const preventLoading = binding.value
    if (preventLoading === true) {
        return
    }

    const src = video.getAttribute('src')

    // Prevent native video loading and store the src in a data-attribute temporarily
    if (src) {
        video.removeAttribute('src')
        video.setAttribute('data-src', src)

        if (videos.indexOf(src) === -1) {
            // Add the video to the store
            videos.push(src)
        } else {
            // Flag the video as duplicate
            video.setAttribute('data-duplicate', true)
        }
    }
}

const insertedVideo = (video, binding, vnode) => {
    // Workaround for images called with the Img component (v-loader:nested)
    const element = binding.arg === 'nested' ? getParentByClassName(video, 'video') : video

    // Conditions for loading
    const mobOnly = element.classList.contains('mob-only')
    const deskOnly = element.classList.contains('desktop-only')
    const noMob = element.classList.contains('no-mob')
    const noDesk = element.classList.contains('no-desktop')

    if (
        (mobOnly && detectEnv.isMobile) ||
        (deskOnly && detectEnv.isDesktop) ||
        (noMob && !detectEnv.isMobile) ||
        (noDesk && !detectEnv.isDesktop) ||
        (!mobOnly && !deskOnly && !noMob && !noDesk)
    ) {
        // Prevent loading on duplicate videos
        if (video.getAttribute('data-duplicate')) return

        let src = video.getAttribute('data-src')
        const isExternalVideo = video.getAttribute('data-extsrc')
        if (isExternalVideo) src = element.getAttribute('data-name')
        const videoSize = parseInt(video.getAttribute('data-size'))
        // Prevent loading ?
        const preventLoading = binding.value
        if (!preventLoading) vnode.context.$store.dispatch('loader/registerVideo', { src, progress: 0 })

        // If local video
        if (!isExternalVideo) {
            // Create an HTTP request to download the video
            let req = new XMLHttpRequest()
            req.open('GET', src, true)
            if (!isExternalVideo) req.setRequestHeader('Cache-Control', 'public, max-age=31536000')
            req.responseType = 'blob'

            // Progress calculation
            let progress = 0
            req.addEventListener('progress', (event) => {
                if (event.lengthComputable) {
                    progress = (event.loaded / event.total) * 100
                } else {
                    progress = (event.loaded / videoSize) * 100
                }
            }, false)

            // Store update (setInterval is used for performance)
            if (!preventLoading) {
                let interval = setInterval(() => {
                    vnode.context.$store.dispatch('loader/progressVideo', { src, progress })
                    if (progress >= 100) clearInterval(interval)
                }, 200)
            }

            // When the video is fully loaded
            req.onload = function() {
                if (this.readyState === 4 && this.status === 200) {
                    progress = 100
                    vnode.context.$store.dispatch('loader/progressVideo', { src, progress })

                    let blobData = this.response
                    let objectURL = (detectEnv.isApp && detectEnv.isIOS) ? src : URL.createObjectURL(blobData)
                    const source = document.createElement('SOURCE')

                    // Set the media as source on the video elements
                    source.setAttribute('src', objectURL)
                    video.appendChild(source)
                    video.load()
                }
            }

            // Error
            req.onerror = function() {
                console.error('Video loading error:', src)
            }

            // Load the video
            req.send()
        }
    }
}

export const loader = {
    bind: (element, binding, vnode) => {
        switch (element.nodeName) {
        case 'VIDEO':
            bindVideo(element, binding, vnode)
            break
        }
    },
    inserted: (element, binding, vnode) => {
        switch (element.nodeName) {
        case 'IMG':
            insertedImage(element, binding, vnode)
            break
        case 'VIDEO':
            insertedVideo(element, binding, vnode)
            break
        }
    }
}
