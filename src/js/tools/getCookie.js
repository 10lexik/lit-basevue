'use strict'

export const getCookie = (cookieName) => {
    let cookieContent = document.cookie
    let cookEnd, i, j, c
    cookieName = `${cookieName}=`

    for (i = 0, c = cookieContent.length; i < c; i++) {
        j = i + cookieName.length
        if (cookieContent.substring(i, j) === cookieName) {
            cookEnd = cookieContent.indexOf(';', j)
            if (cookEnd === -1) {
                cookEnd = cookieContent.length
            }
            return decodeURIComponent(cookieContent.substring(j, cookEnd))
        }
    }

    return null
}
