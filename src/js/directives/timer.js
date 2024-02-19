'use strict'

import store from '@/store/'
import env from '@/js/conf/detectEnv'

let isRedirecting = false

function goFor(href, target) {
    if (href === 'noRedirectWebApp') {
        console.log(store.state.general.alertPopinWebapp)
        store.state.general.alertPopinWebapp = true
        console.log(store.state.general.alertPopinWebapp)
    } else {
        switch (target) {
        case '_top':
            window.top.location.href = href
            break
        case '_parent':
            window.parent.location.href = href
            break
        case '_blank':
            if (!env.isApp && !env.isIOS) window.open(href) // No tabs in App + iOS does not allow tabs to be opened via Javascript
            else window.location.href = href
            break
        default:
            window.location.href = href
        }
    }
}

export const timer = {
    inserted: (element) => {
        element.addEventListener('click', (e) => {
            e.preventDefault()

            const redirectionPopup = document.querySelector('.redirection-popup')
            const href = element.getAttribute('href')
            const target = element.getAttribute('target')
            const hasValidLink = href !== undefined && href !== '#' && href !== null

            if (hasValidLink && !isRedirecting) {
                isRedirecting = true

                // Create a random timer
                const random = parseInt(Math.random() * 2000)
                const timeoutInterval = 2000 + random

                // Show the redirection popup
                redirectionPopup.classList.add('active')

                // Redirects the user after the timer ends
                let timeout = setTimeout(() => {
                    clearTimeout(timeout)
                    goFor(href, target)

                    setTimeout(() => {
                        redirectionPopup.classList.remove('active')
                        isRedirecting = false
                    }, 500)
                }, timeoutInterval)
            }
        })
    }
}
