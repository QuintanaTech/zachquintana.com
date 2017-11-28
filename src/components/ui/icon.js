import React from 'react'
import PropTypes from 'prop-types'

const Icon = function (props) {
    let className = `fa fa-${props.type}`

    if (props.animation) {
        className += ` fa-${props.animation}`
    }

    if (props.size) {
        className += ` fa-${props.size}`
    }

    return (
        <i className={className} />
    )
}

Icon.propTypes = {
    type: PropTypes.string.isRequired,
    animation: PropTypes.string,
    size: PropTypes.string
}
Icon.defaultProps = {}

export default Icon
