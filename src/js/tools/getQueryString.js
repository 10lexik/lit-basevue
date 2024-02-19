'use strict'

export const getQueryString = (param, defaultValue) => {
    let vars = {}

    window.location.href.replace(location.hash, '').replace(
        /[?&]+([^=&]+)=?([^&]*)?/gi,
        function(m, key, value) {
            vars[key] = value !== undefined ? value : ''
        }
    )

    if (param) {
        return vars[param] ? vars[param] : defaultValue
    }
    return vars
}
