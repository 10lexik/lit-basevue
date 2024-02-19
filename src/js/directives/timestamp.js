'use strict'

import common from '../conf/common'
import store from '@/store/'

const before = (element, elementDate, currentDate) => {
    if (currentDate > new Date(elementDate)) element.style.display = 'none'
    else element.style.display = 'block'
}

const after = (element, elementDate, currentDate) => {
    if (currentDate <= new Date(elementDate)) element.style.display = 'none'
    else element.style.display = 'block'
}

const between = (element, elementDate, currentDate) => {
    if (currentDate < new Date(elementDate[0]) || currentDate > new Date(elementDate[1])) element.style.display = 'none'
    else element.style.display = 'block'
}

const setDisplay = (element, binding, date) => {
    let bindedDate = binding.value || common.operation.date
    if (binding.arg === 'before') before(element, bindedDate, date)
    else if (binding.arg === 'after') after(element, bindedDate, date)
    else if (binding.arg === 'between') between(element, bindedDate, date)
}

const timestamp = {
    bind: (element, binding, vnode) => {
        // the first time
        setDisplay(element, binding, store.state.general.currentDate)

        // anytime the current date updates itself
        store.watch(showOrHide => store.state.general.currentDate, currentDate => {
            setDisplay(element, binding, currentDate)
        })
    }
}

export {
    timestamp
}
