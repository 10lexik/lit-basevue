'use strict'

import styled from 'vue-styled-components'

const checkListProps = {
    backgroundColor: String,
    color: String
}

const SChecklist = styled('div', checkListProps)`
    &.check-list-mod .check-list-mod__content {
        background-color: ${props => props.backgroundColor};
    }
    &.check-list-mod .check-list-mod__content .fonts {
        color: ${props => props.color};
    }
`

export default SChecklist
