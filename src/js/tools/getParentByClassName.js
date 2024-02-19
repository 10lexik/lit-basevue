'use strict'

// Crawl through all element's parent until className is found
export const getParentByClassName = (element, className) => {
    let parent = element

    while (!parent.classList.contains(className)) {
        parent = parent.parentElement

        // Break if HTML tag is reached
        if (parent.nodeName === 'HTML') break
    }

    return parent
}
