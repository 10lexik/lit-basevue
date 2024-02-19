'use strict'

let environment = {
    isAndroid: false,
    isIOS: false,
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isIE: false
}

// Get the user agent
const u = navigator.userAgent.toLowerCase()
let bodyClassEnv = 'desktop'

if (u.indexOf('iphone') !== -1 || u.indexOf('ipad') !== -1) {
    // iOS
    environment.isIOS = true
    bodyClassEnv = 'iOS'
} else if (u.indexOf('android') !== -1) {
    // Android
    environment.isAndroid = true
    bodyClassEnv = 'android'
} else {
    // Desktop
    environment.isDesktop = true
}

if(u.indexOf('ipad') !== -1) {
    // Tablet
    environment.isTablet = true
    document.getElementsByTagName('html')[0].classList.add('tablet')
}

// Add class to body, so we know the environment
document.getElementsByTagName('html')[0].classList.add(bodyClassEnv)

// If it's not desktop and not tablet, then it's mobile
if (!environment.isDesktop && !environment.isTablet) {
    environment.isMobile = true
    document.getElementsByTagName('html')[0].classList.add('mobile')
}

if (u.indexOf('vp-iphone') !== -1 || u.indexOf('vp-ipad') !== -1 || u.indexOf('vp-android-smartphone') !== -1) {
    // Veepee App
    document.getElementsByTagName('html')[0].classList.add('vp-app')
}

if (u.indexOf('MSIE ') > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
    environment.isIE = true
    document.getElementsByTagName('html')[0].classList.add('ie')
}

// Temporary Fix of isApp until iOs team fix it on their side
if (!environment.isAndroid && !environment.isDesktop && window.location.search.indexOf('otConsentString') !== -1) {
}

export default environment
