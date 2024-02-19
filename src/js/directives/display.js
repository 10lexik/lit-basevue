'use strict'

export const display = {
    bind: (element, binding) => {
        switch (binding.arg) {
        case 'desktop':
        case 'desktop-only':
            element.classList.add('desktop-only')
            break

        case 'mob':
        case 'mob-only':
            element.classList.add('mob-only')
            break

        case 'no-desktop':
            element.classList.add('no-desktop')
            break

        case 'no-mob':
            element.classList.add('no-mob')
            break

        case 'app':
            element.classList.add('app-only')
            break

        case 'no-app':
            element.classList.add('no-app')
            break

        default:
            break
        }
    }
}
