import React from 'react'
import PropTypes from 'prop-types'

const Icon = function (props) {
    return (
        <i className={'fa fa-'+props.type} />
    )
}

Icon.propTypes = {
    type: PropTypes.string.isRequired
}
Icon.defaultProps = {}

export default Icon
